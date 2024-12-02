

// import ksa from '../../assets/ksa.jpg'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LowerHeader from './LowerHeader'
import style from './Header.module.css'
function Header() {
  return (
    <>
      <div className={style.header_container} >
        <dev className ={style.logo_container} >
          {/* logo */}
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
          </Link>
          {/* delivery */}
          <div className= {style.delivery}>
          <span>
            {<FaLocationDot />}
          </span>
          <div>
            <p>Deliver to</p>
            <span> ksa</span>
            </div>
          </div>  
        </dev>
        <dev className= {style.search}>
          {/* search bar */}
          <select name="" id="">
            <option value="">All</option>
            </select>
            <input type="text"  name='' id='' placeholder=' search product'/>
            {<FaSearch  size={25}/>}
         
        </dev>
        {/* rightSide  */}

        <dev>
          <div className= { style.order_container} >
            <a href="" className={style.language}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png" alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
            </a>
           
            {/* three components  */}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span> Account & Lists</span>
              </div>
            </Link>
            {/* order */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={style.cart}>
              {<CiShoppingCart size={35} />}
              <span>0</span>
            </Link>
          </div>
        </dev>
      </div>
      <LowerHeader/>
    </>
  )
}

export default Header