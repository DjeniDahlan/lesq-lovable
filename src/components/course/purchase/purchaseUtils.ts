
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
    
    let finalCourseId = courseId;
    
    // If not a UUID, we need to generate one or use a different approach
    if (!isValidUUID) {
      // For now, let's generate a UUID based on the course identifier
      // This is a temporary solution - ideally you'd want to have proper UUIDs in your course system
      const crypto = globalThis.crypto;
      const encoder = new TextEncoder();
      const data = encoder.encode(courseId);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      
      // Take first 16 bytes and format as UUID
      const uuidBytes = hashArray.slice(0, 16);
      uuidBytes[6] = (uuidBytes[6] & 0x0f) | 0x40; // Version 4
      uuidBytes[8] = (uuidBytes[8] & 0x3f) | 0x80; // Variant bits
      
      finalCourseId = [
        uuidBytes.slice(0, 4).map(b => b.toString(16).padStart(2, '0')).join(''),
        uuidBytes.slice(4, 6).map(b => b.toString(16).padStart(2, '0')).join(''),
        uuidBytes.slice(6, 8).map(b => b.toString(16).padStart(2, '0')).join(''),
        uuidBytes.slice(8, 10).map(b => b.toString(16).padStart(2, '0')).join(''),
        uuidBytes.slice(10, 16).map(b => b.toString(16).padStart(2, '0')).join('')
      ].join('-');
    }

    const { error } = await supabase
      .from('course_purchases')
      .insert({
        user_id: session.user.id,
        course_id: finalCourseId,
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
