import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {Row, Col, Typography, Button} from "antd";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items_CoDong = [
  {
    label: <a href="https://www.cmid.com.vn/quan-he-co-dong.aspx" 
    className="nav-link-font">Quan hệ cổ đông</a>,
    key: '1',
  },
  {
    label: <span className="nav-link-font">Báo cáo định kỳ</span>,
    key: '2',
  },
  {
    label: <a href="https://cafef.vn/thi-truong-chung-khoan.chn"
    className="nav-link-font">Thị trường chứng khoán</a>,
    key: '3',
  },
];

const items_KinhDoanh = [
  {
    label: <span className="nav-link-font">Sản phẩm</span>,
    key: '1',
  },
  {
    label: <span className="nav-link-font">Đối tác</span>,
    key: '2',
  },
]
const {Title} = Typography;
const Header = () =>{

  return (
    <>
    <div className="header">
      <img src = "logo.png" alt = 'logo'/>
      <Title style={{color: "#0B1C3D"}}>CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG & TRANG TRÍ NỘI THẤT TP. HCM</Title>
      <h1>CMID</h1>
    </div>
      <div className="navbar">
        <Button type="link">
          <Link to='/'>Trang chủ</Link>
        </Button>
        <Button type="link">
          <Link to='/gioi-thieu'>Giới thiệu</Link>
        </Button>
       
      

        <Dropdown menu={{ items: items_CoDong }}>
          <Button type="link" onClick={e => e.preventDefault()}>
              <Space>
                Thông tin cổ đông
                <DownOutlined />
              </Space>

          </Button>
        </Dropdown>

        <Dropdown menu={{ items: items_KinhDoanh }}>
          <Button type="link" onClick={e => e.preventDefault()}>

              <Space>
                Hệ thống kinh doanh
                <DownOutlined />
              </Space>

          </Button>
        </Dropdown>

        <Button type="link">
          <Link to='/lien-he'>Liên hệ</Link>
        </Button>
      </div>
    </>
  );
  
}

export default Header;
