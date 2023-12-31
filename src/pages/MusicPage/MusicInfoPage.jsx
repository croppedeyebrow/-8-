import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import likeheart from "../../images/Heart.png";
import buyimg from "../../images/Basket.png";
import artistImg from "../../images/Artist_2.png";
import FetchLyrics from "../../component/MusicList/FetchLyrics";
import ReactAudioPlayer from "react-audio-player";
import MusicAxiosApi from "../../axios/MusicAxios";
import InfoPageComment from "../../style/music/InfoPageComment";

const InfoContainer = styled.div`
  width: 100%;
  height: 250rem;
  display: flex;
  position: relative;
  flex-direction: column;
  // border: 1px solid red;
`;

const TopInfoBox = styled.div`
  width: 100%;
  height: 86rem;
  display: flex;
  position: relative;
  flex-direction: column;
  // border: 2px solid black;
  align-items: center;
`;

const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const MusicImgBox = styled.div`
  width: 35rem;
  height: 35rem;
  position: relative;
  // left: 78.4rem;
  top: 14rem;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  overflow: hidden;
  clip-path: circle(50% at 50% 50%);
  transition: transform 1s linear;
  ${(props) =>
    props.isPlaying &&
    css`
      animation: ${rotateAnimation} 15s linear infinite;
    `}
`;

const MusicImage = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  left: -10%; /* 이미지 위치 조정 */
  top: -10%; /* 이미지 위치 조정 */
  z-index: 2;
  clip-path: circle(50% at 50% 50%);
`;

const MusicInnerCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: rgba(22, 19, 19, 0.1);
  border: 1px solid black;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  clip-path: circle(50% at 50% 50%);
`;

const MusicName = styled.div`
  position: relative;
  display: flex;
  width: 32rem;
  height: 4.3rem;
  // left: 904.9px;
  top: 15rem;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 43px;
  text-align: center;
  border: 1px solid red;
  color: #000000;
`;

const MusicDefInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 7rem;
  // left: 803px;
  top: 18rem;
`;

const SingerName = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 32px;
  text-align: center;

  color: #4296dc;
`;

const WriteInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const ComposerNamer = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  position: relative;
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const LyricistName = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  position: relative;
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const Genre = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const BoxCon = styled.div`
  width: 44.6rem;
  height: 9.2rem;

  // left: 74rem;
  top: 24rem;
  display: flex;
  flex-direction: row;
  gap: 3.8rem;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const LikeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: #ffffff;
  box-shadow: 0px 5.1px 19.18px -3.2px rgba(0, 0, 0, 0.3);
  width: 10rem;
  height: 5rem;
  font-size: 2rem;
  gap: 0.2rem;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }
`;

const LikeHeart = styled.img`
  width: 3rem;
  height: 3rem;
`;

const LikeCount = styled.div`
  font-size: 2rem;
`;

const BuyBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: #ffffff;
  box-shadow: 0px 5.1px 19.18px -3.2px rgba(0, 0, 0, 0.3);
  width: 10rem;
  height: 5rem;
  font-size: 2rem;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }
`;

const BuyImg = styled.img`
  height: 3rem;
  width: 3rem;
`;

const PlayBox = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: linear-gradient(180deg, #008bff, #61e6ca);
  box-shadow: 0px 5.1px 19.18px -3.2px rgba(0, 0, 0, 0.3);
  width: 10rem;
  border: none;
  height: 5rem;
  color: white;
  font-size: 3rem;
  cursor: pointer;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }

  &:active {
    border: none;
  }
`;

const VolumeInput = styled.div`
  display: flex;
  position: relative;
  // bottom: 20px; /* 바닥과의 거리를 조정 */

  justify-content: center;
  left: 0rem;
  top: 24rem;
`;

const BottomInfoBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  // border: 1px solid blue;
`;

const BottomTitle = styled.div`
  position: relative;
  display: flex;
  color: #97b0aa;
  font-size: 4rem;
  width: 100%;
  height: 6rem;
  align-items: center;
  justify-content: center;
