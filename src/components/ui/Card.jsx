import PropTypes from 'prop-types';

const Card = ({
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'glass-card rounded-[32px] p-10 flex flex-col gap-8';

  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
