/** @format */

// /** @format */

// // import Rating from '@mui/material/rating';
// // import CurrencyFormat  from '../CurrencyFormat/CurrencyFormat';

// // import style from './Product.module.css';
// // import PropTypes from 'prop-types';

// // // ProductCard component to display product details
// // function ProductCard({ image, title, price, id, rating }) {
// //   return (
// //     <div className= {`${style.card_container}`}>
// //         <a href={`/product/${id}`}>
// //             <img src={image} alt={title} />
// //         </a>
// //         <div>
// //             <h3>{title}</h3>
// //             <div className= {style.rating}>
// //                 <Rating value={rating} precision={0.1} />
// //                 <small>{rating}</small>
// //             </div>
// //             <div>
// //                 <CurrencyFormat amount={price} />
// //             </div>
// //             <button className= {style.button}>
// //                 add to cart
// //             </button>
// //         </div>
// //     </div>
// //   )
// // }

// // ProductCard.propTypes = {
// //   image: PropTypes.string.isRequired,
// //   title: PropTypes.string.isRequired,
// //   price: PropTypes.number.isRequired,
// //   id: PropTypes.string.isRequired,
// //   rating: PropTypes.number.isRequired,
// // };

// // export default ProductCard

// import Rating from "@mui/material/rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import style from "./Product.module.css";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// function ProductCard({ image, title, price, id, rating }) {
//   // const { image, title, price, id, rating } = product;
//   return (
//     <div className={`${style.Card_container}`}>
//       {/* <Link to={`/product/${id}`}>
//         <img src={image} alt={title} />
//       </Link> */}
//       <Link to={`/product/${id}`}>
//         <img src={image} alt={title} />
//         <button className={style.detail}>View Product</button>
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         <div className={style.rating}>
//           <Rating value={rating} precision={0.1} readOnly />
//           <small>{rating}</small>
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={style.button}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// ProductCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   rating: PropTypes.number.isRequired,
// };

// export default ProductCard;

//TODO -
import Rating from "@mui/material/rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./Product.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ image = "", title = "", price = 0, id, rating = 0 }) {
  return (
    <div className={`${style.Card_container}`}>
      <Link to={`/product/${id}`}>
        <img src={image || "https://via.placeholder.com/150"} alt={title} />
        <button className={style.detail}>View Product</button>
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={style.rating}>
          <Rating value={rating || 0} precision={0.1} readOnly />
          <small>{rating ? rating.toFixed(1) : "N/A"}</small>
        </div>
        <div>
          <CurrencyFormat amount={price || 0} />
        </div>
        <button className={style.button}>Add to Cart</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductCard;
