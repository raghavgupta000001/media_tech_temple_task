import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans">
      {/* Header */}
      <div className="flex items-center px-4 py-5 sticky top-0 bg-white z-10 border-b border-gray-50 shadow-sm">
        <Link href="/#settings" className="p-2 -ml-2 cursor-pointer">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="text-lg font-bold ml-4">Terms of Services</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6 flex flex-col space-y-8">
        
        <section>
          <h2 className="text-[13px] font-bold text-gray-800 mb-2 uppercase tracking-wide">Terms of Service Introduction</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Welcome to India Sarkar (Naukari).<br/>
            These Terms of Service ("Terms") govern your use of our mobile application and services.<br/>
            By accessing or using the app, you agree to be bound by these Terms. If you do not agree, please do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-bold text-gray-800 mb-2 uppercase tracking-wide">Use of the App</h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-1">You agree to use the app only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-4 text-xs text-gray-500 leading-relaxed space-y-1">
            <li>Misuse the platform or attempt to disrupt services</li>
            <li>Access data that does not belong to you</li>
            <li>Use the app for fraudulent or harmful activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[13px] font-bold text-gray-800 mb-2 uppercase tracking-wide">Account Registration</h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-1">To access certain features, you must create an account. You are responsible for:</p>
          <ul className="list-disc pl-4 text-xs text-gray-500 leading-relaxed space-y-1">
            <li>Maintaining the confidentiality of your login details</li>
            <li>All activities under your account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[13px] font-bold text-gray-800 mb-2 uppercase tracking-wide">Courses & Content</h2>
          <ul className="list-disc pl-4 text-xs text-gray-500 leading-relaxed space-y-1">
            <li>Courses and study materials are provided for educational purposes only</li>
            <li>Content may be updated or modified at any time</li>
            <li>We do not guarantee exam success or job placement</li>
          </ul>
        </section>

      </div>
    </div>
  );
}