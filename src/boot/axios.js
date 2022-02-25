import axios from "axios";
import { API_URL } from "./../store/Config";
import StoreAuth from "./../store/Auth";

const api = axios.create({ baseURL: API_URL });

export default () => {
  console.log("axios booted");
  StoreAuth.getToken().then((token) => {
    if (!!token.access_token) {
      console.log("Access token ditemukan");
      api.defaults.headers.common.Accept = "application/json";
      api.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`;
    } else {
      console.log("Tidak ada Access Token");
    }
  });
};

export { api };
