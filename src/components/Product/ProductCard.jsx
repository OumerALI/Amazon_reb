import Rating from '@mui/material/rating';
import CurrencyFormat  from '../CurrencyFormat/CurrencyFormat';

import style from './Product.module.css';
import PropTypes from 'prop-types';

// ProductCard component to display product details
function ProductCard({ image, title, price, id, rating }) {
  return (
    <div className= {`${style.card_container}`}>
        <a href={`/product/${id}`}>
            <img src={image} alt={title} />
        </a>
        <div>
            <h3>{title}</h3>
            <div className= {style.rating}>
                <Rating value={rating} precision={0.1} />
                <small>{rating}</small>
            </div>
            <div>
                <CurrencyFormat amount={price} />
            </div>
            <button className= {style.button}>
                add to cart
            </button>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};


export default ProductCard