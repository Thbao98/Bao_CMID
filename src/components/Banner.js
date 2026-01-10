import React from 'react';
import './Banner.css';
import {Row, Col, Typography} from "antd";
const {Title} = Typography;
const Banner = () =>{
  return (
    <div className="banner">
      <Title style={{color: "#1A0B88"}}>CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG & TRANG TRÍ NỘI THẤT TP. HCM</Title>
      <h1>CMID</h1>
    </div>
  );
}

export default Banner;
