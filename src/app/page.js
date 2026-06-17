'use client';
import { useState, useEffect } from 'react'; 
import { Settings, MapPin, Globe, Briefcase, X, Flame, Heart, Pencil, ArrowLeft} from 'lucide-react';
import Link from 'next/link';
import SettingsList from '@/components/SettingsList';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    if (window.location.hash === '#settings') {
      setShowSettings(true);
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans">
      
      {/* 1. Top Header */}
      <div className="flex justify-between items-center p-5 min-h-[72px]">
        {showSettings ? (
          <button onClick={() => setShowSettings(false)} className="p-2 -ml-2 cursor-pointer">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
        ) : <div></div>}

        {!showSettings && (
          <button onClick={() => setShowSettings(true)} className="p-2 -mr-2 cursor-pointer">
            <Settings className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>

      {/* 2. Profile Details */}
      <div className="px-6 flex flex-col items-center">
        {/* Avatar */}
        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-full bg-blue-50 border-[3px] border-blue-500 flex items-center justify-center overflow-hidden mb-3">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm hover:bg-blue-600 transition-colors">
            <Pencil className="w-4 h-4" />
          </button>
        </div>
        
        {/* Name */}
        <h1 className="text-xl font-bold mb-4">Tarunn Biswas</h1>

        {/* Bio Info */}
        {!showSettings ? (
          <div className="flex flex-col w-full space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Nainital, Uttarakhand</div>
            <div className="flex items-center gap-3"><Globe className="w-4 h-4" /> Speak English at beginner level</div>
            <div className="flex items-center gap-3"><Briefcase className="w-4 h-4" /> UI/Ux Designer</div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 mb-2">tarunbiswas00@gmail.com</p>
        )}
      </div>

      {/*CONDITIONAL */}
      {!showSettings ? (
        
        <>
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
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div className={`w-3.5 h-3.5 rounded-full ${index === 3 || index === 4 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </>

      ) : (

        <SettingsList />

      )}
      {/* --- CONDITIONAL END */}

      {/* --- PHOTO UPLOAD MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center">
          
          {/* Dark Overlay (Click to close) */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsModalOpen(false)}></div>

          {/* Bottom Sheet */}
          <div className="w-full max-w-[430px] flex flex-col justify-end px-4 pb-8 relative z-10 animate-in slide-in-from-bottom-8 duration-300">
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col overflow-hidden text-center text-blue-500 text-lg mb-2 shadow-lg">
              <button className="py-4 border-b border-gray-200 hover:bg-gray-100" onClick={() => setIsModalOpen(false)}>Take Photo</button>
              <button className="py-4 hover:bg-gray-100" onClick={() => setIsModalOpen(false)}>Show profile picture</button>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden text-center text-blue-500 font-bold text-lg shadow-lg">
              <button className="w-full py-4 hover:bg-gray-100" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}