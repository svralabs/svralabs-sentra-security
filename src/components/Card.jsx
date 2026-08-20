import PropTypes from 'prop-types';

const Card = ({ variant = 'glass', children, className = '' }) => {
  const baseClasses = 'rounded-[32px] p-10 flex flex-col gap-8';
  const variantClasses = {
    glass: 'glass-card',
    solid: 'bg-surface-container-low',
    outline: 'border border-outline-variant/10',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOf(['glass', 'solid', 'outline']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
