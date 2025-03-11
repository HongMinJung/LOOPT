CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR NOT NULL UNIQUE,
  username VARCHAR NOT NULL UNIQUE,
  name VARCHAR NOT NULL,
  bio TEXT,
  profile_image TEXT,
  join_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  location VARCHAR,
  education VARCHAR,
  occupation VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
