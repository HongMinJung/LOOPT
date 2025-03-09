// app/(main)/components/sidebar/BookmarksSection.tsx
'use client';

import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

interface Bookmark {
    id: string;
    title: string;
    href: string;
}

interface BookmarksSectionProps {
    bookmarks: Bookmark[];
}

const BookmarksSection: FC<BookmarksSectionProps> = ({ bookmarks }) => {
    const pathname = usePathname();

    return (
        <div className="py-4">
            <h2 className="px-6 py-2 text-base font-bold uppercase text-gray-800">Book Marks</h2>
            <ul>
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id}>
                        <Link
                            href={bookmark.href}
                            className={`flex items-center px-6 py-3 text-sm hover:bg-gray-100 ${
                                pathname === bookmark.href ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700'
                            }`}
                        >
                            <svg
                                className={`w-5 h-5 mr-3 ${pathname === bookmark.href ? 'text-blue-600' : 'text-gray-500'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                ></path>
                            </svg>
                            {bookmark.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookmarksSection;