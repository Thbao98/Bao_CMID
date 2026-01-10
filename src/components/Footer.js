import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h1>Thông tin liên lạc</h1>
      <p>CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG VÀ TRANG TRÍ NỘI THẤT THÀNH PHỐ HỒ CHÍ MINH</p>
      <div className="footer-map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5960676225886!2d106.69101377480474!3d10.765581489382583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f167a497613%3A0xd341a89a77086209!2zMjE1IFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyBDw7QgR2lhbmcsIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1767941508820!5m2!1sen!2s" width="600" height="450" style={{border:0}} 
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title ="google map"></iframe>
      </div>
    </div>
  );
}

export default Footer;
