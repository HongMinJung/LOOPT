CREATE TABLE user_stats (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  studies_joined INTEGER DEFAULT 0,
  studies_hosted INTEGER DEFAULT 0,
  total_contributions INTEGER DEFAULT 0,
  completion_rate NUMERIC DEFAULT 0,
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
