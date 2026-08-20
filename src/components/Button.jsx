import PropTypes from 'prop-types';

const Button = ({ variant = 'primary', size = 'medium', children, onClick }) => {
  const baseClasses = 'font-bold rounded-lg transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:bg-primary-hover',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary-hover',
    tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary-hover',
    outline: 'border border-outline text-on-surface hover:bg-white/5',
    text: 'text-primary hover:bg-white/5',
    gradient: 'bg-gradient-to-r from-primary to-secondary text-on-primary',
    animated: 'bg-black text-white border border-white/10 hover:scale-105',
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline', 'text', 'gradient', 'animated']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
