import axios from "axios";
import { CHORD8_DOMAIN } from "../utils/common";

const MusicAxiosApi = {
  //음악 목록 조회
  getAllMusic: async () => {
    console.log("음악 리스트 조회 AxiosApi 작동");
    return await axios.get(CHORD8_DOMAIN + `/music/musiclist`);
  },

  //음악 상세 정보 조회
  getMusicById: async (id) => {
    console.log("음악 상세 조회 AxiosApi 작동");
    return await axios.get(CHORD8_DOMAIN + `/music/detail/${id}`);
  },

  //음악 페이지 수 조회

  getMusicPage: async (page, size) => {
    console.log("음악페이지수조회 AxiosApi 작동");
    return await axios.get(
      CHORD8_DOMAIN + `/music/musiclist/count?page=${page}&size=${size}`
    );
  },

  //음악 페이지네이션 조회
  getMusicList: async (page, size) => {
    console.log("음악페이지네이션조회 AxiosApi 작동");
    return await axios.get(
      CHORD8_DOMAIN + `/music/musiclist/page?page=${page}&size=${size}`
    );
  },

  //음악 댓글 입력
};

export default MusicAxiosApi;
