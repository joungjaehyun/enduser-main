import axios from "axios"
import { createSearchParams } from "react-router-dom"

const API_URL="http://apiserver-env.eba-mvimwyru.ap-northeast-2.elasticbeanstalk.com"
const url = 'http://192.168.0.74:8080'
// const url = 'http://192.168.0.48:8080'
// const url = 'http://loaclhost:8080'

// list.
export const getCunsumerList = async (queryObj) => {

    const queryString = createSearchParams(queryObj).toString();
  
    const res = await axios.get(`${API_URL}/api/board/list?${queryString}`)
  
    return res.data

}

export const getOne = async (bno) => {

    const res = await axios.get(`${API_URL}/api/board/${bno}`)

    return res.data

}


export const deleteBoard = async (bno) => {

  const res = await axios.delete(`${API_URL}/api/board/${bno}`)
    // const res = await axios.delete(`http://localhost:8080/api/board/${bno}`)
  
    return res.data

}

export const putBoard = async (formData) => {
  
    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await axios.put(`${API_URL}/api/board/`, formData, header)
  
    return res.data

}


export const registBoard = async (FormData) => {

    const header = {
        headers: {
                "Content-Type": "multipart/form-data",
        }
    }
  
    const res = await axios.post(`${API_URL}/api/board/`, FormData, header)
    
    return res.data
  }


export const postBoard = async (formData) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
    const res = await axios.post(`${API_URL}/api/products/`, formData, header)

}

  
export const getFarmerList = async (queryObj) =>{

    const queryString = createSearchParams(queryObj).toString();
    
    const res = await axios.get(`${API_URL}/api/admin/farmer?${queryString}`)
  
    return res.data
    
}

export const getFarmerOne = async (mno) => {

  const res = await axios.get(`${API_URL}/api/admin/read/${mno}`)

  return res.data

}




