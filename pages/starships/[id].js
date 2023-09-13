import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'next/image';
import Layout from '@/components/Layout';
import ListItem from '@/components/ListItem';
import { urlImg, infoPages } from '@/constants/infoPages';
import { getStarship } from '@/graphql/starship';
import { urlPages } from '@/constants/urlPages';
import { actionFilms } from '@/redux/actions/actionFilms';
import { actionCharacters } from '@/redux/actions/actionCharacters';

const Starship = () => {
  const params = useRouter();
  const { data, error, loading } = useQuery(getStarship, {
    variables: { starshipId: params.query.id },
  });

  const renderList = (list, url, img, altImg, actionButton) => {
    return list.map((item) => (
      <ListItem
        key={item.id}
        itemId={item.id}
        title={item.name}
        image={img}
        href={`${url}/${item.id}`}
        altImage={altImg}
        actionButton={actionButton}
      />
    ));
  };

  const renderStarships = () => {
    if (loading) return <span>Loading...</span>;
    if (error) return <span>{error.message}</span>;

    const { starship } = data;
    const { films } = starship.filmConnection;
    const { pilots } = starship.pilotConnection;

    return (
      <section className="Slug">
        <div className="Slug-container">
          <h2 className="Slug-title">{starship.name}</h2>
          <Image
            className="Slug-img"
            src={urlImg.imgDefault}
            height={480}
            width={720}
            alt="starship-hero"
          />
        </div>
        <Tabs
          defaultActiveKey="films"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="films" title="Films">
            <div className="List">
              {renderList(
                films,
                urlPages.urlFilms,
                urlImg.imgTab1,
                'films-cover',
                actionFilms.add,
              )}
            </div>
          </Tab>
          <Tab eventKey="characters" title="Characters">
            <div className="List">
              {renderList(
                pilots,
                urlPages.urlCharacters,
                urlImg.imgTab2,
                'characters-cover',
                actionCharacters.add,
              )}
            </div>
          </Tab>
        </Tabs>
      </section>
    );
  };

  return renderStarships();
};

Starship.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Starship"
      image={urlImg.imgHero}
      description={infoPages.starshipDescription}
    >
      {page}
    </Layout>
  );
};

export default Starship;
