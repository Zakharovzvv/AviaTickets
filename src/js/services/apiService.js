import axios from 'axios';
import config from "../config/apiConfig";

class Api {
    constructor(config) {
        this.url=config.url;
    }

    async countries(){
        try {
            const response=axios.get(`${this.url}/countries`);
            return (await response).data;
        }catch (e) {
          console.log(e);
          return Promise.reject(e);
        }
    }
    async cities(){
        try {
            const response=axios.get(`${this.url}/cities`);
            return (await response).data;
        }catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
    async airlines(){
        try {
            const response=axios.get(`${this.url}/airlines`);
            return (await response).data;
        }catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }
    async prices(params){
        try {
            const response=axios.get(`${this.url}/prices/cheap`,{params,});
            return (await response).data;
        }catch (e) {
            console.log(e);
            return Promise.reject(e);
        }
    }

}

const api=new Api(config);

export default api;