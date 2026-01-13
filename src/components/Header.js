import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { Typography, Button} from "antd";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const options = [
  {
    value: 'sản phẩm',
    label: 'Sản phẩm',
    children: [
      {
        value: 'xi măng',
        label: 'Xi măng',
        children: [
          {
            value: 'thăng long',
            label: 'Thăng Long',
          },
          {
            value: 'hà tiên',
            label: 'Hà Tiên',
          },
          {
            value: 'insee-lavila',
            label: 'Insee-Lavila',
          },
          {
            value: 'nghi sơn',
            label: 'Nghi Sơn',
          },
          {
            value: 'fico',
            label: 'Fico-YTL',
          },
          {
            value: 'hạ long',
            label: 'Hạ Long',
          },
          {
            value: 'long sơn',
            label: 'Long Sơn',
          },
          {
            value: 'cẩm phả',
            label: 'Cẩm Phả',
          },
          {
            value: 'taceco',
            label: 'Taceco',
          },
        ],
      },
      {
        value: 'khác',
        label: 'Khác',
      }
    ],
  },
  // {
  //   value: 'jiangsu',
  //   label: 'Jiangsu',
  //   children: [
  //     {
  //       value: 'nanjing',
  //       label: 'Nanjing',
  //       children: [
  //         {
  //           value: 'zhonghuamen',
  //           label: 'Zhong Hua Men',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
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

const cascaderToMenuItems = (options) =>
  options.map(opt => ({
    label: <span className="nav-link-font">{opt.label}</span>,
    key: opt.value,
    children: opt.children ? cascaderToMenuItems(opt.children) : undefined,
  }));


const items_KinhDoanh = [
  {
    label: <Link to="/san-pham" className="nav-link-font">Sản phẩm</Link>,
    key: 'san-pham',
    children: cascaderToMenuItems(options[0].children),
  },
  {
    label: <Link to="doi-tac" className="nav-link-font">Đối tác</Link>,
    key: 'doi-tac',
  },
];

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

        <Dropdown menu={{ items: items_KinhDoanh }}  trigger={['hover']}>
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
