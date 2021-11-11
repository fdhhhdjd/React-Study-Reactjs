import React, { useState } from "react";
import Player from "../PlayerMusic/Player";
import "./Player.css";
const Players = () => {
  const [songs] = useState([
    {
      title: "Muộn rồi mà sao còn ",
      artist: "Sơn Tùng MTP",
      img_src: "./images/sontung.jpg",
      src: "./music/sontung.mp3",
    },
    {
      title: "31073",
      artist: "Nâu,Dương,Titie",
      img_src: "./images/nau.jpg",
      src: "./music/31073.mp3",
    },
    {
      title: "Cỏ gió và mây",
      artist: "Nha",
      img_src: "./images/giomay.jpg",
      src: "./music/cogiomay.mp3",
    },
    {
      title: "Diu dàng là ngày em đến",
      artist: "Erik",
      img_src: "./images/điuang.jpg",
      src: "./music/diudang.mp3",
    },
    {
      title: "Dĩ vãng đôi ta",
      artist: "Vicky Nhung",
      img_src: "./images/diavang.jpg",
      src: "./music/divang.mp3",
    },
    {
      title: "Em đừng khóc",
      artist: "Chillies",
      img_src: "./images/emdungkhoc.jpg",
      src: "./music/emdungkhoc.mp3",
    },
    {
      title: "Hoàng hoa ký",
      artist: "Long nón lá",
      img_src: "./images/long.jpg",
      src: "./music/longnonla.mp3",
    },
    {
      title: "Tay To",
      artist: "RPT MCK",
      img_src: "./images/tayto.jpg",
      src: "./music/tayto.mp3",
    },
  ]);

  return (
    <>
      <div className="app-container">
        <h1>Music Tai Dev</h1>
        <Player />
      </div>
    </>
  );
};
export default Players;
