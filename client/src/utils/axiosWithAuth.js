// imports 
import axios from "axios"

// function 
function axiosWithAuth() {
    const token = localStorage.getItem('token')

    return axios.create({
        baseurl: `http://localhost:5000/api/`,
        headers: {
            authorization: `${token}`
        }
    })
}

// export 
export default axiosWithAuth