import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { listMovies } from "../../store/reducers";
import Item from './Item';
import InfiniteScroll from 'react-infinite-scroll-component'
const INITIAL_PAGE_NUM = 1;

const List = ({ loadMovies, currentList, totalItems, loadMore }) => {
  const [ pageNum, setPageNum ] = useState(INITIAL_PAGE_NUM);
  const [ moviesList, setMoviesList ] = useState([]);
  useEffect(() => {
    loadMovies(pageNum); // load initial set of movies
  }, []);

  useEffect(() => {
    setMoviesList(currentList ? [...moviesList, ...currentList.content] : []); // load more movies
  }, [currentList]);

  const fetchMoreData = () => {    
    const num = pageNum + 1;
    loadMore(num);
    setPageNum(num);
  };


  return (
    <div className="scrollableDiv movie-list ">
      <InfiniteScroll
        dataLength={moviesList.length}
        next={fetchMoreData}
        hasMore={totalItems > moviesList.length}
        loader={''}
        scrollableTarget="scrollableDiv"
      >
        <div className="movie-list grid grid-cols-3 gap-4 gap-y-8">
          {moviesList.map((item, index) => {
            return(
              <Item name={item.name} poster={item['poster-image']} key={index+1}/>
            )
          })}
        </div>
        
      </InfiniteScroll>
    </div>
    
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadMovies: (num) => dispatch(listMovies(num)),
  loadMore: (num) => dispatch(listMovies(num))
});

const mapStateToProps = state => {
  return {
    currentList: state.content.currentList,
    totalItems: state.content.totalItems
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);