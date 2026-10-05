import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm tracking-wider',
    lg: 'px-8 py-4 text-base tracking-widest font-bold',
  };

  const variantClasses = {
    primary:
      'bg-[#c8ff00] text-black font-extrabold uppercase hover:bg-[#d6ff33] hover:shadow-[0_0_25px_rgba(200,255,0,0.5)] active:scale-95 transition-all duration-300',
    secondary:
      'bg-[#ff005e] text-white font-extrabold uppercase hover:bg-[#ff1a70] hover:shadow-[0_0_25px_rgba(255,0,94,0.5)] active:scale-95 transition-all duration-300',
    outline:
      'border border-white/20 bg-white/5 text-white uppercase hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300 backdrop-blur-md',
    glow:
      'relative group border border-[#c8ff00]/40 text-[#c8ff00] uppercase hover:bg-[#c8ff00]/10 hover:border-[#c8ff00] shadow-[0_0_15px_rgba(200,255,0,0.2)] hover:shadow-[0_0_30px_rgba(200,255,0,0.5)] transition-all duration-300',
  };

  const combinedClasses = `inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
