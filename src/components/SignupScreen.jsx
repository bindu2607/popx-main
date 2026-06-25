import React, { useState } from 'react';
import FloatingInput from './FloatingInput';

export default function SignupScreen({ onRegister, onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
  });
  const [agency, setAgency] = useState('no');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onRegister({
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        agency,
      });
    }
  };

  return (
    <div className="flex flex-col h-full px-5 pt-8 pb-10 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[28px] font-bold text-[#1D2129] leading-tight max-w-[280px]">
          Create your PopX account
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 pb-4">
        <FloatingInput
          label="Full Name"
          placeholder="Enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <FloatingInput
          label="Phone number"
          placeholder="Enter phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FloatingInput
          label="Email address"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <FloatingInput
          label="Password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          required
        />
        <FloatingInput
          label="Company name"
          placeholder="Enter company name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        {/* Agency Selection */}
        <div className="mt-4">
          <label className="text-[14px] text-[#1D2129] font-medium tracking-wide">
            Are you an Agency?<span className="text-red-500 ml-[1px]">*</span>
          </label>
          <div className="flex items-center gap-[24px] mt-2">
            {/* Yes Option */}
            <label 
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => setAgency('yes')}
            >
              <div className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-all ${
                agency === 'yes' ? 'border-[#5F2EEA]' : 'border-[#D5D5DB]'
              }`}>
                {agency === 'yes' && <div className="w-[10px] h-[10px] rounded-full bg-[#5F2EEA]" />}
              </div>
              <span className="text-[14px] text-[#1D2129] font-normal">Yes</span>
            </label>

            {/* No Option */}
            <label 
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => setAgency('no')}
            >
              <div className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-all ${
                agency === 'no' ? 'border-[#5F2EEA]' : 'border-[#D5D5DB]'
              }`}>
                {agency === 'no' && <div className="w-[10px] h-[10px] rounded-full bg-[#5F2EEA]" />}
              </div>
              <span className="text-[14px] text-[#1D2129] font-normal">No</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-[46px] rounded-[6px] font-semibold text-[14px] transition-all mt-[30px] ${
            isFormValid 
              ? 'bg-[#5F2EEA] text-white hover:bg-opacity-90' 
              : 'bg-[#CBCBCB] text-white cursor-not-allowed'
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
