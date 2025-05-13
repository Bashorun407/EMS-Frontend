import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employee/allEmployees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

// export const listEmployee = () => {
//     return axios.get(REST_API_BASE_URL);
// }

// or without curly braces
// export const listEmployeez = () => axios.get(REST_API_BASE_URL);