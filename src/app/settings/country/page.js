import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CountryPage() {
  const countries = [
    { letter: 'J', list: ['Jamaica', 'Japan', 'Jersey', 'Jordan'] },
    { letter: 'K', list: ['Kazakhstan', 'Kenya', 'Kiribati', 'Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan'] },
    { letter: 'L', list: ['Latvia', 'Lebanon'] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans relative">
      {/* Header */}
      <div className="flex items-center px-4 py-5 sticky top-0 bg-white z-10 border-b border-gray-50">
        <Link href="/#settings" className="p-2 -ml-2 cursor-pointer">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="text-lg font-bold ml-4">Setting</h1>
      </div>

      {/* Country List */}
      <div className="flex-1 overflow-y-auto px-6 pt-2">
        {countries.map((group) => (
          <div key={group.letter} className="mb-4">
            <h2 className="text-gray-800 font-bold mb-3">{group.letter}</h2>
            <div className="flex flex-col space-y-4">
              {group.list.map((country) => (
                <div key={country} className="text-sm text-gray-600 border-b border-gray-50 pb-3">{country}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Edge Alphabet Scroller */}
      <div className="fixed right-2 top-32 bottom-28 flex flex-col justify-between text-[10px] text-blue-500 font-medium z-20">
        {['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map(letter => (
          <span key={letter}>{letter}</span>
        ))}
      </div>
    </div>
  );
}