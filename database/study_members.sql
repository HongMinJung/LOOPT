CREATE TABLE study_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  study_id UUID REFERENCES studies(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR DEFAULT 'member', -- 'host', 'member'
  join_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR NOT NULL, -- 'active', 'inactive', 'banned'
  UNIQUE(study_id, user_id)
);
