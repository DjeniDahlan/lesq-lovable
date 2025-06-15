export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      course_purchases: {
        Row: {
          course_id: string
          id: string
          price: number
          purchase_date: string
          status: string
          user_id: string
        }
        Insert: {
          course_id: string
          id?: string
          price: number
          purchase_date?: string
          status?: string
          user_id: string
        }
        Update: {
          course_id?: string
          id?: string
          price?: number
          purchase_date?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_purchases_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_stats: {
        Row: {
          average_rating: number | null
          course_id: string | null
          id: string
          last_updated: string
          total_enrollments: number | null
          total_revenue: number | null
          total_reviews: number | null
        }
        Insert: {
          average_rating?: number | null
          course_id?: string | null
          id?: string
          last_updated?: string
          total_enrollments?: number | null
          total_revenue?: number | null
          total_reviews?: number | null
        }
        Update: {
          average_rating?: number | null
          course_id?: string | null
          id?: string
          last_updated?: string
          total_enrollments?: number | null
          total_revenue?: number | null
          total_reviews?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "course_stats_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: true
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          category: string
          created_at: string
          curriculum: Json | null
          description: string | null
          discount_percentage: number | null
          education_level: string
          id: string
          instructor_id: string | null
          is_active: boolean | null
          materials: Json | null
          overview: string | null
          price: number
          questions: Json | null
          reviews: Json | null
          subject: string
          thumbnail_url: string | null
          title: string
          updated_at: string
          what_you_will_learn: string[] | null
        }
        Insert: {
          category: string
          created_at?: string
          curriculum?: Json | null
          description?: string | null
          discount_percentage?: number | null
          education_level: string
          id?: string
          instructor_id?: string | null
          is_active?: boolean | null
          materials?: Json | null
          overview?: string | null
          price?: number
          questions?: Json | null
          reviews?: Json | null
          subject: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          what_you_will_learn?: string[] | null
        }
        Update: {
          category?: string
          created_at?: string
          curriculum?: Json | null
          description?: string | null
          discount_percentage?: number | null
          education_level?: string
          id?: string
          instructor_id?: string | null
          is_active?: boolean | null
          materials?: Json | null
          overview?: string | null
          price?: number
          questions?: Json | null
          reviews?: Json | null
          subject?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          what_you_will_learn?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      instructor_applications: {
        Row: {
          admin_notes: string | null
          created_at: string
          education: string
          email: string
          experience: string
          expertise: string[]
          full_name: string
          id: string
          status: Database["public"]["Enums"]["instructor_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          education: string
          email: string
          experience: string
          expertise: string[]
          full_name: string
          id?: string
          status?: Database["public"]["Enums"]["instructor_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          education?: string
          email?: string
          experience?: string
          expertise?: string[]
          full_name?: string
          id?: string
          status?: Database["public"]["Enums"]["instructor_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      instructor_documents: {
        Row: {
          application_id: string
          created_at: string
          description: string | null
          file_url: string | null
          id: string
          project_url: string | null
          title: string
          type: string
        }
        Insert: {
          application_id: string
          created_at?: string
          description?: string | null
          file_url?: string | null
          id?: string
          project_url?: string | null
          title: string
          type: string
        }
        Update: {
          application_id?: string
          created_at?: string
          description?: string | null
          file_url?: string | null
          id?: string
          project_url?: string | null
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "instructor_documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "instructor_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string
          education: string | null
          email: string
          experience: string | null
          expertise: string | null
          full_name: string
          id: string
          role: string
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          education?: string | null
          email: string
          experience?: string | null
          expertise?: string | null
          full_name: string
          id: string
          role: string
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          education?: string | null
          email?: string
          experience?: string | null
          expertise?: string | null
          full_name?: string
          id?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      instructor_status: "pending" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      instructor_status: ["pending", "approved", "rejected"],
    },
  },
} as const
