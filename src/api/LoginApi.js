import axios from "axios"
import {API_URL} from "../api/ConsumerAPI"

export const postLogin = async(params) => {

    // json 형식을 문자열로 보낼 때 쓴다.
    let header = {
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        }
    }

  const res = await axios.post(`${API_URL}/api/member/login`, params, header)

    return res.data
  
}


export const modifyMember = async(params) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
  
    console.log("========================================")
    console.log(params);
    console.log("========================================")

  const res = await axios.put(`${API_URL}/api/member/modify`,params , header)

    return res.data
  
}


export const signupMember = async(params) => {

    let header = {
        headers: {
            "content-type": "multipart/form-data",
        }
    }

    console.log("========================================")
    console.log(params);
    console.log("========================================")

  const res = await axios.post(`${API_URL}/api/member`,params,header)

    return res.data
  
}



