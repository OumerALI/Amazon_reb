import  {useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import style from './Product.module.css'
function Product() {
    const [products, setProducts] =useState()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
 
        })
        .catch((err) => {
           console.log(err)
        }  )
    
      

    }, [])
    
  return (
    <section className= {style.products_container}>
      {products && products.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct} />
      ))}
    </section>
  )

}

export default Product