// imports 
import axios from "axios"

// function 
function axiosWithAuth() {
    const token = localStorage.getItem('token')
    console.log(token)
    return axios.create({
        baseURL: `http://localhost:5000`,
        headers: {
            authorization: token
        }
    })
}

// export 
export default axiosWithAuth