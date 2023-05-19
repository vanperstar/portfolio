import Header from '../../../components/header/header'
import { useEffect, useState, useRef } from "react";
import axios from "../../../api/axios";
import Order from "../order/order";
import "./cart.css";

function Cart() {
  const flowerRef = useRef();
  const countRef = useRef();

  if (!window.localStorage.getItem("token")) {
    window.location.href = "/login";
  }

  const [data, setData] = useState([]);

  const getOrder = async () => {
    try {
      const fetchData = await axios.get("/products");
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getOrder);
    return () => {
      window.removeEventListener("load", getOrder);
    };
  }, [data]);
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = await axios.post(
        "/orders",
        {
          product_id: flowerRef.current.id * 1,
          count: countRef.current.value * 1 
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      alert(productData.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Header/>
      <div className="cart">
        <h4>You cart</h4>
        <div className="you_cart">
          <form onSubmit={addProduct}>
            <select>
              {data.map((res) => {
                return (
                  <option id={res.product_id} ref={flowerRef} key={res.product_id}>
                    {res.name}
                  </option>
                );
              })}
            </select>
            <input
              ref={countRef}
              type="text"
              name="count"
              placeholder="Count"
              required
            />
            <button type="submit">Buyurtma berish</button>
          </form>
        </div>
      </div>
      <h2>Zakaz berilganlari</h2>
      <Order />
    </div>
  );
}

export default Cart;

// Headers: localStorage.getItem('token'),
//         product_id: flowerRef.current.id,
//         count: countRef.current.value,
