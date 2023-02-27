import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import { data } from './DemoStore'

function DemoProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <div className="products">
      <div className="cards">
        <div>
          <img className="product-image" src={product.image} />
        </div>
        <div>
          <h3 className="product-name">{product.name}</h3>
        </div>
        <div className="product-price">€{product.price}</div>
        {productQuantity > 0 ? (
          <>

            <div className='quantityDiv'>
            <button className='btn-quantity-minus' onClick={() => cart.removeOneFromCart(product.id)}>
                <FaMinusCircle />
            </button>
            <p className='quantity'>{productQuantity}</p>
            <button className='btn-quantity-plus' onClick={() => cart.addOneToCart(product.id)}>
                <FaPlusCircle />
            </button>
            </div>
            {/* <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button

                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form> */}
            {/* <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Remove from cart
            </Button> */}
          </>
        ) : (
          <>
            <div className="add">
              <button
                className="addCartButton"
                onClick={() => cart.addOneToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DemoProductCard;
