import PropTypes from 'prop-types';

const Button = ({ buttonType, customClass, id, text, onClick, children }) => {
  return (
    <button type={buttonType} className={customClass} id={id} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['button', 'submit']).isRequired,
  text: PropTypes.string,
  customClass: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  text: '',
  customClass: '',
  id: '',
  onClick: () => {},
  children: <></>,
};

export default Button;
