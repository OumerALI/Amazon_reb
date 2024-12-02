


// import style from './Category.module.css'



// function CategoryCard({data}) {
//   return (
//     <div className={ style.category}>
//         <a href="">
//             <span>
//                 <h2>{data.title}</h2>
//             </span>
//             <img src={data.imgLink} alt="" />
//             <p>shop now</p>
//         </a>
//     </div>
//   )
// }

// export default CategoryCard;
import PropTypes from 'prop-types';
import style from './Category.module.css';

function CategoryCard({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.category}>
      <a href="#">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title || 'category image'} />
        <p>Shop now</p>
      </a>
    </div>
  );
}

CategoryCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
