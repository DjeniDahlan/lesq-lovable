
// Mapping course IDs from database for consistent usage across the app
export const COURSE_ID_MAPPING = {
  // These will be populated from the actual database IDs
  // For now, we'll fetch them dynamically
  'tps-snbt-2024': 'TPS_SNBT_2024',
  'react-js': 'REACT_JS',
  'nodejs': 'NODEJS',
  'python': 'PYTHON',
  'figma': 'FIGMA',
  'digital-marketing': 'DIGITAL_MARKETING'
};

// Helper function to get course ID from database
export const getCourseIdByTitle = async (title: string): Promise<string | null> => {
  const { supabase } = await import('@/integrations/supabase/client');
  
  const { data, error } = await supabase
    .from('courses')
    .select('id')
    .eq('title', title)
    .single();
    
  if (error || !data) {
    console.error('Error fetching course ID:', error);
    return null;
  }
  
  return data.id;
};
