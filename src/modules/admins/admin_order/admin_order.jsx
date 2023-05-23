import axios from "../../../api/axios";
import { useEffect, useState } from "react";

function AdminOrder() {
  const [data, setData] = useState([]);

  const getOrder = async () => {
    try {
      const fetchData = await axios.patch("/orders", {
        headers: {
          token: localStorage.getItem("token")
        }
      });
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

  return (
    <div className="orders">
      {data.map((res) => {
        return (
          <div key={res.id} className="order_card">
            <img
              src={"http://localhost:5000/" + res.Products[0]?.img_link}
              alt=""
            />
            <div>
              <h3>username: {res.Users[0]?.username}</h3>
              <h3>contact: {res.Users[0]?.contact}</h3>
              <h4>name: {res.Products[0]?.name}</h4>
              <p>Price: {res.Products[0]?.price}</p>
              <b>Count: {res.count}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminOrder;
