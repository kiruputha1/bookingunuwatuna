import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          id: string
          email: string
          password_hash: string
          full_name: string
          role: "admin" | "super_admin"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          full_name: string
          role?: "admin" | "super_admin"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          full_name?: string
          role?: "admin" | "super_admin"
          created_at?: string
          updated_at?: string
        }
      }
      rental_categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      rentals: {
        Row: {
          id: string
          category_id: string | null
          title: string
          description: string | null
          price_per_day: number
          location: string | null
          features: string[] | null
          images: string[] | null
          availability: boolean | null
          max_capacity: number | null
          contact_info: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category_id?: string | null
          title: string
          description?: string | null
          price_per_day: number
          location?: string | null
          features?: string[] | null
          images?: string[] | null
          availability?: boolean | null
          max_capacity?: number | null
          contact_info?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category_id?: string | null
          title?: string
          description?: string | null
          price_per_day?: number
          location?: string | null
          features?: string[] | null
          images?: string[] | null
          availability?: boolean | null
          max_capacity?: number | null
          contact_info?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          title: string
          description: string | null
          price: number | null
          duration: string | null
          location: string | null
          includes: string[] | null
          excludes: string[] | null
          images: string[] | null
          itinerary: any | null
          availability: boolean | null
          max_participants: number | null
          contact_info: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price?: number | null
          duration?: string | null
          location?: string | null
          includes?: string[] | null
          excludes?: string[] | null
          images?: string[] | null
          itinerary?: any | null
          availability?: boolean | null
          max_participants?: number | null
          contact_info?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price?: number | null
          duration?: string | null
          location?: string | null
          includes?: string[] | null
          excludes?: string[] | null
          images?: string[] | null
          itinerary?: any | null
          availability?: boolean | null
          max_participants?: number | null
          contact_info?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          featured_image: string | null
          author_id: string | null
          status: "draft" | "published" | "archived"
          seo_title: string | null
          seo_description: string | null
          tags: string[] | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          featured_image?: string | null
          author_id?: string | null
          status?: "draft" | "published" | "archived"
          seo_title?: string | null
          seo_description?: string | null
          tags?: string[] | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          featured_image?: string | null
          author_id?: string | null
          status?: "draft" | "published" | "archived"
          seo_title?: string | null
          seo_description?: string | null
          tags?: string[] | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          customer_whatsapp: string | null
          booking_type: "rental" | "service"
          item_id: string
          item_title: string
          start_date: string
          end_date: string | null
          participants: number | null
          total_amount: number | null
          special_requests: string | null
          status: "pending" | "confirmed" | "cancelled" | "completed"
          whatsapp_sent: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_name: string
          customer_email: string
          customer_phone: string
          customer_whatsapp?: string | null
          booking_type: "rental" | "service"
          item_id: string
          item_title: string
          start_date: string
          end_date?: string | null
          participants?: number | null
          total_amount?: number | null
          special_requests?: string | null
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          whatsapp_sent?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          customer_whatsapp?: string | null
          booking_type?: "rental" | "service"
          item_id?: string
          item_title?: string
          start_date?: string
          end_date?: string | null
          participants?: number | null
          total_amount?: number | null
          special_requests?: string | null
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          whatsapp_sent?: boolean | null
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string | null
          message: string
          status: "unread" | "read" | "replied"
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject?: string | null
          message: string
          status?: "unread" | "read" | "replied"
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string | null
          message?: string
          status?: "unread" | "read" | "replied"
          created_at?: string
        }
      }
    }
  }
}
