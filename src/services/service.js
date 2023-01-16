// import axios from "axios";
import http from "../http-common";

class ServiceAPI {
    ///////////////development////////////////////
    rekappemilu(data) {
        return http.post('/caripemilih', data)
    }
}

export default new ServiceAPI();