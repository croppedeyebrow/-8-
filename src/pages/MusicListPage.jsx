import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "../conponent/MusicList/SearchBox";
import postimg01 from "../images/postimg01.jpg";
import postimg02 from "../images/postimg02.jpg";
import postimg03 from "../images/postimg03.jpg";
import postimg04 from "../images/postimg04.jpg";
import postimg05 from "../images/postimg05.jpg";
import albumthuming from "../images/albumthumimg01.jpg";

const SingList = styled.div`
  width: 100vw;
  height: 210rem;
  border: 1px solid red;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
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

const ListNavbar = styled.div`
  width: 94vw;
  height: 6rem;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  background-color: black;
  box-shadow: 5px;
  border: 0.05px solid #00ffa8;
  padding-left: 10rem;
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

const ListContainer = styled.div`
  width: 100vw;
  height: 107rem;
  display: flex;
  position: relative;
  flex-direction: column;
  border: 5px solid green;
  background-color: #171717;
`;

const ListBox = styled.div`
  width: 94vw
  height: 10rem;
  margin-bottom: 1rem;
  padding-left: 3rem;
  background-color: #171717;
  border: 1px solid white;
  display: flex;
  position: relative:
   flex-direction: row;
   align-items: center;
`;

const MusicThumnail = styled.img`
  width: 4rem;
  height: 4rem;
  border: 1px solid white;
  border-radius: 8rem;
  margin-right: 3rem;
`;

const MusicDet = styled.div`
  width: 15rem;
  height: 8.4rem;
  border: 1px solid white;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const SongName = styled.div`
  width: 15rem;
  height: 4.2rem;
  border: 1px solid white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4rem;
`;

const SingerName = styled.div`
  width: 15rem;
  height: 4.2rem;
  border: 1px solid white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;
  font-size: 1.2rem;
`;

const MusicPlaySet = styled.div`
  width: 41rem;
  height: 6rem;
  display: flex;
  position: relative;
  border: 1px solid white;
  margin-left: 11rem;
`;

const MusicTag = styled.div`
  margin-left: 21rem;
  width: 17rem;
  height: 4rem;
  border: 1px solid white;
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 400
  font-size: 1.3rem;
`;

const PublishDay = styled.div`
  width: 10rem;
  height: 4rem;
  border: 1px solid white;
  color: #00FFA8;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 400
  font-size: 1.3rem;
  margin-left: 21rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.clicked ? "#00ffa8" : "black")};
  color: ${(props) => (props.clicked ? "black" : "white")};
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* 음영 효과 추가 */
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out; /* 음영 효과의 변화를 자연스럽게 설정 */

  /* 호버 효과 스타일 */
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* 호버 시 음영 효과 변경 */
  }
`;

const MusicList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postImages = [
    {
      id: 1,
      src: postimg01,
      alt: "홍보사진01",
    },
    {
      id: 2,
      src: postimg02,
      alt: "홍보사진02",
    },
    {
      id: 3,
      src: postimg03,
      alt: "홍보사진03",
    },
    {
      id: 4,
      src: postimg04,
      alt: "홍보사진04",
    },
    {
      id: 5,
      src: postimg05,
      alt: "홍보사진05",
    },

    // ... 추가 이미지
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === postImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500); // 2초마다 슬라이드 변경 (원하는 시간으로 조정 가능)

    return () => clearInterval(interval);
  }, [postImages.length]);

  // 여기까지가 홍보사진 슬라이드

  //여기서부터 리스트 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const totalItems = 110;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getItemsForPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const items = [];

    for (let i = startIndex; i < endIndex; i++) {
      items.push(
        <ListBox key={i}>
          <MusicThumnail alt="앨범썸네일" src={albumthuming}></MusicThumnail>
          <MusicDet>
            <SongName>노래제목</SongName>
            <SingerName>by 가수이름</SingerName>
          </MusicDet>
          <MusicPlaySet></MusicPlaySet>
          <MusicTag>#나른한 #뉴에이지 #피아노</MusicTag>
          <PublishDay>발매일: 23.11.13</PublishDay>
        </ListBox>
      );
    }

    return items;
  };

  const currentItems = getItemsForPage(currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationButton
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          clicked={currentPage === i} // 클릭된 버튼의 스타일을 변경하기 위한 속성
        >
          {i}
        </PaginationButton>
      );
    }
    return pageNumbers;
  };

  return (
    <SingList>
      <SingerPost>
        <div
          style={{ width: "100%", overflow: "hidden", position: "relative" }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {postImages.map((postImg, index) => (
              <div
                key={postImg.id}
                style={{
                  flex: "0 0 auto",
                  maxWidth: "100%",
                }}
              >
                <SingerPostImg alt={postImg.alt} src={postImg.src} />
              </div>
            ))}
          </div>
        </div>
      </SingerPost>

      <SearchBarBox>
        <SearchBar>
          <SearchBox></SearchBox>
        </SearchBar>
      </SearchBarBox>

      <ListNavbar>
        <MusicCategory01>음악종류</MusicCategory01>
        <MusicCategory02>음악종류</MusicCategory02>
        <MusicCategory03>음악종류</MusicCategory03>
        <MusicCategory04>음악종류</MusicCategory04>
        <MusicCategory05>음악종류</MusicCategory05>
      </ListNavbar>

      <ListContainer>{currentItems}</ListContainer>

      <PaginationContainer>{renderPagination()}</PaginationContainer>
    </SingList>
  );
};

export default MusicList;
