import axios from "axios"

export const userLoader = async() =>{
    return axios.get("https://jsonplaceholder.typicode.com/users")
}