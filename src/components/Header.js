import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import {Row, Col, Typography, Button} from "antd";
const {Title} = Typography;
const Header = () =>{
  // const renderHomebtn = () => {
  //   return (
  //     <Button 
  //       type="text"
  //       icon={
  //         <span className="ant_icon"><HomeFilled style={{fontSize:"20px"}} /></span>
  //       }
  //       onClick={backtoHome()}
  //     />
  //   )
  // }
  return (
    <div className="header">
      <img src = "logo.png" alt = 'logo'/>
      <Title style={{color: "#0B1C3D"}}>CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG & TRANG TRÍ NỘI THẤT TP. HCM</Title>
      <h1>CMID</h1>
      <Button type="link">
        <Link to='/'>Trang chủ</Link>
      </Button>
      <Button type="link">
        <Link to='/gioi-thieu'>Giới thiệu</Link>
      </Button>
      <Button type="link">
        <Link to='/san-pham'>Sản phẩm</Link>
      </Button>
      <Button type="link" href="/Quan hệ cổ đông">Quan hệ cổ đông</Button>
      <Button type="link" href="/Liên hệ">Liên hệ</Button>
    </div>
    
  );
  
}

export default Header;
