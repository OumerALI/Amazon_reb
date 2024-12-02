


import { CategoryInfos } from './CategoryFullInfos';
import style from './Category.module.css'
import CategoryCard from './CategoryCard'
function Category() {
  return (
    <section className={style.category_container}>
        {
            CategoryInfos.map((infos)=>{
               
                 <CategoryCard data={infos} key ={infos.title}/>
            })

        }
    </section>
  )
}

export default Category;


//todo: remove

// ab 
// import CategoryCard from "./CategoryCard";
// import { categoryInfos } from "./CategoryInfo/CategoryInfos";
// import classes from "./Category.module.css";

// function Category() {
//   return (
//     <section className={classes.category_container}>
//       {categoryInfos.map((infos) => (
//         <CategoryCard data={infos} key={infos.title} />
//       ))}
//     </section>
//   );
// }

// export default Category;
// todo: remove
//  import { CategoryInfos } from './CategoryInfo';
// import CategoryCard from './CategoryCard';
// import style from './Category.module.css'

// function Category() {
//   return (
    
//     <section className={style.category__container}>
//       {CategoryInfos?.map((infos) => {
        
//         return <CategoryCard  data = {infos} />;
//       })}
//     </section>
//   );
// }

// export default Category;