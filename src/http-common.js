import axios from "axios";

export default axios.create({
    baseURL: "http://103.161.108.4:5500/api",
    // baseURL: "http://localhost:5500/api", //development
    // baseURL: '', //production
    // baseURL: "http://integrator.bondowosokab.go.id:5500/api",
    headers: {
        'Access-Control-Allow-Origin': '*',        
        //     'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json',
    // },
});