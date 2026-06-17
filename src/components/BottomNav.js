'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, FileText, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname(); 

  
  const isActive = (path) => pathname === path;

  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-40 pb-6">
      
      {/* Home Tab */}
      <Link href="/" className="flex flex-col items-center gap-1 cursor-pointer">
        <Home className={`w-6 h-6 ${isActive('/') ? 'text-blue-500' : 'text-gray-400'}`} />
        <span className={`text-[10px] font-medium ${isActive('/') ? 'text-blue-500' : 'text-gray-400'}`}>Home</span>
      </Link>

      {/* Courses Tab (Placeholder) */}
      <Link href="/courses" className="flex flex-col items-center gap-1 cursor-pointer">
        <BookOpen className={`w-6 h-6 ${isActive('/courses') ? 'text-blue-500' : 'text-gray-400'}`} />
        <span className={`text-[10px] font-medium ${isActive('/courses') ? 'text-blue-500' : 'text-gray-400'}`}>Courses</span>
      </Link>

      {/* Test Tab (Placeholder) */}
      <Link href="/test" className="flex flex-col items-center gap-1 cursor-pointer">
        <FileText className={`w-6 h-6 ${isActive('/test') ? 'text-blue-500' : 'text-gray-400'}`} />
        <span className={`text-[10px] font-medium ${isActive('/test') ? 'text-blue-500' : 'text-gray-400'}`}>Test</span>
      </Link>

      {/* Me (Settings) Tab */}
      <Link href="/settings" className="flex flex-col items-center gap-1 cursor-pointer">
        <User className={`w-6 h-6 ${isActive('/settings') ? 'text-blue-500' : 'text-gray-400'}`} />
        <span className={`text-[10px] font-medium ${isActive('/settings') ? 'text-blue-500' : 'text-gray-400'}`}>Me</span>
      </Link>

    </div>
  );
}