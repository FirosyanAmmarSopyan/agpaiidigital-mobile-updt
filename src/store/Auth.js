import * as remx from "remx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./../boot/axios";
import { CLIENT_ID, CLIENT_SECRET } from "./../store/Config";
// states
const initialState = {
  name: "Azwar",
  token: {},
};

// inisialisasi state
const state = remx.state(initialState);

// setters untuk mengubah state
const setters = remx.setters({
  setName: (payload) => (state.name = payload),
  setToken: async (payload) => {
    try {
      await AsyncStorage.setItem("@token", JSON.stringify(payload));
      state.token = payload;
    } catch (e) {
      // saving error
      console.log("Terjadi eror penyimpanan token");
    }
  },
});

// actions
const actions = {
  doFetchData(credential) {
    return new Promise((resolve, reject) => {
      let access = {
        grant_type: "password",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        ...credential,
      };
      api
        .post("/oauth/token", access)
        .then((res) => {
          api.defaults.headers.common.Accept = "application/json";
          api.defaults.headers.common.Authorization = `${res.data.token_type} ${res.data.access_token}`;
          setters.setToken(res.data);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  checkApi() {
    return new Promise((resolve, reject) => {
      api
        .get("/api/v1/users/search/ahsan")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

// getters berfungsi untuk get data
const getters = remx.getters({
  getName: () => state.name,
  getToken: () => {
    // fungsi untuk mengambil access token
    return new Promise((resolve, reject) => {
      // kalau di state tidak ada access token ambil di Storage
      if (!state.token.access_token) {
        AsyncStorage.getItem("@token")
          .then((value) => {
            if (value !== null) {
              // jika di Storage dengan key token ada isinya
              // sekalian isi di state
              setters.setToken(JSON.parse(value));
              // lalu kirimkan hasilnya isi token nya
              resolve(JSON.parse(value));
            } else {
              // kalau data di Storage dengan key token isi nya kosong
              resolve(resolve({}));
            }
          })
          .catch((err) => {
            // jika terjadi error kirim error
            reject(err);
          });
      } else {
        // kalau sudah ada access token di state langsung kirimkan
        resolve(state.token);
      }
    });
  },
});

export default {
  ...getters,
  ...setters,
  ...actions,
};
