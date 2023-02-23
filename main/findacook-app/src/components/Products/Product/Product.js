import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/actions/productActions'
import { addToCart } from '../../../redux/actions/cartActions';

const Product = () => {

    const navigate = useNavigate();
	const { productId } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const { product } = useSelector(state => state.products);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	const handleGoBackBtn = () => {
		navigate(-1);
	};
    return (
        <>
        		<section className='product-page m-4'>
			<button
				to='/admin'
				className='btn btn-light text-primary mb-4'
				onClick={handleGoBackBtn}
			>
				Go Back
			</button>
			{product && (
				<div className='row'>
					<div className='col-md-6'>
						<img
							className='img-fluid w-100 mb-4'
							src={`/uploads/${product.filename}`}
							alt='product'
						/>
					</div>
					<div className='col-md-5'>
						<h3 className='mb-4'>{product.item_name}</h3>
						<p className='text-muted border-top py-2'>
							Price:{' '}
							{product.price.toLocaleString("en-GB", {
                              style: "currency",
                              currency: "EUR",
                            })}
						</p>

						<p className='text-muted border-top py-2'>
						{product.product_description}
						</p>
						{/* <button
							className='btn btn-dark btn-large btn-block mb-5 py-2'
							disabled={product.productQty <= 0}
							onClick={handleAddToCart}
						>
							Add to Cart
						</button> */}
                                    <button
                type='button'
                className="btn btn-warning btn-sm"
                onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
					</div>
				</div>
			)}
		</section>
        </>
    )
}

export default Product;