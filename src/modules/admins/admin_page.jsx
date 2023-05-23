import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import "./admin_page.css";
import axios from "../../api/axios";
import AdminOrder from "./admin_order/admin_order";

function AdminPage() {
  if (!localStorage.getItem("token")) {
    window.location.href = "/admin/login";
  }

  // const nameRef = useRef();
  // const priceRef = useRef();
  // const descRef = useRef();
  // const imgLinkRef = useRef();
  // const shopRef = useRef();

  const [data, setData] = useState([]);

  const getShops = async () => {
    try {
      const fetchData = await axios.get("/shops");
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("load", getShops);
    return () => {
      window.removeEventListener("load", getShops);
    };
  }, [data]);

  const [formValue, setformValue] = useState({
    name: "",
    price: "",
    desc: "",
    shop_id: "",
    img_link: "",
  });

  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
      [e.target.files]: e.target.files,
    });
    // console.log(formValue.name);
  };

  const formData = new FormData();

  const addProduct = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // console.log(formValue.name);
    // console.log(formData.append("name", formValue.name));
    formData.append("name", formValue.name);
    formData.append("price", formValue.price * 1);
    formData.append("desc", formValue.desc);
    formData.append("shop_id", formValue.shop_id * 1);
    formData.append("img_link", formValue.img_link[0]);

    // console.log(formData.append("name", nameRef.current.value));
    // console.log(formData.append("img_link", imgLinkRef.current.files[0]));
    // formData.append("name", nameRef.current.value[0]);
    // formData.append("price", priceRef.current.value * 1);
    // formData.append("desc", descRef.current.value);
    // formData.append("shop_id", shopRef.current.value * 1);
    // formData.append("img_link", imgLinkRef.current.files[0]);

    try {
      const productData = await axios.post("/products", {
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(productData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="admin_page">
        <div className="admin_page_add">
          <form className="addForm" onSubmit={addProduct}>
            <input
              onChange={handleChange}
              required
              // ref={nameRef}
              type="text"
              name="name"
              placeholder="name"
              value={formValue.name}
            />
            <input
              onChange={handleChange}
              required
              // ref={priceRef}
              type="text"
              name="price"
              placeholder="price"
              value={formValue.price}
            />
            <input
              onChange={handleChange}
              required
              // ref={descRef}
              type="text"
              name="desc"
              placeholder="description"
              value={formValue.desc}
            />
            <input
              onChange={handleChange}
              required
              // ref={imgLinkRef}
              type="file"
              name="img_link"
              placeholder="img_link"
              value={formValue.files}
            />
            <select>
              {data.map((res) => {
                return (
                  <option
                    onChange={handleChange}
                    // ref={shopRef}
                    id={res.id}
                    key={res.id}
                    value={formValue.shop_id}
                  >
                    {res.name}
                  </option>
                );
              })}
            </select>
            <button type="submit">added</button>
          </form>
        </div>
        <div>
          <h2>Zakaz berganlar</h2>
          <AdminOrder />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
