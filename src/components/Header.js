import React, { useEffect, useState } from "react";
import { ReactComponent as YoutubeSvg } from "../utils/svg/youtube.svg";
import { ReactComponent as BarsSvg } from "../utils/svg/bars.svg";
import { ReactComponent as SearchSvg } from "../utils/svg/search.svg";
import { ReactComponent as UserSvg } from "../utils/svg/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../utils/menuSlice";
import { YOUTUBE_SEARCH_SUGGEST_API } from "../utils/constants";
import {addSuggestion} from "../utils/searchSlice";


const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheSuggestions =  useSelector((state) => state.search.cache )

  useEffect(() => {
    if (cacheSuggestions[searchQuery]) {
      setSuggestions(cacheSuggestions[searchQuery]);
      return
    }
    const timeout = setTimeout(() => {
      getSearchSuggestions();
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_SUGGEST_API + searchQuery);
    const data = await response.json();
    const suggestions = data[1];
    setSuggestions(suggestions);
    dispatch(addSuggestion({[searchQuery] : suggestions}))
    console.log(suggestions);
  };

  return (
    <nav className=" grid gap-2 grid-cols-12 mb-3 py-4 shadow-lg  bg-white sticky top-0">
      <div className="col-span-2  px-2 self-center flex justify-between md:justify-evenly lg:w-2/3">
        <BarsSvg
          className="w-7 cursor-pointer"
          onClick={() => dispatch(toggleState())}
        />
        <YoutubeSvg className="w-10 fill-red-600" />
      </div>
      <div className="col-span-8 flex">
        <div className="w-11/12 md:relative">
          <input
            className=" w-full px-3 border-2 rounded-l-full border-gray-500 h-10"
            type="search
          "
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
            placeholder="search"
          />

          {showSuggestions && (
            <div className="shadow-xl fixed left-0 w-screen pt-3 md:absolute  md:w-full bg-white rounded-lg border-gray-200 ">
              <ul>
                {suggestions.map((suggestion) => {
                  return (
                    <li
                      key={suggestion}
                      className="border-t border-gray-300 p-2 font-semibold"
                    >
                      {suggestion}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <button className="border-2 w-1/12 bg-gray-100 border-l-0 border-gray-500 h-10 p-1 md:p-2 rounded-r-full ">
          <SearchSvg className="w-full h-full" />
        </button>
      </div>

      <div className="col-span-2 self-center justify-self-end mr-5 border-2  border-gray-500 rounded-full p-1.5 ">
        <UserSvg className="w-6 " />
      </div>
    </nav>
  );
};

export default Header;
