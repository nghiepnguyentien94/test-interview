import axios from 'axios';
import fakeData from '../fake-data';

let getOrders = (url,mode)=>{
    if(mode==="local"){ // return fake data to test
        let foo = async () =>{
            return fakeData;
        }
        return foo();
    }else{
        return axios.get(url);
    }

}

export default getOrders;