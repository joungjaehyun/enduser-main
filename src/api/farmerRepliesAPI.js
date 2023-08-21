import axios from "axios"
import {API_URL} from "../api/ConsumerAPI"

const url = 'http://192.168.0.74:8080'

export const getRepliesOfBoard = async (bno, page = 1, last = false) => {

  console.log("farmer api:"+ bno)

    const res = await axios.get(`${API_URL}/api/replies/${bno}/list?page=${page}&last=${last}`)

    console.log("res.data:"+res.data)
  
    return res.data
  
  }
  
  export const postReply = async (reply) => {
  
    const res = await axios.post(`${API_URL}/api/replies/` , reply)
  
    return res.data
  
  }
  
  export const getReply = async (rno) => {
  
    const res = await axios.get(`${API_URL}/api/replies/${rno}`)
  
    return res.data
  
  }
  
  export const deleteReply = async (rno) => {
  
    const res = await axios.delete(`${API_URL}/api/replies/${rno}`)
  
    return res.data
  }
  
  export const putReply = async (reply) => {
  
    const res = await axios.put(`${API_URL}/api/replies/${reply.rno}`, reply)
  
    return res.data
  
  }