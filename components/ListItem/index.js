import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import Button from '@/components/Button';

const ListItem = ({ itemId, title, image, altImage, href, actionButton }) => {
  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    const newItem = { id: itemId, title };
    dispatch({ type: actionButton, item: newItem });
  };

  return (
    <div className="List-item" id={itemId}>
      <Link href={href} className="List-link">
        <Image
          className="List-img"
          src={image}
          height={300}
          width={400}
          alt={altImage}
        />
        <h2 className="List-title">{title}</h2>
        <Button
          buttonType="button"
          customClass="Button-favorites"
          onClick={handlerClick}
        >
          <FaStar />
        </Button>
      </Link>
    </div>
  );
};

ListItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  actionButton: PropTypes.string,
};

ListItem.defaultProps = {
  actionButton: '',
};

export default ListItem;
