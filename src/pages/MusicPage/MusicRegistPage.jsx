// import AxiosApi from "../../axios/PerformanceAxios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   UserInfo,
//   UpdateZone,
//   InputBox,
//   Button,
// } from "../../style/performance/PerformanceUpdateStyle";
// import UpdateBox from "../../component/performance/UpdateBox";
// import UpdateUserInfo from "../../component/performance/UpdateUserInfo";

// import styled from "styled-components";
// import heartImg from "../../images/Heart.png";
// import Pointer from "../../images/Pointer.png";

// export const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   box-sizing: border-box;
// `;
// // UpdateUserInfo.jsx 스타일 부분
// export const UserInfo = styled.div`
//   width: 80%;
//   height: 21.5rem;
//   margin-top: 5rem;
//   border-radius: 1rem;
//   background: linear-gradient(to right, var(--maingreen), var(--mainblue));
//   display: flex;
//   align-items: center;
//   overflow: hidden;
//   .image {
//     /* flex: 1; */
//     width: 13.5rem;
//     height: 13.5rem;
//     border-radius: 50%;
//     background-color: lightgray; // 사진이 들어갈 부분
//     border: 0.8rem solid white;
//     box-sizing: content-box;
//     margin-left: 5rem;
//   }
//   .leftInfo {
//     /* flex: 1; */
//     width: 20%;
//     height: 100%;
//     margin-left: 4%;
//     /* background-color: skyblue; */
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     color: white;
//     .authtitle {
//       font-size: 2rem;
//       font-weight: 400;
//     }
//     .nick {
//       font-size: 3rem;
//       font-weight: 700;
//     }
//     .heart {
//       margin-top: 0.5rem;
//       width: 14rem;
//       height: 5rem;
//       background-color: white;
//       border-radius: 10rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: black;
//       overflow: hidden;
//       .heartimg {
//         width: 25%;
//         margin: 0rem 10%;
//         height: 100%;
//         background: url(${heartImg}) no-repeat center center;
//         background-size: contain;
//       }
//       .count {
//         width: 50%;
//         flex: 1;
//         font-size: 2rem;
//         font-weight: 600;
//         line-height: 1.5;
//       }
//     }
//     .signdate {
//       margin-top: 1rem;
//       font-size: 2rem;
//       font-weight: 400;
//     }
//   }

//   .rightInfo {
//     /* flex: 1; */
//     width: 40%;
//     height: 100%;
//     /* background-color: lightcoral; */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .top {
//       width: 100%;
//       height: 40%;
//       /* background-color: orange; */
//       display: flex;
//       align-items: center;
//       color: white;
//       .Cnt {
//         width: 50%;
//         height: 100%;
//         display: flex;
//         justify-content: center;
//         align-items: flex-end;
//         font-size: 2rem;
//         cnt {
//           margin-left: 1rem;
//           font-size: 2.5rem;
//           font-weight: 700;
//         }
//       }
//     }
//     .pointerZone {
//       width: 90%;
//       height: 20%;
//       /* background-color: white; */
//       position: relative;
//       .pointer {
//         position: absolute;
//         left: 20%;
//         bottom: 0;
//         width: 1.5rem;
//         height: 3rem;
//         transform: translate(-50%, 0%);
//         background: url(${Pointer}) no-repeat center center;
//         background-size: contain;
//       }
//     }
//     .mid {
//       width: 90%;
//       height: 35%;
//       display: flex;
//       justify-content: center;
//       align-items: flex-end;
//       flex-wrap: wrap;
//       padding-bottom: 1rem;
//       /* background-color: yellow; */
//       .authGage {
//         width: 100%;
//         height: 1rem;
//         border-radius: 2rem;
//         border: 0.05rem solid white;

//         .gageBar {
//           width: ${20}%;
//           height: 100%;
//           background-color: white;
//         }
//       }

//       .check {
//         width: 100%;
//         display: flex;
//         justify-content: space-between;
//         .checker {
//           width: 0.3rem;
//           height: 1rem;
//           border-radius: 1rem;
//           background-color: white;
//         }
//       }
//       .auth {
//         width: 100%;
//         height: 30%;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         color: white;
//         /* background-color: pink; */
//         font-size: 1.6rem;
//         font-weight: 400;

