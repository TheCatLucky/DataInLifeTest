import * as axios from "axios";

export const tableAPI = {
  getProducts() {
    return axios({
      method:"get",
      url: "https://datainlife.ru/junior_task/get_products.php"
    })
      .then(response =>  response.data);
  },
  sendProducts(formData) {
    return axios({
      method:"post",
      url:" https://datainlife.ru/junior_task/add_basket.php",
      data: formData,
    });
  }
};