import axios from "axios";

const API = {
    //gets all users
    getUsers: function() {
        return axios.get('https://randomuser.me/api/?results=55&seed=seed');
    }
};
export default API;