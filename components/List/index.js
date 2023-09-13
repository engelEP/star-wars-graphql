import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListItem from '@/components/ListItem';
import { urlImg } from '@/constants/infoPages';

const List = ({
  next,
  dataLength,
  list,
  totalCount,
  containerId,
  searchText,
  urlPage,
  actionButton,
}) => {
  const handlerNext = () => {
    return !(dataLength.length > totalCount);
  };

  const renderList = () => {
    return list
      ?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      )
      .map((item) => (
        <ListItem
          key={item.id}
          itemId={item.id}
          title={item.title}
          image={urlImg.imgDefault}
          altImage="films-cover"
          href={`${urlPage}/${item.id}`}
          actionButton={actionButton}
        />
      ));
  };

  return (
    <div className="List" id={containerId}>
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={handlerNext}
        className="List-scroll"
        scrollableTarget={containerId}
        scrollThreshold={0.8}
      >
        {renderList()}
      </InfiniteScroll>
    </div>
  );
};

List.propTypes = {
  dataLength: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  urlPage: PropTypes.string.isRequired,
  actionButton: PropTypes.string.isRequired,
  next: PropTypes.func,
  containerId: PropTypes.string,
  searchText: PropTypes.string,
};

List.defaultProps = {
  containerId: 'containerList',
  searchText: '',
  next: () => {},
};

export default List;
