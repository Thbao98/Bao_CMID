import HaTienImg from './Hatien_DaDung.png';
import HaTienImg2 from './Hatien_XayTo.png';
import {Card} from 'antd';
const {Meta} = Card;
const HaTien=() => {
    return (
        <>
        <h1>Hà Tiên</h1>
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
                    src={HaTienImg}
                />
                }>
                <Meta title="Xi măng Hà Tiên" description="Đa Dụng" />
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
                    src={HaTienImg2}
                />
                }>
                <Meta title="Xi măng Hà Tiên" description="Xây Tô" />
            </Card>
            {/* </div> */}
        </div>
        </>
    )

}
export default HaTien;