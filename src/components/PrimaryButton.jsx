import React from 'react';

export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  icon = null,
  size = 'md',
  className = ''
}) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const baseClasses = 'font-bold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2';

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const loadingClasses = loading ? 'cursor-wait' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${disabledClasses} ${loadingClasses} ${className} bg-primary text-on-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2`}
      aria-disabled={disabled}
    >
      {loading && (
        <span className="material-symbols-outlined animate-spin">
          progress_activity
        </span>
      )}
      {icon && !loading && (
        <span className="material-symbols-outlined">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
