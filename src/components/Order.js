import React from "react";
import Item from "./Item";

class Order extends React.Component {
    // render all item order
    renderItems = (items) => {
        return items.map((item, index) => {
            if (index === 0) { // Merge order's item rows if it is the 1st row of a order
                return (
                    <tr key={index}>
                        <td rowSpan={items.length}>
                            {this.props.order.id}
                        </td>
                        <Item item={item} />
                    </tr>
                )
            } else {
                return (
                    <tr  key={index}>
                        <Item item={item}/>
                    </tr>
                )
            }
        })

    }

    render() {
        const { line_items } = this.props.order;
        return (
            <>
                {this.renderItems(line_items)}
            </>
        );
    }
}

export default Order;