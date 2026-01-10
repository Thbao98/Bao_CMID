import React from 'react';
import './Sidetab.css';

function SideTab() {
  return (
    <div className="side-tab">
        <div className="side-tab-content">

            <div className="side-tab-text">
              <em>Về chúng tôi</em>
              <br></br>
              <strong>Vật liệu xây dựng</strong>
              <br></br>
              <p>Công ty trước đây nguyên là bộ phận vật liệu xây dựng của Công Ty Vật Liệu Xây Dựng và Chất Đốt. 
                Do nhu cầu của sự phát triển kinh tế,  bộ phận này được tách ra và trở thành Công ty độc lập cũng
                với tên gọi là Công ty Vật Liệu Xây Dựng và Trang Trí Nội Thất, trực thuộc Sở Thương Mại Thành Phố Hồ Chí Minh.
                
              </p>
            </div>

            <div className="side-tab-image">
              <img src="logo192.png" alt="Về chúng tôi logo"/>
            </div>

        </div>
    </div>
  );
}

export default SideTab;
