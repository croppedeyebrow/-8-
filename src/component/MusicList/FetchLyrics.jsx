import React, { useState, useEffect } from "react";

const FetchLyrics = ({ url }) => {
  const [lyricsContent, setLyricsContent] = useState("");

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("가사를 불러올 수 없습니다.");
        }
        const data = await response.text();
        setLyricsContent(data);
      } catch (error) {
        console.error(error);
        setLyricsContent("가사를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchLyrics();
  }, [url]);

  return <pre>{lyricsContent}</pre>;
};

export default FetchLyrics;
