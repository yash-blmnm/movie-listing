import React, {useState} from "react";
import Back from '../../images/Back.png'
import searchIcon from '../../images/search.png'
import { useHistory } from 'react-router-dom';
import HeaderIcon from '../library/HeaderIcon';
import SearchBar from '../library/SearchBar';
import HeaderTitle from '../library/HeaderTitle';



function Header() {
  const [ displaySearch, setDisplaySearch ] = useState(false);
  const history = useHistory();

  const onSubmit = ({search}) => {
    if(search.trim().length > 3){
      history.push(`/search?text=${search}`);
    }
  };

  const onSearchClose = () => {
    setDisplaySearch(!displaySearch); 
    history.push(`/`);
  }

  return (
    <header className="header flex w-screen p-4 sticky top-0 font-display items-center h-16">
      <HeaderIcon sourceUrl={Back} altTxt="return" />
      {
        
        displaySearch ?
          <SearchBar onSubmit={(value) => onSubmit(value)} onSearchClose={() => onSearchClose()} />
        : 
        <> 
          <HeaderTitle titleTxt={"Romantic Comedy"} />
          <HeaderIcon sourceUrl={searchIcon} altTxt="search icon" onClick={() => {setDisplaySearch(!displaySearch)}}/>
        </>
      }
    </header>
  );
}

export default Header;
