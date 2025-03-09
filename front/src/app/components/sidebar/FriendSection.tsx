// app/(main)/components/sidebar/FriendSection.tsx
'use client';

import { FC, useState, useRef, useEffect } from 'react';

interface Friend {
    id: string;
    name: string;
    role: string;
    status: 'online' | 'offline' | 'away';
}

interface FriendSectionProps {
    friends: Friend[];
}

const FriendSection: FC<FriendSectionProps> = ({ friends }) => {
    const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const friendRefs = useRef<Map<string, HTMLLIElement>>(new Map());

    // 친구 클릭 핸들러
    const handleFriendClick = (friend: Friend) => {
        // 이미 선택된 친구를 다시 클릭하면 팝업 닫기
        if (selectedFriend && selectedFriend.id === friend.id) {
            setSelectedFriend(null);
            setShowPopup(false);
        } else {
            setSelectedFriend(friend);
            setShowPopup(true);
        }
    };

    // 팝업 외부 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    // 팝업 위치 계산
    const getPopupPosition = () => {
        if (!selectedFriend) return { top: 0, left: 0 };

        const friendElement = friendRefs.current.get(selectedFriend.id);
        if (!friendElement) return { top: 0, left: 0 };

        const rect = friendElement.getBoundingClientRect();

        // 팝업이 뷰포트 오른쪽을 넘어가지 않도록 조정
        const popupWidth = 256; // w-64는 16rem이고 16rem = 256px
        const leftPosition = Math.min(rect.left, window.innerWidth - popupWidth - 16);

        return {
            // position이 fixed라면 viewport 기준, absolute라면 가장 가까운 positioned 부모 기준
            top: rect.bottom + window.scrollY,
            left: leftPosition + window.scrollX
        };
    };

    return (
        <div className="py-4 relative">
            <h2 className="px-6 py-2 text-base font-bold uppercase text-gray-800">Friend</h2>
            <ul>
                {friends.map((friend) => (
                    <li
                        key={friend.id}
                        ref={(el) => {
                            if (el) friendRefs.current.set(friend.id, el);
                            else friendRefs.current.delete(friend.id);
                        }}
                        className="px-6 py-3 flex items-center hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleFriendClick(friend)}
                    >
                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500">
                            {friend.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-700">{friend.name}</span>
                            <span className="text-xs text-gray-500">{friend.role}</span>
                        </div>
                        <span
                            className={`ml-auto h-2.5 w-2.5 rounded-full ${
                                friend.status === 'online' ? 'bg-green-500' :
                                    friend.status === 'away' ? 'bg-yellow-400' : 'bg-gray-300'
                            }`}
                        ></span>
                    </li>
                ))}
            </ul>

            {/* 친구 정보 팝업 */}
            {showPopup && selectedFriend && (
                <div
                    ref={popupRef}
                    className="fixed z-50 bg-white shadow-lg rounded-lg border border-gray-200 w-64 p-4"
                    style={getPopupPosition()}
                >
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-600 text-xl">
                            {selectedFriend.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-medium">{selectedFriend.name}</h3>
                            <p className="text-sm text-gray-500">{selectedFriend.role}</p>
                            <span
                                className={`inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs ${
                                    selectedFriend.status === 'online' ? 'bg-green-100 text-green-800' :
                                        selectedFriend.status === 'away' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                {selectedFriend.status === 'online' ? '온라인' :
                    selectedFriend.status === 'away' ? '자리비움' : '오프라인'}
              </span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition">
                            대화하기
                        </button>
                        <button className="w-full bg-white text-blue-600 border border-blue-600 py-2 rounded-md text-sm hover:bg-blue-50 transition">
                            스터디 초대하기
                        </button>
                        <button className="w-full bg-white text-gray-600 border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-50 transition">
                            프로필 보기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FriendSection;