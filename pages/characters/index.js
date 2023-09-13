import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { urlImg, infoPages } from '@/constants/infoPages';
import { getAllCharacters } from '@/graphql/characters';
import { urlPages } from '@/constants/urlPages';
import SearchBar from '@/components/SearchBar';
import List from '@/components/List';
import { actionCharacters } from '@/redux/actions/actionCharacters';

const Characters = () => {
  const { data, error, loading, refetch } = useQuery(getAllCharacters, {
    variables: { first: 6 },
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
    <section className="PageContainer">
      <SearchBar onSubmit={handlerChangeText} />
      <List
        dataLength={list.length}
        next={handlerRefetch}
        totalCount={totalCount}
        searchText={searchText}
        urlPage={urlPages.urlCharacters}
        list={list}
        actionButton={actionCharacters.add}
      />
    </section>
  );
};

Characters.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Characters"
      image={urlImg.imgHero}
      description={infoPages.charactersDescription}
    >
      {page}
    </Layout>
  );
};

export default Characters;