`;

const DetailInfoBox = styled.div`
  width: 100%; /* 또는 %값으로 조정 */
  height: 128rem;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const CoperateInfo = styled.div`
  width: 60rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const CopoerateTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  top: 3rem;
  display: flex;
  position: relative;
`;

const CopoeraterBox = styled.div`
  position: relative;
  width: 38rem;
  height: 102.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 2.3rem;

  color: #000000;
`;

const CopertatorInfo = styled.div`
  position: relative;
  width: 40rem;
  height: 20rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 4.1rem;
`;

const ProfileImg = styled.img`
  position: relative;
  width: 20rem;
  height: 20rem;

  border-radius: 10rem;
  box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
`;

const CoperDetail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 28.9rem;
  height: 10rem;
`;

const CoperDetail01 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 20rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CoperName = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  display: flex;
  position: relative;
  // left: 3rem;
`;

const MusicianTag = styled.img`
  display: flex;
  position: relative;
  width: 3rem;
  height: 3rem;
`;

const CoperDetail02 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 20rem;
  height: 5rem;
  top: 1rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CoLikeBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: light;
  font-size: 1.8rem;
  gap: 1rem;
  width: 13.5rem;
  height: 5.2rem;
  background: #ffffff;
  box-shadow: 0px 5.114px 19.1775px -3.19625px rgba(0, 0, 0, 0.3);
  border-radius: 31.9625px;
`;

const FollowerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 10rem;
  height: 5rem;

  background: #ffffff;
  box-shadow: 0px 0.6rem 2rem -0.4rem rgba(0, 0, 0, 0.3);
  border-radius: 3.2rem;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0rem 0.4rem 0.8rem white;
    transform: scale(1.1);
  }
`;

const Followimg = styled.img`
  width: 3rem;
  height: 3rem;
`;

const FollowerCount = styled.div`
  font-size: 1.9rem;
  font-weight: light;
`;

const LyricsInfo = styled.div`
  width: 35rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const LyricsTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  top: 3rem;
  display: flex;
  position: relative;
`;

const LyricsBox = styled.div`
  position: relative;
  display: flex;
  width: 30rem;
  height: 102.5rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2.3rem;
  justify-content: center;

  color: #000000;
`;

