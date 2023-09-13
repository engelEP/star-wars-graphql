import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { infoPages, urlImg } from '@/constants/infoPages';
import TabList from '@/components/TabList';
import Layout from '@/components/Layout';
import { getAllFilms } from '@/graphql/films';
import { getAllCharacters } from '@/graphql/characters';
import { getAllStarship } from '@/graphql/starship';
import { urlPages } from '@/constants/urlPages';
import { actionFilms } from '@/redux/actions/actionFilms';
import { actionCharacters } from '@/redux/actions/actionCharacters';
import { actionStarahips } from '@/redux/actions/actionStarships';

export default function Home() {
  return (
    <Layout
      title="Home"
      description={infoPages.homeDescription}
      image={urlImg.imgHero}
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
              actionButton={actionFilms.add}
            />
          </Tab>
          <Tab eventKey="characters" title="Characters">
            <TabList
              query={getAllCharacters}
              image={urlImg.imgTab2}
              altImage="image-characters"
              href={urlPages.urlCharacters}
              containerId="containerCharacters"
              actionButton={actionCharacters.add}
            />
          </Tab>
          <Tab eventKey="contact" title="Starship">
            <TabList
              query={getAllStarship}
              image={urlImg.imgTab3}
              altImage="image-starships"
              href={urlPages.urlStarship}
              containerId="containerStarship"
              actionButton={actionStarahips.add}
            />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
}
