import { useQuery } from '@apollo/client';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ListItem from '@/components/ListItem';
import Layout from '@/components/Layout';
import { getAllStarship } from '@/graphql/starship';
import { urlImg, infoPages } from '@/constants/infoPages';
import { urlPages } from '@/constants/urlPages';
import List from '@/components/List';
import { actionStarahips } from '@/redux/actions/actionStarships';

const Starships = () => {
  const { data, error, loading, refetch } = useQuery(getAllStarship, {
    variables: { first: 6, after: '' },
  });

  const [searchText, setSearchText] = useState('');

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  const {
    data: { list, totalCount },
  } = data;

  const handlerChangeText = (value) => {
    setSearchText(value);
  };

  const handlerRefetch = () => {
    refetch({ first: list.length + 6 });
  };

  return (
    <Layout
      title="Starships"
      image={urlImg.imgHero}
      description={infoPages.starshipDescription}
    >
      <section className="PageContainer">
        <SearchBar onSubmit={handlerChangeText} />
        <List
          dataLength={list.length}
          next={handlerRefetch}
          totalCount={totalCount}
          searchText={searchText}
          urlPage={urlPages.urlStarship}
          list={list}
          actionButton={actionStarahips.add}
        />
      </section>
    </Layout>
  );
};

export default Starships;
