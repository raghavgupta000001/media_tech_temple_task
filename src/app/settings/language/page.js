import Link from 'next/link';
import { Search, Check } from 'lucide-react';

export default function LanguagePage() {
  const languages = [
    { flag: '🇺🇸', name: 'English (united state)', selected: true },
    { flag: '🇮🇳', name: 'India (Hindi)', selected: false },
    { flag: '🇩🇪', name: 'German', selected: false },
    { flag: '🇵🇹', name: 'Portuguese', selected: false },
    { flag: '🇺🇸', name: 'English (united state)', selected: false },
    { flag: '🇬🇧', name: 'English (united kingdom)', selected: false },
    { flag: '🇩🇪', name: 'German', selected: false },
    { flag: '🇵🇹', name: 'Portuguese', selected: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans">
      {/* Search Header */}
      <div className="flex items-center px-4 py-4 gap-3 sticky top-0 bg-white z-10">
        <div className="flex-1 flex items-center bg-gray-100 rounded-xl px-3 py-2.5">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search country" 
            className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <Link href="/#settings" className="text-blue-500 font-medium text-sm">Cancel</Link>
      </div>

      {/* Language List */}
      <div className="flex flex-col mt-2">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center justify-between px-6 py-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm text-gray-700">{lang.name}</span>
            </div>
            {lang.selected && <Check className="w-5 h-5 text-blue-500" />}
          </div>
        ))}
      </div>
    </div>
  );
}