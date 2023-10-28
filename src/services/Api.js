import axios from "axios";
import Cookies from "js-cookie";


export const authHeader = (isToken) => {
    const token = Cookies.get("token");
    if (isToken) {
      return {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      return {
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  };

export const userLogin = async(data) =>{
try{
    let result = await axios.post('http://localhost:4000/user/login',data);
    console.log(result)
    if(result.status) return result.data;
    else return result
}
catch(error){ 
    return error.response.data;
}
}

export const getVideoFromChennelId = async (data) =>{
    try{
        let result = await axios.post('http://localhost:4000/user/get_channel_details',{channel_id:data}, authHeader(true));
        console.log(result)
        if(result.status) return result.data;       
        else return result
    }
    catch(error){ 
        return error.response.data;
    }
}

export const downloadExcelByChennelId = async(route) =>{
    try{
        let result = await axios.get(route);
        console.log(result)
        if(result.status) return result.data;
        else return result
    }
    catch(error){ 
        return error.response.data;
    }
}

export const getVideoDetail = async (data) =>{
    try{
        let result = await axios.post('http://localhost:4000/user/get_video_details',{video_id:data}, authHeader(true));
        console.log(result)
        if(result.status) return result.data;       
        else return result
    }
    catch(error){ 
        return error.response.data;
    }
}