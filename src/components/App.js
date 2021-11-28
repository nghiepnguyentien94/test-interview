import React from "react";
import axios from "axios";
import Order from "./Order";
import fakeData from "../fake-data";
import '../css/app.css';
class App extends React.Component {
    state = {
        orders: [] // all ordered orders
    }

    componentDidMount() {
        let orders = fakeData;
        this.setState({ orders });
    }

    renderOrder = (orders)=>{
        return orders.map((order)=>{
            return <Order order = {order} key = {order.id}/>
        })
    }

    render() {
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