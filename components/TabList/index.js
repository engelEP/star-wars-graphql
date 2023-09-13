import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import List from '@/components/List';

const TabList = ({
  query,
  href,
  containerId,
  actionButton,
  isFavoritePage,
  storeFavorites,
}) => {
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { first: 6 },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  const {
    data: { list, totalCount },
  } = data;

  const handlerRefetch = () => {
    refetch({ first: list.length + 6 });
  };

  const handlerPage = () => {
    return isFavoritePage ? storeFavorites : list;
  };

  return (
    <List
      dataLength={list.length}
      next={handlerRefetch}
      totalCount={totalCount}
      containerId={containerId}
      urlPage={href}
      list={handlerPage()}
      actionButton={actionButton}
    />
  );
};

TabList.propTypes = {
  query: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  containerId: PropTypes.string.isRequired,
  actionButton: PropTypes.string.isRequired,
  isFavoritePage: PropTypes.bool,
  storeFavorites: PropTypes.array,
};

TabList.defaultProps = {
  isFavoritePage: false,
  storeFavorites: [],
};

export default TabList;
