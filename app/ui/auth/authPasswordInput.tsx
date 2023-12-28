'use client';
import { useState } from 'react';
export default function AuthPasswordInput({
  text,
  id,
  value,
  placeholder,
  onChange,
}: {
  text: string;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {text}
      </label>
      <div className="relative">
        <input
          className="mb-3 w-full appearance-none rounded border border-inherit px-3 py-2 pr-10 leading-tight text-gray-700 focus:outline-none"
          required
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        <div
          className="absolute bottom-5 right-0 flex cursor-pointer items-center pr-3"
          onClick={handleClick}
        >
          <img src="/loginPageIcons/fi-rr-eye.svg" />
        </div>
      </div>
    </div>
  );
}
