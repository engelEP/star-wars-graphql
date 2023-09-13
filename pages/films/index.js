import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { infoPages, urlImg } from '@/constants/infoPages';
import SearchBar from '@/components/SearchBar';
import Layout from '@/components/Layout';
import { getAllFilms } from '@/graphql/films';
import { urlPages } from '@/constants/urlPages';
import List from '@/components/List';
import { actionFilms } from '@/redux/actions/actionFilms';

const Films = () => {
  const [searchText, setSearchText] = useState('');
  const { loading, error, data, refetch } = useQuery(getAllFilms, {
    variables: {
      first: 6,
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  const {
    data: { list, totalCount },
  } = data;

  const handlerRefetch = () => {
    refetch({ first: list.length + 6 });
  };

  const handlerChangeText = (value) => {
    setSearchText(value);
  };

  return (
    <Layout
      title="Films"
      image={urlImg.imgHero}
      description={infoPages.filmsDescription}
    >
      <section className="PageContainer">
        <SearchBar onSubmit={handlerChangeText} />
        <List
          dataLength={list.length}
          next={handlerRefetch}
          totalCount={totalCount}
          searchText={searchText}
          urlPage={urlPages.urlFilms}
          list={list}
          actionButton={actionFilms.add}
        />
      </section>
    </Layout>
  );
};

export default Films;
