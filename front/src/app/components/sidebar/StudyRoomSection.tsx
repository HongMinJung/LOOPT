// app/(main)/components/sidebar/StudyRoomSection.tsx
'use client';

import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

interface StudyMenuItem {
    id: string;
    title: string;
    href: string;
    icon: JSX.Element;
    badge?: number;
}

interface StudyRoomSectionProps {
    menuItems: StudyMenuItem[];
}

const StudyRoomSection: FC<StudyRoomSectionProps> = ({ menuItems }) => {
    const pathname = usePathname();

    return (
        <div className="py-4">
            <h2 className="px-6 py-2 text-base font-bold uppercase text-gray-800">Study Room</h2>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            className={`flex items-center px-6 py-3 text-sm hover:bg-gray-100 ${
                                pathname === item.href ? 'bg-blue-100 text-blue-600 font-medium  hover:bg-blue-100' : 'text-gray-700 '
                            }`}
                        >
              <span className={`mr-3 ${pathname === item.href ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.icon}
              </span>
                            {item.title}
                            {item.badge && (
                                <span className="ml-auto bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudyRoomSection;