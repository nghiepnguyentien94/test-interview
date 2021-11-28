import React from "react";

class LineItems extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <>
                <td>{item.name}</td>
                <td className="align-right">
                    {item.quantity}
                </td>
                <td className="align-right">
                    {item.price}
                </td>
            </>
        );
    }
}

export default LineItems;