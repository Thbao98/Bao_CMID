import CamPhaImg from './Campha_Econ.webp';
import CamPhaImg2 from './Campha_jumbo.png';
import {Card} from 'antd';
const {Meta} = Card;
const HaLong=() => {
    return (
        <>
        <h1>Cẩm Phả</h1>
        <div className='product-grid'>
            {/* <div className='product-card'> */}
                {/* <img src={HaLongImg} alt='HaLong30'/> */}
                <Card
                hoverable
                style={{ width: 240 }}
                cover={
                <img
                    draggable={false}
                    alt="example"
                    src={CamPhaImg}
                />
                }>
                <Meta title="Xi măng Cẩm Phả" description="Econ" />
            </Card>
            {/* </div>

            <div className='product-card'> */}
                {/* <img src={HaLongImg} alt='HaLong30'/> */}
                <Card
                hoverable
                style={{ width: 240 }}
                cover={
                <img
                    draggable={false}
                    alt="example"
                    src={CamPhaImg2}
                />
                }>
                <Meta title="Xi măng Cẩm Phả" description="Jumbo" />
            </Card>
            {/* </div> */}
        </div>
        </>
    )

}
export default HaLong;