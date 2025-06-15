
import { supabase } from '@/integrations/supabase/client';

export const createPurchaseRecord = async (
  courseId: string,
  price: number
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session?.user) {
      return { success: false, error: 'User not authenticated' };
    }

    // Check if courseId is a valid UUID format
    const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(courseId);
    
    if (!isValidUUID) {
      return { success: false, error: 'Terjadi kesalahan. Kursus tidak ditemukan. Hubungi admin.' };
    }

    const { error } = await supabase
      .from('course_purchases')
      .insert({
        user_id: session.user.id,
        course_id: courseId,
        price: price || 0,
        status: 'pending'
      });

    if (error) {
      console.error('Error creating purchase record:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in createPurchaseRecord:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
};
