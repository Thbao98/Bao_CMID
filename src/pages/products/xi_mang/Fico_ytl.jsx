import HaLongImg from './Ximang_HaLongPCB30.png';
import HaLongImg2 from './Ximang_HaLongPCB40.png';
import {Card} from 'antd';
const {Meta} = Card;
const Fico=() => {
    return (
        <>
        <h1>Fico</h1>
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
                    src={HaLongImg}
                />
                }>
                <Meta title="Xi măng Hạ Long" description="PCB30" />
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
                    src={HaLongImg2}
                />
                }>
                <Meta title="Xi măng Hạ Long" description="PCB40" />
            </Card>
            {/* </div> */}
        </div>
        </>
    )

}
export default Fico;