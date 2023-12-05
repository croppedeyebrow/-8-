import React from "react";
import styled from "styled-components";
import SearchBox from "../conponent/MusicList/SearchBox";
import postimg from "../images/postimg01.jpg";

const SingList = styled.div`
  width: 100vw;
  height: 260rem;
  border: 1px solid red;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SingerPost = styled.div`
  width: 100vw;
  height: 50rem;
  border: 1px solid black;
  display: flex;
  position: relative;
  box-shadow: 5rem;
  color: white;
`;

const SingerPostImg = styled.img`
  width: 100vw;
  height: 50rem;
  display: flex;
  position: relative;
  object-fit: cover;
`;

const SearchBarBox = styled.div`
  display: flex;
  position: relative;
  border: 1px solid black;
  background-color: white;
  width: 100vw;
  height: 17rem;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 80rem;
  height: 8rem;
  border-radius: 1.5rem;
  border: 1px solid #008bff;
  margin-left: 15rem;
  position: relative;
  display: flex;
  background-color: #eeeeee;
  align-items: center;
  justify-contents: center;
  box-shadow: 0px 4px 4px #00000040;
`;

const ListContainer = styled.div`
     width:100vw;
     height: 105rem;
     display:flex;
     position:relative
     flex-direction:column;
     border: green;
     background-color: #171717;
`;

const ListNavbar = styled.div`
  width: 100vw;
  height: 6rem;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  background-color: black;
  box-shadow: 5px;
  border: 0.05px solid #00ffa8;
  padding-left: 6rem;
  border-radius: 10px; /* 요소에 볼록한 효과를 주는 border-radius 값 설정 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 음영 효과를 주는 box-shadow 설정 */
`;

const MusicCategory01 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    transform: scale(1.15); /* 텍스트 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    font-size: 18px; /* 글자 크기 조절 */
    text-decoration: underline;
  }
`;

const MusicCategory02 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    transform: scale(1.15); /* 텍스트 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    font-size: 18px; /* 글자 크기 조절 */
    text-decoration: underline;
  }
`;

const MusicCategory03 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    transform: scale(1.15); /* 텍스트 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    font-size: 18px; /* 글자 크기 조절 */
    text-decoration: underline;
  }
`;

const MusicCategory04 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    transform: scale(1.15); /* 텍스트 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    font-size: 18px; /* 글자 크기 조절 */
    text-decoration: underline;
  }
`;

const MusicCategory05 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    transform: scale(1.15); /* 텍스트 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    font-size: 18px; /* 글자 크기 조절 */
    text-decoration: underline;
  }
`;

const MusicList = () => {
  return (
    <SingList>
      <SingerPost>
        <SingerPostImg alt="홍보사진" src={postimg} />
      </SingerPost>

      <SearchBarBox>
        <SearchBar>
          <SearchBox></SearchBox>
        </SearchBar>
      </SearchBarBox>

      <ListContainer>
        <ListNavbar>
          <MusicCategory01>음악종류</MusicCategory01>
          <MusicCategory02>음악종류</MusicCategory02>
          <MusicCategory03>음악종류</MusicCategory03>
          <MusicCategory04>음악종류</MusicCategory04>
          <MusicCategory05>음악종류</MusicCategory05>
        </ListNavbar>
      </ListContainer>
    </SingList>
  );
};

export default MusicList;
