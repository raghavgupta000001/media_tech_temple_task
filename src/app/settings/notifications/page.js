'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] pb-24 font-sans">
      {/* Header - Notice the href is now /#settings */}
      <div className="flex items-center px-4 py-5 bg-white border-b border-gray-100 sticky top-0 z-10">
        <Link href="/#settings" className="p-2 -ml-2 cursor-pointer">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="text-lg font-bold ml-4">Notification</h1>
      </div>

      {/* Settings List */}
      <div className="mt-4 bg-white border-y border-gray-100 flex flex-col">
        <p className="px-4 pt-4 text-xs font-medium text-gray-400 mb-2">Friend requests</p>
        <ToggleRow title="Private mode" initialActive={false} />
        
        <p className="px-4 pt-6 text-xs font-medium text-gray-400 mb-2">General</p>
        <ToggleRow title="Notifications" initialActive={true} />
        <ToggleRow title="Correction received" initialActive={true} />
        <ToggleRow title="Correction added" initialActive={true} />
        <ToggleRow title="Replies" initialActive={true} />
        <ToggleRow title="Friend requests" initialActive={true} />
        <ToggleRow title="Correction request" initialActive={true} />
        <ToggleRow title="App Update" initialActive={true} />
      </div>
    </div>
  );
}

// Custom Toggle Component with State!
function ToggleRow({ title, initialActive }) {
  const [active, setActive] = useState(initialActive);

  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-50">
      <span className="text-sm text-gray-700 font-medium">{title}</span>
      
      {/* The Clickable Switch */}
      <div 
        onClick={() => setActive(!active)}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${active ? 'bg-blue-500' : 'bg-gray-200'}`}
      >
        <div className={`bg-white w-5 h-5 rounded-full shadow-sm transform transition-transform duration-300 ${active ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </div>
    </div>
  );
}