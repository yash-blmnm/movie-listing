import React from "react";
import HeaderIcon from './HeaderIcon';
import searchIcon from '../../images/search.png'
import { useForm } from "react-hook-form";


function SearchBar({onSubmit, onSearchClose}) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  return (
    <div className="border border-gray-300 flex-auto ml-4 relative flex items-center py-1">
      <span className="mx-2">
        <HeaderIcon sourceUrl={searchIcon} altTxt="search icon" />
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-2 w-full">
        <input
          {...register("search")}
          className="border-0 bg-black outline-none font-extralight w-full text-xs	"
          autoFocus
        />
      </form>
      <span className="mx-2">
        <span className="font-thin text-xl leading-3" onClick={()=>{onSearchClose(); reset();}}>
          x
        </span>
      </span>
    </div>
  );
}

export default SearchBar;