const MusicInfo = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [audioSrc, setAudioSrc] = useState(
    "../../conponent/MusicList/testmusic05.mp3"
  );
  const [volume, setVolume] = useState(1);
  const audioPlayerRef = useRef(null);
  const [musicInfo, setMusicInfo] = useState(null);
  const [musicinfolist, setMusicInfoList] = useState(null);

  useEffect(() => {
    const getMusicById = async () => {
      try {
        const response = await MusicAxiosApi.getMusicById(id);
        console.log("음악 상세 리스트 조회 : ", response.data);
        setMusicInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMusicById();
  }, [id]);

  useEffect(() => {
    console.log(id);
    const getAllMusic = async () => {
      try {
        const response = await MusicAxiosApi.getAllMusic();
        console.log("음악 리스트 조회 : ", response.data);
        setMusicInfoList(response.data);
        //api호출 성공시, musicinfolist상태 업데이트
      } catch (error) {
        console.log(error);
      }
    };

    getAllMusic();
  }, []);

  useEffect(() => {
    let rotateInterval;

    if (isPlaying) {
      rotateInterval = setInterval(() => {
        setRotationAngle((prevAngle) => prevAngle + 1);
      }, 10); // 회전 속도 조절을 위한 간격 설정 (단위: 밀리초)
    } else {
      clearInterval(rotateInterval); //회전 효과 중지
    }

    return () => {
      clearInterval(rotateInterval);
    };
  }, [isPlaying]);

  const handlePlayClick = () => {
    console.log("handlePlayClick 함수 실행됨");
    setIsPlaying(!isPlaying);
    if (audioPlayerRef.current) {
      if (!isPlaying) {
        audioPlayerRef.current.audioEl.current.play();
      } else {
        audioPlayerRef.current.audioEl.current.pause();
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const [writeValue, setWriteValue] = useState("");

  const handleInputChange = (e) => {
    setWriteValue(e.target.value);
  };

  const hadleWrite = () => {
    console.log("댓글작성:", writeValue);
  };

  return (
    <InfoContainer>
      <TopInfoBox>
        {musicInfo && ( // musicInfo가 null이 아닌 경우에만 해당 내용을 렌더링합니다.
          <>
            <MusicImgBox isPlaying={isPlaying}>
              <MusicImage
                alt="앨범커버"
                src={musicInfo.musicDTO.thumbnailImage}
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
              <MusicInnerCircle />
            </MusicImgBox>
            <MusicName>{musicInfo.musicDTO.musicTitle}</MusicName>
            <MusicDefInfo>
              <SingerName>{musicInfo.userResDto.userNickname}</SingerName>

              <WriteInfo>
                <ComposerNamer>
                  작곡 : {musicInfo.musicDTO.composer}
                </ComposerNamer>
                |
                <LyricistName>
                  작사 : {musicInfo.musicDTO.lyricist}
                </LyricistName>
              </WriteInfo>

              <Genre>{musicInfo.musicDTO.genre}</Genre>
            </MusicDefInfo>
          </>
        )}

        <BoxCon>
          <LikeBox>
            <LikeHeart alt="좋아요하트" src={likeheart} />
            <LikeCount>221</LikeCount>
          </LikeBox>
          <PlayBox onClick={handlePlayClick}>▶</PlayBox>
          <BuyBox>
            <BuyImg alt="장바구니아이콘" src={buyimg} />
          </BuyBox>
          <ReactAudioPlayer
            ref={audioPlayerRef}
            src={audioSrc}
            autoPlay={isPlaying}
            controls={false}
            volume={volume}
            onPlay={() => {}}
          />
        </BoxCon>
        <VolumeInput>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </VolumeInput>
      </TopInfoBox>

      <BottomTitle>곡정보</BottomTitle>
      <BottomInfoBox>
        <DetailInfoBox>
          <CoperateInfo>
            <CopoerateTitle>다른 추천 음악</CopoerateTitle>

            <CopoeraterBox>
              {Array.isArray(musicinfolist)
                ? musicinfolist.map((item, index) => (
                    <CopertatorInfo key={index}>
                      <ProfileImg
                        alt="프로필사진"
                        src={item.musicDTO.thumbnailImage}
                      />
                      <CoperDetail>
                        <CoperDetail01>
                          <CoperName>{item.userResDto.userNickname}</CoperName>
                          <MusicianTag alt="음악등록자" src={artistImg} />
                        </CoperDetail01>

                        <CoperDetail02>
                          <LikeBox>
                            <LikeHeart alt="좋아요하트" src={likeheart} />
                            <span>음악 좋아요</span>
                          </LikeBox>
                        </CoperDetail02>
                      </CoperDetail>
                    </CopertatorInfo>
                  ))
                : null}
            </CopoeraterBox>
          </CoperateInfo>

          <LyricsInfo>
            {musicInfo && ( // musicInfo가 null이 아닌 경우에만 해당 내용을 렌더링합니다.
              <>
                <LyricsTitle>가사</LyricsTitle>
                <LyricsBox>
                  {" "}
                  {musicInfo.musicDTO.lyrics ? (
                    <FetchLyrics url={musicInfo.musicDTO.lyrics} />
                  ) : (
                    <p>가사를 불러올 수 없습니다.</p>
                  )}
                </LyricsBox>
              </>
            )}
          </LyricsInfo>

          {/* 댓글 */}
          <InfoPageComment />
        </DetailInfoBox>
      </BottomInfoBox>
    </InfoContainer>
  );
};

export default MusicInfo;
