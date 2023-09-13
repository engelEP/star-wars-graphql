import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getCharacter } from '@/graphql/characters';
import Layout from '@/components/Layout';
import ListItem from '@/components/ListItem';
import { infoPages, urlImg } from '@/constants/infoPages';
import { urlPages } from '@/constants/urlPages';
import { actionFilms } from '@/redux/actions/actionFilms';
import { actionStarahips } from '@/redux/actions/actionStarships';

const Character = () => {
  const params = useRouter();
  const { data, error, loading } = useQuery(getCharacter, {
    variables: { personId: params.query.id },
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

  const renderCharacter = () => {
    if (loading) return <span>Loading...</span>;
    if (error) return <span>{error.message}</span>;

    const { person } = data;
    const { films } = person.filmConnection;
    const { starships } = person.starshipConnection;

    return (
      <section className="Slug">
        <div className="Slug-container">
          <h2 className="Slug-title">{person.name}</h2>
          <Image
            className="Slug-img"
            src={urlImg.imgDefault}
            height={480}
            width={720}
            alt="character-hero"
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
          <Tab eventKey="starships" title="Starships">
            <div className="List">
              {renderList(
                starships,
                urlPages.urlStarship,
                urlImg.imgTab3,
                'starships-cover',
                actionStarahips.add,
              )}
            </div>
          </Tab>
        </Tabs>
      </section>
    );
  };

  return (
    <Layout
      title="Films"
      image={urlImg.imgHero}
      description={infoPages.charactersDescription}
    >
      {renderCharacter()}
    </Layout>
  );
};

export default Character;
