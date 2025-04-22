import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employee/allEmployees';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}


// or without curly braces
// export const listEmployeez = () => axios.get(REST_API_BASE_URL);