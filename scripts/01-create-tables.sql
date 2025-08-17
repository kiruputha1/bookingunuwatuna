-- Create admin users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table for rentals
CREATE TABLE IF NOT EXISTS rental_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create rentals table (hotels, rooms, vehicles)
CREATE TABLE IF NOT EXISTS rentals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES rental_categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  price_per_day DECIMAL(10,2) NOT NULL,
  location TEXT,
  features TEXT[], -- Array of features
  images TEXT[], -- Array of image URLs
  availability BOOLEAN DEFAULT true,
  max_capacity INTEGER,
  contact_info JSONB, -- Store phone, whatsapp, etc.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table (tour packages, trips, locations)
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  duration TEXT, -- e.g., "3 days", "Half day"
  location TEXT,
  includes TEXT[], -- What's included in the package
  excludes TEXT[], -- What's not included
  images TEXT[], -- Array of image URLs
  itinerary JSONB, -- Detailed day-by-day itinerary
  availability BOOLEAN DEFAULT true,
  max_participants INTEGER,
  contact_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES admin_users(id),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  seo_title TEXT,
  seo_description TEXT,
  tags TEXT[],
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_whatsapp TEXT,
  booking_type TEXT NOT NULL CHECK (booking_type IN ('rental', 'service')),
  item_id UUID NOT NULL, -- References either rentals.id or services.id
  item_title TEXT NOT NULL, -- Store title for reference
  start_date DATE NOT NULL,
  end_date DATE,
  participants INTEGER DEFAULT 1,
  total_amount DECIMAL(10,2),
  special_requests TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  whatsapp_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default rental categories
INSERT INTO rental_categories (name, slug, description, icon) VALUES
('Hotels', 'hotels', 'Comfortable accommodation options', 'hotel'),
('Rooms', 'rooms', 'Private rooms and guest houses', 'bed'),
('Bikes', 'bikes', 'Motorcycle and bicycle rentals', 'bike'),
('Three Wheelers', 'three-wheelers', 'Tuk-tuk and auto rickshaw rentals', 'car'),
('Cars', 'cars', 'Car rentals for comfortable travel', 'car'),
('Vans', 'vans', 'Van rentals for group travel', 'truck')
ON CONFLICT (slug) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_rentals_category ON rentals(category_id);
CREATE INDEX IF NOT EXISTS idx_rentals_availability ON rentals(availability);
CREATE INDEX IF NOT EXISTS idx_services_availability ON services(availability);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(start_date);
