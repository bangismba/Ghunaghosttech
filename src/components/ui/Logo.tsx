interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
}

export default function Logo({ className = '', size = 'md', withText = true }: LogoProps) {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo1.png"
        alt="Ghunaghost Tech Logo"
        className={`${sizes[size]} object-contain`}
      />
      {withText && (
        <span className={`font-mono font-medium tracking-tight text-white ${textSizes[size]}`}>
          GHUNAGHOST
        </span>
      )}
    </div>
  );
}