import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, UncontrolledTooltip } from 'reactstrap';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    formatPrice(value) {
        return "$" + value.toFixed(0);
    }
    
    getListedProfit() {
        return "+" + this.formatPrice(this.props.listedPrice - this.props.purchasedPrice);
    }



    onSelect() {
        console.log(`Selected item: ${this.props.name}`);
    }

    render() {

        return (
            <ListGroupItem action={true} tag="button" onClick={() => this.onSelect()}>
                <ListGroupItemHeading>{this.props.name}</ListGroupItemHeading>
                <ListGroupItemText>
                    <Badge color="secondary" pill>{"Listed: " + this.formatPrice(this.props.listedPrice)}</Badge>
                    <Badge id="profit" color="success" pill>
                        {this.getListedProfit()}
                        
                    </Badge>
                </ListGroupItemText>
            </ListGroupItem>
        )
    }
}

export default Item