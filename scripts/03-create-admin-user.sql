-- Create admin user in auth.users table
-- Insert admin user directly into auth.users (this is a special case for admin setup)
-- Note: In production, you should use Supabase auth.signUp() instead

-- First, let's create a simple admin check function
CREATE OR REPLACE FUNCTION is_admin(user_email text)
RETURNS boolean AS $$
BEGIN
  -- For now, we'll consider these emails as admin
  RETURN user_email IN ('admin@tourism.com', 'admin@example.com');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a simple admin_users table for role management
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin emails
INSERT INTO admin_users (email) VALUES 
  ('admin@tourism.com'),
  ('admin@example.com')
ON CONFLICT (email) DO NOTHING;
