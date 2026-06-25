import React from 'react';

export default function ProfileScreen({ user, onLogout }) {
  // Use Marry Doe as default if no user data is provided
  const displayName = user?.fullName || 'Marry Doe';
  const displayEmail = user?.email || 'Marry@Gmail.Com';

  return (
    <div className="flex flex-col h-full bg-[#FFFFFF]">
      {/* Header */}
      <div className="pt-[24px] pb-[16px] px-5 border-b border-[#EAEAEB]">
        <h2 className="text-[#1D2129] text-[18px] font-semibold tracking-wide">
          Account Settings
        </h2>
      </div>

      {/* Main Body */}
      <div className="flex flex-col px-5 pt-[30px] flex-grow">
        {/* Profile Card Info */}
        <div className="flex items-center gap-[20px]">
          {/* Avatar Container */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
              alt={displayName}
              className="w-[76px] h-[76px] rounded-full object-cover border border-gray-200"
            />
            {/* Camera Overlay Badge */}
            <div className="absolute bottom-[2px] right-0 w-[24px] h-[24px] bg-[#5F2EEA] rounded-full border-[1.5px] border-white flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5" 
                stroke="white" 
                className="w-[12px] h-[12px]"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" 
                />
              </svg>
            </div>
          </div>

          {/* Name & Email */}
          <div className="flex flex-col">
            <h3 className="text-[#1D2129] text-[16px] font-bold leading-tight">
              {displayName}
            </h3>
            <span className="text-[#8D929A] text-[13px] mt-[4px]">
              {displayEmail}
            </span>
          </div>
        </div>

        {/* Bio / Description */}
        <p className="text-[14px] text-[#8D929A] leading-relaxed mt-[26px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        {/* Dotted Line Separator */}
        <div className="border-t-[1.5px] border-dotted border-[#D5D5DB] mt-[26px]" />

        {/* Action Bottom Area */}
        <div className="mt-auto pb-[30px] flex justify-center">
          <button
            onClick={onLogout}
            className="text-brand-purple hover:underline text-[14px] font-semibold flex items-center gap-1"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-[16px] h-[16px]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            Logout Settings
          </button>
        </div>
      </div>
    </div>
  );
}
