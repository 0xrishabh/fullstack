import axios from 'axios'

const baseURL = "http://localhost:3001/persons"

const create = (contact) => {
    return axios.post(baseURL, contact)
}

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const update = (id,newContactObject) => {
    console.log(id,newContactObject)
    return axios.put(`${baseURL}/${id}`, newContactObject)
}

const destroy = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}
const contact = { 
    getAll: getAll, 
    create: create, 
    update: update,
    delete: destroy
}
export default contact