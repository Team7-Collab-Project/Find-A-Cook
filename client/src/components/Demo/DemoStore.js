import {data} from '../../DemoProduct'
import {Row, Col} from 'react-bootstrap';
import DemoProductCard from './DemoProductCard';

function DemoStore() {

    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {data.map((product, idx) => (
                    <Col align="center" key={idx}>
                        {/* <h1>{product.name}</h1> /}
                        {/ <ProductCard product={product}/> */}
                        <DemoProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default DemoStore;