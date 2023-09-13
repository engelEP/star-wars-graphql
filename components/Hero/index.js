import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button';

const Hero = ({ description, image }) => {
  const [isDescription, setIsDescription] = useState(false);

  const handlerClick = () => {
    setIsDescription((prevIsDescription) => !prevIsDescription);
  };

  const handlerText = () => {
    return isDescription ? 'visible' : '';
  };

  return (
    <section className="Hero">
      <div className="Hero-container">
        <Image
          className="Hero-img"
          height={1080}
          width={1920}
          src={image}
          alt="hero-star-wars"
        />
        <Button
          buttonType="button"
          text="Get Started"
          customClass="Hero-button Button"
          onClick={handlerClick}
        />
      </div>
      <p className={`Hero-text ${handlerText()}`}>{description}</p>
    </section>
  );
};

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
