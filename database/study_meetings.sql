CREATE TABLE study_meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  study_id UUID REFERENCES studies(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  meeting_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration INTEGER, -- 분 단위
  location VARCHAR, -- 온라인 모임인 경우 URL, 오프라인 모임인 경우 주소
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
