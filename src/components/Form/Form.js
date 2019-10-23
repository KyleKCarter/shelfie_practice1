import React, { Component } from "react";
import axios from "axios";
import store, { UPDATE_IMAGE, UPDATE_NAME, UPDATE_PRICE } from "../../the_mighty_ducks/store";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            name: '',
            price: 0,
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addProduct = () => {
        const {image, name, price} = this.state;
        axios.post('/api/inventory', {
            image,
            name,
            price
        }).then(response => {
            store.dispatch({
                type: UPDATE_IMAGE,
                payload: response.data.image
            })
            store.dispatch({
                type: UPDATE_NAME,
                payload: response.data.name
            })
            store.dispatch({
                type: UPDATE_PRICE,
                payload: response.data.price
            })
        }).catch(error => {
            console.log(error);
        })
    }

    handleClearFields = () => {
        this.setState({
            image: '',
            name: '',
            price: 0
        });
    }

    render() {
        const {image, name, price} = this.state;
        return (
            <div>
                <div>Form</div>
                <form>
                    <input onChange={this.handleChange} value={image} name='image' />
                    <input onChange={this.handleChange} value={name} name='name' />
                    <input onChange={this.handleChange} value={price} name='price' />
                    <button onClick={this.handleClearFields}>Cancel</button>
                    <button onClick={this.addProduct}>Add</button>
                </form>
                
            </div>
        )
    }
}