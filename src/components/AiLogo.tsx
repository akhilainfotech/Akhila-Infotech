import React from 'react';

interface AiLogoProps {
  className?: string;
  size?: number;
}

export default function AiLogo({ className = 'w-10 h-10', size = 100 }: AiLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`rounded-full overflow-hidden shrink-0 ${className}`}
      role="img"
      aria-label="Akhila Infotech Ai Monogram"
    >
      <circle cx="50" cy="50" r="50" fill="#0f2147" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="#ffffff" strokeWidth="2.8" />
      <path
        d="M31.5 52 L42.5 28.5 Q45.5 22 49.5 28.5 L64 58.5 Q67.5 65.5 74 67.5 Q63 71.5 58 63.5 L45 36.5 L38.5 52 Z"
        fill="#ffffff"
      />
      <path
        d="M50 54.5 L54 62 L38 62 Q33 62 33 66.5 Q33 70.5 38 71.5 Q26 70.5 26 63 Q26 54.5 38 54.5 Z"
        fill="#ffffff"
      />
      <circle cx="71" cy="39" r="5.2" fill="#ffffff" />
      <path d="M68 48.5 H74.2 V66.5 L68 61 Z" fill="#ffffff" />
    </svg>
  );
}
