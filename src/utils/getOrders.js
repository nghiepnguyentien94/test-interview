import axios from 'axios';
import fakeData from '../fake-data';

let getOrders = (url,mode)=>{
    if(mode==="development"){
        let foo = async () =>{
            return fakeData;
        }
        return foo();
    }else{
        return axios.get(url);
    }

}

export default getOrders;