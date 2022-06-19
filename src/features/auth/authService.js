import axios from "axios"

const API_URL = '/api/v1/auth/user'

// Register user
const register = async (useData) => {
    const response = await axios.post(API_URL, useData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService