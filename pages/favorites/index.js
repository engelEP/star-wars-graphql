import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import Layout from '@/components/Layout';
import TabList from '@/components/TabList';
import { infoPages, urlImg } from '@/constants/infoPages';
import { urlPages } from '@/constants/urlPages';
import { getAllFilms } from '@/graphql/films';
import { getAllCharacters } from '@/graphql/characters';
import { getAllStarship } from '@/graphql/starship';
import { actionFilms } from '@/redux/actions/actionFilms';
import { actionCharacters } from '@/redux/actions/actionCharacters';
import { actionStarahips } from '@/redux/actions/actionStarships';

const Favorites = () => {
  const films = useSelector((store) => store.films);
  const characters = useSelector((store) => store.characters);
  const starships = useSelector((store) => store.starships);

  return (
    <Layout
      image={urlImg.imgHero}
      title="favorites"
      description={infoPages.favoriteDescription}
    >
      <div className="Home-container">
        <Tabs
          defaultActiveKey="films"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="films" title="Films">
            <TabList
              query={getAllFilms}
              image={urlImg.imgTab1}
              altImage="image-films"
              href={urlPages.urlFilms}
              containerId="containerFilms"
              actionButton={actionFilms.delete}
              isFavoritePage
              storeFavorites={films}
            />
          </Tab>
          <Tab eventKey="characters" title="Characters">
            <TabList
              query={getAllCharacters}
              image={urlImg.imgTab2}
              altImage="image-characters"
              href={urlPages.urlCharacters}
              containerId="containerCharacters"
              actionButton={actionCharacters.delete}
              isFavoritePage
              storeFavorites={characters}
            />
          </Tab>
          <Tab eventKey="contact" title="Starship">
            <TabList
              query={getAllStarship}
              image={urlImg.imgTab3}
              altImage="image-starships"
              href={urlPages.urlStarship}
              containerId="containerStarship"
              actionButton={actionStarahips.delete}
              isFavoritePage
              storeFavorites={starships}
            />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Favorites;
