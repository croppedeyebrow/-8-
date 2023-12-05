import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";

const searchBarStyle = {
  position: "relative",
  marginTop: "20px",
};

const inputStyle = {
  paddingLeft: "10px",
  marginBottom: "10px",
  fontWeight: "bold",
  width: "250px",
  height: "40px",
  border: "2px solid #ffcdd2",
  borderRadius: "5px",
  outline: "none",
};

const buttonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "20px",
};

interface SearchBarPropsType {
  placeholder: string;
  purpose: string;
}

function SearchBar(props: SearchBarPropsType) {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.target.value);
  };

  const searchSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!searchKeyWord) {
      setSearchParams({ keyword: searchKeyWord });
    } else {
      navigate(`${props.purpose === "lecture" ? "/lecture" : "/qa"}`);
    }
  };

  return (
    <form style={searchBarStyle} onSubmit={searchSubmitHandler}>
      <input
        placeholder={props.placeholder}
        value={searchKeyWord}
        onChange={onChangeHandler}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
