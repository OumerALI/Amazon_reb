/** @format */

import LayOut from "../../components/LayOut/LayOut";
import style from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
function Results() {
  const { categoryName } = useParams();
  axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
    console.log(res);
  });
  return (
    <LayOut>
      <div>Results Page</div>
    </LayOut>
  );
}

export default Results;
