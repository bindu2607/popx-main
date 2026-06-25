import React, { useState } from 'react';
import FloatingInput from './FloatingInput';

export default function SigninScreen({ onLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin(email);
    }
  };

  return (
    <div className="flex flex-col h-full px-5 pt-8 pb-10">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[28px] font-bold text-[#1D2129] leading-tight max-w-[280px]">
          Signin to your PopX account
        </h1>
        {onBack && (
          <button 
            onClick={onBack}
            className="text-[#8D929A] hover:text-[#5F2EEA] text-xs font-semibold self-start mt-2"
          >
            Back
          </button>
        )}
      </div>
      <p className="text-[15px] text-[#8D929A] leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <FloatingInput
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <FloatingInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-[46px] rounded-[6px] font-semibold text-[14px] transition-all mt-[38px] ${
            isFormValid 
              ? 'bg-[#5F2EEA] text-white hover:bg-opacity-90' 
              : 'bg-[#CBCBCB] text-white cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}
