import {Card} from 'antd';
import InseeLogo from './InseeLogo.png';
import FicoLogo from './FicoLogo.svg';
import NghiSonLogo from './NghiSonLogo.png';
import ThangLongLogo from './ThangLongLogo.png';
import HolcimLogo from './HolcimLogo.svg';
function Partner() {
    return (
       <div>
            <h1>Đối tác</h1>
            <div className='product-grid'>
                <a
                href="https://siamcitycement.com/vietnam/vn/home"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                >
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <img
                            draggable={false}
                            alt="insee"
                            src={InseeLogo}
                        />
                        }>
                    </Card>     
                </a>

                <a
                href="https://fico-ytl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                >
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <img
                            draggable={false}
                            alt="fico"
                            src={FicoLogo}
                        />
                        }>
                    </Card>                   
                </a>

                 <a
                href="https://nghison.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                >
                    <Card
                    hoverable
                    style={{ width: 240 , backgroundColor: 'DarkBlue'}}
                    cover={
                        <img
                            draggable={false}
                            alt="nghi son"
                            src={NghiSonLogo}
                        />
                        }>
                    </Card>                   
                </a>

                 <a
                href="https://www.thanglongcement.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                >
                    <Card
                    hoverable
                    style={{ width: 240 , backgroundColor: 'white'}}
                    cover={
                        <img
                            draggable={false}
                            alt="thang long"
                            src={ThangLongLogo}
                        />
                        }>
                    </Card>                   
                </a>

                 <a
                href="https://www.holcim.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                >
                    <Card
                    hoverable
                    style={{ width: 240 , backgroundColor: 'white'}}
                    cover={
                        <img
                            draggable={false}
                            alt="holcim"
                            src={HolcimLogo}
                        />
                        }>
                    </Card>                   
                </a>
            </div>
       </div> 
    )

    
}
export default Partner;