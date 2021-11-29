import React from "react";
import axios from "axios";
import Order from "./Order";
import fakeData from "../fake-data";
import '../css/app.css';
import getOrders from "../utils/getOrders";

class App extends React.Component {
    state = {
        orders: [] // all ordered orders
    }

    componentDidMount() {       
        getOrders(process.env.REACT_APP_API_URL,process.env.NODE_ENV).then(res=>{
            if(res.data){
                this.setState({ orders :res.data.orders});
            }
        })   
    }

    renderOrder = (orders)=>{
        return orders.map((order)=>{
            return <Order order = {order} key = {order.id}/>
        })
    }

    render() {
        console.log(process.env);
        return (
            <main>
                <h1>注文一覧</h1>
                <table cellSpacing="0">
                    <thead>
                        <tr>
                            <th>注文ID</th>
                            <th>購入商品名</th>
                            <th className="align-right">点数</th>
                            <th className="align-right">単価</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderOrder(this.state.orders)}
                    </tbody>
                </table>
            </main>
        )
    }
}

export default App;