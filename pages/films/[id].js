import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Layout from '@/components/Layout';
import ListItem from '@/components/ListItem';
import { infoPages, urlImg } from '@/constants/infoPages';
import { getFilm } from '@/graphql/films';
import { urlPages } from '@/constants/urlPages';
import { actionCharacters } from '@/redux/actions/actionCharacters';
import { actionStarahips } from '@/redux/actions/actionStarships';

const Film = () => {
  const params = useRouter();
  const { data, error, loading } = useQuery(getFilm, {
    variables: { filmId: params.query.id },
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

  const renderFilm = () => {
    if (loading) return <span>Loading...</span>;
    if (error) return <span>{error.message}</span>;

    const { film } = data;
    const { starships } = film.starshipConnection;
    const { characters } = film.characterConnection;

    return (
      <section className="Slug">
        <h2 className="Slug-title">{film.title}</h2>
        <div className="Slug-container">
          <Image
            className="Slug-img"
            src={urlImg.imgDefault}
            height={480}
            width={720}
            alt="film-hero"
          />
          <p className="Slug-text">{film.openingCrawl}</p>
        </div>

        <Tabs
          defaultActiveKey="characters"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="characters" title="Characters">
            <div className="List">
              {renderList(
                characters,
                urlPages.urlCharacters,
                urlImg.imgTab2,
                'characters-cover',
                actionCharacters.add,
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

  return renderFilm();
};

Film.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Film"
      image={urlImg.imgHero}
      description={infoPages.filmsDescription}
    >
      {page}
    </Layout>
  );
};

export default Film;
