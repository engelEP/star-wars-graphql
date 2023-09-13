import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handlerChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form className="SearchBar" onSubmit={handlerSubmit}>
      <div className="row">
        <div className="col-md-10 col-8">
          <Input
            customClass="SearchBar-input form-control"
            inputType="text"
            onChange={handlerChange}
            value={text}
            placeholder="Search..."
          />
        </div>
        <Button
          buttonType="submit"
          customClass="Button col-4 col-md-2 p-1"
          text="Search"
        />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  onSubmit: () => {},
};

export default SearchBar;
