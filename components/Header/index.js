import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/constants/urlPages';
import { urlImg } from '@/constants/infoPages';

const Header = () => {
  const renderLink = () => {
    return navItems.map((item) => (
      <li key={item.id}>
        <Link className="Header-nav-item" href={item.url}>
          {item.text}
        </Link>
      </li>
    ));
  };

  return (
    <header className="Header container-fluid">
      <Image
        className="Header-logo"
        src={urlImg.imgLogo}
        width={220}
        height={100}
        alt="logo-star-wars"
      />
      <nav className="Header-nav">
        <ul className="Header-nav-list">{renderLink()}</ul>
      </nav>
    </header>
  );
};

export default Header;
