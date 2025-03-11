// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.NEXT_SUPABASE_SERVICE_ROLE || '';

// 일반 클라이언트 (익명 권한)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 서버 측 작업을 위한 서비스 롤 클라이언트
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

// Next-Auth 세션을 사용하여 인증된 Supabase 클라이언트 생성
export const getAuthenticatedSupabase = async (supabaseAccessToken: string) => {
    return createClient(supabaseUrl, supabaseAnonKey, {
        global: {
            headers: {
                Authorization: `Bearer ${supabaseAccessToken}`,
            },
        },
    });
};