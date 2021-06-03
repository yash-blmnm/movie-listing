import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchMovies } from "../../store/reducers";
import Item from "./Item";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = ({currentList,  searchData }) => {
  let query = useQuery();
  const [ moviesList, setMoviesList ] = useState([]);

  useEffect(() => {
    searchData(query.get("text")); // load search results data 
  }, []);

  useEffect(() => {
    setMoviesList(currentList ? currentList.content : []);
  }, [currentList]);

  return (
    (moviesList.length ?
      <div className="grid grid-cols-3 gap-4 gap-y-8">
        {moviesList.map((item, index) => {
          return(
            <Item name={item.name} poster={item['poster-image']} key={index+1}/>
          )
        })}
      </div>
    :
        <p>No posts found</p>
    )
    
  )
}

const mapStateToProps = state => {
  return {
    currentList: state.content.currentList
  }
};

const mapDispatchToProps = (dispatch) => ({
  searchData: (text) => dispatch(searchMovies(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

