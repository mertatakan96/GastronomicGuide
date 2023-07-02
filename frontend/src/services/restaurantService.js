import axios from "axios"

export default class RestaurantService{

    getRestaurants(){
        return axios.get("http://localhost:8080/api/restaurants/getall")
    }

    getByCity(city){
        return axios.get("http://localhost:8080/api/restaurants/getByCity/?city=" + city)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/restaurants/getById/?id=" + id)
    }

    getCities(){
        return axios.get("http://localhost:8080/api/restaurants/cities")
    }

}