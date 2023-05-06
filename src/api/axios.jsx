import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000"
});



  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUsers = async () => {
  //     try {
  //       const response = await axios.get("/users", {
  //         signal: controller.signal,
  //       });
  //       console.log(response.data);
  //       isMounted && response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getUsers();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // });

  
  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();


  //   addUsers();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // });