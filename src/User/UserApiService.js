import axios from 'axios';

const API_URL = 'http://localhost:8090/users'; //spring boot 접속 url

class UserApiService {


    fetchUsers() {
        return axios.get(API_URL);
    }

    fetchUserByID(id) {
        return axios.get(API_URL + '/' + id);
    }

    addUser(user) {
        return axios.post(API_URL, user);
    }

    editUser(user) {
        return axios.put(API_URL + '/' + user.id, user);
    }

    deleteUser(id) {
        return axios.delete(API_URL + '/' + id);
    }


}

export default new UserApiService();