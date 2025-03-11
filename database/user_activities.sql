CREATE TABLE user_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR NOT NULL, -- 'join', 'comment', 'host', 'complete', 'contribute', etc.
  content TEXT NOT NULL,
  study_id UUID REFERENCES studies(id) ON DELETE SET NULL,
  meeting_id UUID REFERENCES study_meetings(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
