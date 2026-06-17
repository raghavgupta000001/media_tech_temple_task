import { Settings, MapPin, Globe, Briefcase, X, Flame, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    // pb-24 adds padding at the bottom so our future Bottom Navigation doesn't hide content
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans">
      
      {/* 1. Top Header */}
      <div className="flex justify-end p-5">
        <Link href="/settings">
          <Settings className="w-6 h-6 text-gray-700 cursor-pointer" />
        </Link>
      </div>

      {/* 2. Profile Details */}
      <div className="px-6 flex flex-col items-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-blue-50 border-[3px] border-blue-500 flex items-center justify-center overflow-hidden mb-3">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        
        {/* Name */}
        <h1 className="text-xl font-bold mb-4">Tarunn Biswas</h1>

        {/* Bio Info */}
        <div className="flex flex-col w-full space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Nainital, Uttarakhand</div>
          <div className="flex items-center gap-3"><Globe className="w-4 h-4" /> Speak English at beginner level</div>
          <div className="flex items-center gap-3"><Briefcase className="w-4 h-4" /> UI/Ux Designer</div>
        </div>
      </div>

      {/* 3. Orange Guest Pass Banner */}
      <div className="mx-6 mt-8 bg-[#FDECC8] rounded-xl p-4 flex items-start justify-between">
        <div>
          <p className="font-bold text-[#D97706] text-sm mb-1">Treat your friends</p>
          <p className="text-xs text-[#D97706]">Give them a 30-day guest pass.</p>
        </div>
        <X className="w-5 h-5 text-[#D97706] cursor-pointer" />
      </div>

      {/* 4. Learning Section */}
      <div className="px-6 mt-8">
        <h2 className="font-bold text-lg mb-4">Learning</h2>
        {/* Card */}
        <div className="border border-gray-200 rounded-2xl p-4 w-[45%] shadow-sm">
           <div className="w-10 h-10 rounded-full bg-blue-50 mb-3 flex items-center justify-center border border-gray-100">
             <Briefcase className="w-5 h-5 text-blue-600" />
           </div>
           <p className="font-bold text-sm text-gray-800">UI/Ux Designer</p>
           <p className="text-xs text-gray-400 font-medium mb-3 mt-1">42%</p>
           
           <div className="flex gap-4 text-xs font-medium text-gray-500">
             <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-green-500"/> 113</span>
             <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-blue-400"/> 0</span>
           </div>
        </div>
      </div>

      {/* 5. Days Learned Section */}
      <div className="px-6 mt-8">
        <h2 className="font-bold text-lg mb-4">Days learned</h2>
        <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium">
          {/* We map over an array of days to avoid writing the same div 7 times */}
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="flex flex-col items-center gap-2">
              {/* If index is 3 or 4 (Thu/Fri), color it blue, else gray */}
              <div className={`w-3.5 h-3.5 rounded-full ${index === 3 || index === 4 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}