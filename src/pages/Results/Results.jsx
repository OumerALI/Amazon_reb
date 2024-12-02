/** @format */

// import LayOut from "../../components/LayOut/LayOut";
// import style from "./Results.module.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/EndPoints";
// import { useEffect, useState } from "react";
// import ProductCard from "../../components/Product/ProductCard";
// function Results() {
//   const [results, setResults] = useState([]);

//   const { categoryName } = useParams();
//   console.log(categoryName)
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [categoryName]);

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category / {categoryName}</p>
//         <hr />

//         <div className={style.product_container}>
//           {/* {results?.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))} */}

//           {results.map((product) => (
//             <ProductCard
//               key={product.id}
//               id={product.id}
//               image={product.image}
//               title={product.title}
//               price={product.price}
//               rating={product.rating}
//             />
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;
//Todo
import LayOut from "../../components/LayOut/LayOut";
import style from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        <div className={style.product_container}>
          {results.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating.rate} // Pass only the numeric rating
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;

//TODO -
// import LayOut from "../../components/LayOut/LayOut";
// // import ProductCard from "../../components/ProductCard/ProductCard";
// import style from "./Results.module.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/EndPoints";
// import { useEffect, useState } from "react";

// function Results() {
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { categoryName } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [categoryName]);

//   return (
//     <LayOut>
//       <section className={style.product_container}>
//         <h1>Results</h1>
//         <p>Category / {categoryName}</p>
//         <hr />
//         {loading ? (
//           <p>Loading...</p>
//         ) : results.length === 0 ? (
//           <p>No products found in this category.</p>
//         ) : (
//           <div className={style.product_container}>
//             {results.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Results;
