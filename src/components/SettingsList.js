import { Globe, Bell, FileText, Shield, HelpCircle, LogOut, Trash2, ChevronRight, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function SettingsList() {
  return (
    <div className="w-full mt-6 border-t border-gray-100 flex flex-col pb-24">
      
      {/* The 3 New Items */}
      <SettingsItem icon={<User className="w-5 h-5 text-gray-500" />} title="Country" href="/settings/country" />
      <SettingsItem icon={<Globe className="w-5 h-5 text-gray-500" />} title="Native language" value="English" href="/settings/language" />
      <SettingsItem icon={<BookOpen className="w-5 h-5 text-gray-500" />} title="Learning" value="UI/Ux Designer" href="/settings/learning" />
      
      {/* The Existing Items */}
      <SettingsItem icon={<Bell className="w-5 h-5 text-gray-500" />} title="Notifications" href="/settings/notifications" />
      <SettingsItem icon={<FileText className="w-5 h-5 text-gray-500" />} title="Terms of Service" href="/settings/terms" />
      <SettingsItem icon={<Shield className="w-5 h-5 text-gray-500" />} title="Privacy policy" href="/settings/privacy" />
      <SettingsItem icon={<HelpCircle className="w-5 h-5 text-gray-500" />} title="Help" href="/settings/help" hideBorder />

      {/* Danger Zone */}
      <div className="mt-4 border-y border-gray-100">
        <div className="flex items-center px-6 py-4 cursor-pointer hover:bg-red-50 transition-colors border-b border-gray-100 group">
          <LogOut className="w-5 h-5 text-red-500" />
          <span className="ml-3 text-red-500 font-medium">Logout</span>
        </div>
        <div className="flex items-center px-6 py-4 cursor-pointer hover:bg-red-50 transition-colors group">
          <Trash2 className="w-5 h-5 text-red-500" />
          <span className="ml-3 text-red-500 font-medium">Delete account</span>
        </div>
      </div>
    </div>
  );
}

// Helper Component for the rows
function SettingsItem({ icon, title, value, href, hideBorder }) {
  return (
    <Link href={href || "#"} className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${hideBorder ? '' : 'border-b border-gray-100'}`}>
      <div className="flex items-center">
        {icon}
        <span className="ml-3 text-gray-700 font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {value && <span className="text-sm text-gray-400">{value}</span>}
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </Link>
  );
}