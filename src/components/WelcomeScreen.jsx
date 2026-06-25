import React from 'react';

export default function WelcomeScreen({ onCreateAccount, onLogin }) {
  return (
    <div className="flex flex-col h-full justify-end px-5 pb-[40px]">
      <div className="mb-[26px]">
        <h1 className="text-[28px] font-bold text-[#1D2129] leading-tight">
          Welcome to PopX
        </h1>
        <p className="text-[15px] text-[#8D929A] mt-[6px] leading-relaxed max-w-[280px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col gap-[12px]">
        <button
          onClick={onCreateAccount}
          className="w-full h-[46px] bg-[#5F2EEA] hover:bg-opacity-90 text-white rounded-[6px] font-semibold text-[14px] transition-all"
        >
          Create Account
        </button>
        <button
          onClick={onLogin}
          className="w-full h-[46px] bg-[#DDDCF7] hover:bg-opacity-95 text-[#1D1C5E] rounded-[6px] font-semibold text-[14px] transition-all"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
