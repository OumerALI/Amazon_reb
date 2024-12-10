/** @format */

// import LayOut from "../../components/LayOut/LayOut";
// import { db } from "../../Utility/firebase";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import style from "./order.module.css";
// import { useContext, useState, useEffect } from "react";
// import ProductCard from "../../components/Product/ProductCard";

// function Orders() {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     if (user) {
//       db.collection("users")
//         .doc(user.uid)
//         .collection("orders")
//         .orderBy("created", "desc")
//         .onSnapshot((snapshot) => {
//           console.log(snapshot);
//           setOrders(snapshot.docs.map((doc)=>({
//             id:doc.id,
//             data:doc.data()
//           }))
//         )
//         });
//     } else {
//       setOrders([])
//     }
//   }, []);
//   return (
//     <LayOut>
//       <section className={style.container}>
//         <div className={style.orders__container}>
//           <h2>your orders</h2>
//           {
//             orders?.length == 0 && <div style={{padding:"20px"}}>you do not have order yet.</div>
//           }
//           <div>
//             {
//               orders?.map((eachOrder,i)=>{
//                 return (
//                   <div key={i}>
//                     <hr />
//                     <p>order Id: {eachOrder.id}</p>
//                     {
//                       eachOrder?.data?.basket?.map(order=>{
//                        return ( <ProductCard
//                         flex={true}
//                         product={order}
//                         key={order.id}

//                         />
//                         )

//                       }
//                     }
//                     <div/>
//                 )
//               })}

//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Orders;

//REVIEW -

import LayOut from "../../components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import style from "./order.module.css";
import { useContext, useState, useEffect } from "react";
import ProductCard from "../../components/Product/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext); // Removed unused dispatch
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

      // Cleanup subscription
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]); // Added `user` as a dependency

  return (
    <LayOut>
      <section className={style.container}>
        <div className={style.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>
              You do not have any orders yet.
            </div>
          )}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={eachOrder.id}>
                <hr />
                <p>Order ID: {eachOrder.id}</p>
                <div>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard
                      flex={true}
                      product={order}
                      key={order.id} // Ensure `order.id` is unique
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
