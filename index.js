const axios = require("axios");
setInterval(() => {
  axios.get("https://minitwitterbackend-p4lv.onrender.com/test").then((res) => {
    console.log(res.data);
  });
}, 5000);
