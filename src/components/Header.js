
import './Header.css';
import PATHS from '../routes/paths'

import {Link} from 'react-router-dom';
import { Typography, Button} from "antd";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';









const {Title} = Typography;


const Header = () =>{

  const navigate = useNavigate();

  const items_CoDong = [
  {
    label: <a href="https://www.cmid.com.vn/quan-he-co-dong.aspx" 
    className="nav-link-font">Quan hệ cổ đông</a>,
    key: '1',
  },
  {
    label: <span className="nav-link-font">Báo cáo định kỳ</span>,
    key: '2',
    onClick: () => navigate(PATHS.REPORT),
  },
  {
    label: <a href="https://cafef.vn/thi-truong-chung-khoan.chn"
    className="nav-link-font">Thị trường chứng khoán</a>,
    key: '3',
  },
];



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
            path: PATHS.PRODUCTS + PATHS.THANG_LONG,
          },
          {
            value: 'hà tiên',
            label: 'Hà Tiên',
            path: PATHS.PRODUCTS + PATHS.HA_TIEN,
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
            onClick: () => navigate(PATHS.HA_LONG),
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
];

const cascaderToMenuItems = (options) =>
  options.map(opt => ({
    label: <Link className="nav-link-font">{opt.label}</Link>,
    key: opt.value,
    children: opt.children ? cascaderToMenuItems(opt.children) : undefined,
  }));
  
const renderOptionButtons = (options) =>
  options.map((opt) => (
    <div key={opt.label} style={{ marginBottom: 8 }}>
      {opt.path && (
        <Button type="link">
          <Link to={opt.path} className="nav-link-font">
            {opt.label}
          </Link>
        </Button>
      )}

      {opt.children && (
        <div style={{ paddingLeft: 16 }}>
          {renderOptionButtons(opt.children)}
        </div>
      )}
    </div>
  ));
const items_KinhDoanh = [
  {
    label: <Link to={PATHS.PRODUCTS} className="nav-link-font">Sản phẩm</Link>,
    key: 'san-pham',
    children: cascaderToMenuItems(options[0].children),
  },
  {
    label: <Link to={PATHS.BRANCH} className="nav-link-font">Chi nhánh</Link>,
    key: 'chi-nhanh',
  },
  {
    label: <Link to={PATHS.PARTNER} className="nav-link-font">Đối tác</Link>,
    key: 'doi-tac',
  },
];

// const ximang = [
//   {
//     label: <Link to={PATHS.PRODUCTS + PATHS.HA_LONG}/>,
//     key:'ha-long',
//   }
// ]

  const { i18n } = useTranslation();

  const languageMenu = {
    items: [
      {
        key: 'vi',
        label: <Link to={PATHS.HOME}> Tiếng Việt</Link>,
        onClick: () => i18n.changeLanguage('vi'),
      },
      {
        key: 'en',
        label: <Link to={PATHS.HOME_EN}> English</Link>,
        onClick: () => i18n.changeLanguage('en'),
      },
    ],
  };

  return (
    <>
    <div className="header">
      <Link to={PATHS.HOME}>
        <img src = "logo.png" alt = 'logo'/>
      </Link>
      <Title style={{color: "#0B1C3D"}}>CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG & TRANG TRÍ NỘI THẤT TP. HCM</Title>
      <h1>CMID</h1>
    </div>
      <div className="navbar">
        <Button type="link">
          <Link to={PATHS.HOME}>Trang chủ</Link>
        </Button>
        <Button type="link">
          <Link to={PATHS.ABOUT}>Giới thiệu</Link>
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
          <Link to={PATHS.CONTACT}>Liên hệ</Link>
        </Button>

        <Dropdown menu={languageMenu} placement="bottomRight">
          <Button
            type="text"
            icon={<GlobalOutlined style={{color:  "blue"}}/>}
            className="lang-btn"
          />
        </Dropdown>
      </div>

      <div className="product-links">
        {renderOptionButtons(options)}
      </div>
    </>
  );
  
}

export default Header;
