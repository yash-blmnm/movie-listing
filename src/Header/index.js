import React, {useState} from "react";
import Back from '../images/Back.png'
import searchIcon from '../images/search.png'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
// import { searchMovies } from '../store/reducers'
import { useHistory } from 'react-router-dom';



function Header() {
  const [ displaySearch, setDisplaySearch ] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const history = useHistory();

  const onSubmit = ({search}) => {
    if(search.trim().length > 3){
      // searchData(search);
      history.push(`/search?text=${search}`);
    }
  };

  const onSearchClose = () => {
    setDisplaySearch(!displaySearch); 
    reset();
    history.push(`/`);
  }

  return (
    <header className="header flex w-screen p-4 sticky top-0 font-display items-center h-16">
      <img src={Back} className="back-icon w-4 h-4 " alt="return" />
      
      {
        displaySearch ?
        <>
          <div className="searchbox border border-gray-300 flex-auto ml-4 relative flex items-center py-1">
            <span className="mx-2">
              <img src={searchIcon} className="search-icon w-4 h-4" alt = "search icon" />
            </span>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-2 w-full">
              <input {...register("search")} className="border-0 bg-black outline-none font-extralight w-full text-xs	" autoFocus/>
            </form>
            <span className="mx-2">
              <span className="font-thin text-xl leading-3" onClick={onSearchClose}>x</span>
            </span>
          </div>
        </>
        : 
        <> 
          <h2 className="flex-auto mx-4 text-xl font-light leading-none">Romantic Comedy</h2>
          <img src={searchIcon} className="search-icon w-4 h-4 " alt = "search icon" onClick={() => {setDisplaySearch(!displaySearch)}} />
        </>
      }
    </header>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   searchData: (text) => dispatch(searchMovies(text)),
// });


export default Header;
