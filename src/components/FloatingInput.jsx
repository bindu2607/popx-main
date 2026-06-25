import React from 'react';

export default function FloatingInput({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  name,
}) {
  return (
    <div className="relative mt-5">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-[56px] px-4 py-3 bg-white text-gray-800 border border-[#D5D5DB] rounded-[6px] text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple placeholder-[#8D929A] transition-all"
      />
      <label className="absolute -top-[10px] left-[12px] px-[6px] bg-white text-[12px] text-brand-purple font-medium tracking-wide">
        {label}
        {required && <span className="text-red-500 ml-[1px]">*</span>}
      </label>
    </div>
  );
}