//         .aut {
//         }
//       }
//     }
//   }
//   .pointZone {
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: flex-end;
//     padding-right: 4%;
//     height: 100%;
//     /* background-color: lightgray; */
//     color: white;
//     .title {
//       font-size: 2rem;
//       font-weight: 400;
//     }
//     .point {
//       font-size: 3rem;
//       font-weight: 700;
//     }
//     .buttonZone {
//       display: flex;
//       justify-content: flex-end;
//       gap: 2rem;
//       margin-top: 2rem;
//     }
//     Button {
//       color: white;
//       background-color: rgba(0, 0, 0, 0);
//       border: 0.2rem solid white;
//       margin: 0;
//       &:active {
//         background-color: var(--mainsky);
//       }
//     }
//   }
// `;

// // UpdateBox.jsx 스타일 부분
// export const UpdateZone = styled.div`
//   margin: 3rem 0rem;
//   border-radius: 1rem;
//   width: 80%;
//   box-shadow: 0 1rem 3rem -0.5rem rgba(0, 0, 0, 0.25);
//   height: 36rem;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   .inputContainer {
//     width: 95%;
//     height: 20rem;
//     display: flex;
//     flex-direction: column;
//     /* background-color: skyblue; */
//     flex-wrap: wrap;
//     div {
//       margin-left: 3%;
//       width: 30%;
//       /* background-color: pink; */
//       font-weight: 200;
//       font-size: 1.6rem;
//       display: flex;
//       justify-content: space-between;
//     }
//     div.discription {
//       Input {
//         height: 17rem;
//       }
//     }
//   }

//   h1 {
//     padding-left: 3%;
//     font-size: 4rem;
//     width: 100%;
//     height: 5rem;
//     /* background-color: blue; */
//     color: var(--mainolive);
//   }

//   div.buttonContainer {
//     width: 100%;
//     height: 5rem;
//     display: flex;
//     justify-content: right;
//     /* background-color: skyblue; */
//   }
// `;

// export const InputBox = styled.input`
//   margin-bottom: 1rem;
//   width: 75%;
//   height: 3.5rem;
//   border: 0.03rem solid var(--mainolive);

//   &::placeholder {
//     color: var(--mainolive);
//     padding-left: 1rem;
//   }
// `;

// export const Button = styled.button`
//   width: 10rem;
//   height: 4.5rem;
//   border-radius: 4rem;
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: var(--maindarkgreen);
//   border: 0.3rem solid var(--maindarkgreen);
//   background-color: white;
//   margin-right: 5rem;
//   &:hover {
//     cursor: pointer;
//     transform: scale(1.1); // 크기를 10% 증가
//     transition: transform 0.1s ease-in-out;
//   }
//   &:active {
//     background-color: var(--maindarkgreen);
//     color: white;
//   }
// `;

// const PerformanceUpdate = () => {
//   // 입력값 정보 저장
//   const [performer, setPerformer] = useState([]); // 참여자
//   const [venue, setVenue] = useState(""); // 공연장소
//   const [detailVenue, setDetailVenue] = useState(""); // 상세공연장소
//   const [date, setDate] = useState(""); // 공연일시
//   const [title, setTitle] = useState(""); // 공연제목
//   const [poster, setPoster] = useState(""); // 포스터
//   const [seat, setSeat] = useState(""); // 좌석수
//   const [description, setDescription] = useState(""); // 공연소개

//   // 유효성 검사, 포스터이미지, 설명은 없어도 되는 값이므로 제외
//   const [isperformer, setIsPerformer] = useState(false); // 참여자 입력유무
//   const [isvenue, setIsVenue] = useState(false); // 공연장소 입력유무
//   const [isdetailVenue, setIsDetailVenue] = useState(false); // 상세공연장소 입력유무
//   const [isdate, setIsDate] = useState(false); // 공연일시 입력유무
//   const [istitle, setIsTitle] = useState(false); // 공연제목 입력유무
//   const [isseat, setIsSeat] = useState(false); // 좌석수 입력유무

//   const navigate = useNavigate();

//   const email = window.localStorage.getItem("email");
//   console.log(email);

//   useEffect(() => {
//     if (!email) {
//       alert("로그인이 필요합니다.");
//       navigate("/login");
//     }
//   }, []);

//   // 입력값을 서버로 전송할 부분

//   return (
//     <>
//       <Container>
//         <UpdateUserInfo />
//         <UpdateBox />
//       </Container>
//     </>
//   );
// };

// export default PerformanceUpdate;
