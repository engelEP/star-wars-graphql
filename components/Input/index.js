import PropTypes from 'prop-types';

const Input = ({
  inputType,
  customClass,
  id,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <input
      type={inputType}
      className={customClass}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  inputType: PropTypes.oneOf(['password', 'email', 'text']).isRequired,
  customClass: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  customClass: '',
  id: '',
  onChange: () => {},
  value: '',
  placeholder: '',
};
export default Input;
