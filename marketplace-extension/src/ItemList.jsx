import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Item from './Item';
import { ListGroup } from 'reactstrap';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

    return (
        <ListGroup>
            {this.props.items.map((item, index) => (
                <Item key={index} 
                    name={item.name} 
                    description={item.description}
                    purchasedPrice={item.purchasedPrice} 
                    listedPrice={item.listedPrice} 
                />
            ))}
        </ListGroup>
    )
    }
}

export default ItemList