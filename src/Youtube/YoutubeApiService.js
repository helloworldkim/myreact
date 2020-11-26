import Axios from 'axios';

const SPRING_API_URL = 'http://localhost:8090/youtube';

class ApiService {

    fetchMovies() {
        return Axios.get(SPRING_API_URL);
    }
    fetchMovieById(id) {
        return Axios.get(SPRING_API_URL + '/' + id);
        // 동일한 방법! 
        // return Axios.get(`${SPRIN_API_URL}/${id}`);
    }
    addMovice(video) {
        return Axios.post(SPRING_API_URL, video);
    }
    removeMovie(id) {
        return Axios.delete(SPRING_API_URL + '/' + id);
    }
}

export default new ApiService();