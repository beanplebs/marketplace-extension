import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, InputGroup, InputGroupText } from 'reactstrap';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Add New Item</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText> Name </InputGroupText>
                        <Input placeholder="Item Name" />
                    </InputGroup>
                    <InputGroup className="mt-3">
                        <InputGroupText> Listing Price </InputGroupText>
                        <Input placeholder="0.00" />
                    </InputGroup>
                    <InputGroup className="mt-3">
                        <InputGroupText> Description </InputGroupText>
                        <Input placeholder="Item Description" />
                    </InputGroup>
                    <InputGroup className="mt-3">
                        <InputGroupText> Width </InputGroupText>
                        <Input placeholder="0" />
                        <InputGroupText> Height </InputGroupText>
                        <Input placeholder="0" />
                        <InputGroupText> Depth </InputGroupText>
                        <Input placeholder="0" />
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Add Item</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default AddModal;