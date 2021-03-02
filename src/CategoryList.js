import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}