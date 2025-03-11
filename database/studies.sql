CREATE TABLE studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL,
  description TEXT,
  type VARCHAR NOT NULL,
  format VARCHAR NOT NULL, -- 'online', 'offline', 'hybrid'
  max_members INTEGER NOT NULL,
  status VARCHAR NOT NULL, -- 'recruiting', 'in_progress', 'completed', 'cancelled'
  host_id UUID REFERENCES users(id) ON DELETE SET NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
