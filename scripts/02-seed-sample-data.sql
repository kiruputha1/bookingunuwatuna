-- Insert sample rental data
INSERT INTO rentals (category_id, title, description, price_per_day, location, features, images, max_capacity, contact_info) VALUES
(
  (SELECT id FROM rental_categories WHERE slug = 'hotels'),
  'Ocean View Resort',
  'Luxury beachfront resort with stunning ocean views and world-class amenities.',
  150.00,
  'Colombo Beach',
  ARRAY['Ocean View', 'Swimming Pool', 'Restaurant', 'Spa', 'WiFi', 'Air Conditioning'],
  ARRAY['/placeholder.svg?height=300&width=400'],
  4,
  '{"phone": "+94771234567", "whatsapp": "+94771234567", "email": "info@oceanviewresort.lk"}'
),
(
  (SELECT id FROM rental_categories WHERE slug = 'cars'),
  'Toyota Prius Hybrid',
  'Fuel-efficient hybrid car perfect for city and highway driving.',
  45.00,
  'Colombo Airport',
  ARRAY['Automatic', 'Air Conditioning', 'GPS', 'Bluetooth', 'Fuel Efficient'],
  ARRAY['/placeholder.svg?height=300&width=400'],
  5,
  '{"phone": "+94771234568", "whatsapp": "+94771234568"}'
),
(
  (SELECT id FROM rental_categories WHERE slug = 'bikes'),
  'Honda CB 150R',
  'Sporty motorcycle ideal for exploring the island.',
  25.00,
  'Kandy City',
  ARRAY['150cc Engine', 'Digital Display', 'LED Lights', 'Disc Brakes'],
  ARRAY['/placeholder.svg?height=300&width=400'],
  2,
  '{"phone": "+94771234569", "whatsapp": "+94771234569"}'
);

-- Insert sample services data
INSERT INTO services (title, description, price, duration, location, includes, excludes, images, itinerary, max_participants, contact_info) VALUES
(
  'Sigiriya & Dambulla Day Tour',
  'Explore the ancient rock fortress of Sigiriya and the golden temple of Dambulla in one amazing day.',
  85.00,
  'Full Day (8 hours)',
  'Sigiriya & Dambulla',
  ARRAY['Transportation', 'English Speaking Guide', 'Entrance Tickets', 'Lunch', 'Water Bottles'],
  ARRAY['Personal Expenses', 'Tips', 'Camera Tickets'],
  ARRAY['/placeholder.svg?height=300&width=400'],
  '{"day1": {"morning": "Pick up from hotel, drive to Sigiriya", "afternoon": "Climb Sigiriya Rock Fortress", "evening": "Visit Dambulla Cave Temple, return to hotel"}}',
  15,
  '{"phone": "+94771234570", "whatsapp": "+94771234570", "email": "tours@srilankadiscovery.com"}'
),
(
  'Kandy Cultural Triangle',
  'Immerse yourself in Sri Lankan culture with visits to the Temple of the Tooth and traditional dance performances.',
  65.00,
  'Half Day (4 hours)',
  'Kandy',
  ARRAY['Transportation', 'Guide', 'Temple Entrance', 'Cultural Show Tickets'],
  ARRAY['Meals', 'Personal Expenses'],
  ARRAY['/placeholder.svg?height=300&width=400'],
  '{"day1": {"morning": "Temple of the Tooth visit", "afternoon": "Royal Botanical Gardens, Cultural dance show"}}',
  20,
  '{"phone": "+94771234571", "whatsapp": "+94771234571"}'
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, status, seo_title, seo_description, tags, published_at) VALUES
(
  'Top 10 Must-Visit Places in Sri Lanka',
  'top-10-must-visit-places-sri-lanka',
  'Discover the most breathtaking destinations that make Sri Lanka a paradise for travelers.',
  'Sri Lanka, the pearl of the Indian Ocean, offers an incredible diversity of experiences...',
  '/placeholder.svg?height=400&width=600',
  'published',
  'Top 10 Must-Visit Places in Sri Lanka | Travel Guide',
  'Explore the best destinations in Sri Lanka including Sigiriya, Kandy, Galle and more. Complete travel guide with tips and recommendations.',
  ARRAY['travel', 'sri lanka', 'destinations', 'tourism'],
  NOW()
),
(
  'Best Time to Visit Sri Lanka: Weather Guide',
  'best-time-visit-sri-lanka-weather-guide',
  'Plan your perfect Sri Lankan adventure with our comprehensive weather and seasonal guide.',
  'Understanding Sri Lanka''s weather patterns is crucial for planning the perfect trip...',
  '/placeholder.svg?height=400&width=600',
  'published',
  'Best Time to Visit Sri Lanka - Complete Weather Guide',
  'Discover the best time to visit Sri Lanka with our detailed weather guide. Learn about monsoons, dry seasons, and regional climate differences.',
  ARRAY['weather', 'travel planning', 'sri lanka', 'seasons'],
  NOW() - INTERVAL '1 week'
);
