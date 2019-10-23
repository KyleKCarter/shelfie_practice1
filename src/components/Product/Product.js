import React, { Component } from "react";
import axios from "axios";
import store, { UPDATE_INVENTORY } from "../../the_mighty_ducks/store";

export default class Product extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
            image: "",
            name: "",
            price: 0,
            editStatus: false,
            inventory: reduxState.inventory
        }
    }

    changeEditStatus = () => {
        this.setState({ editStatus: !this.state.editStatus});
    }

    updateHandleChange = e => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    updateProduct = (id) => {
        const {image, name, price} = this.state;
        axios.put(`/api/inventory/${id}`, {
            image,
            name,
            price
        })
        .then(response => {
            store.dispatch({
                type: UPDATE_INVENTORY,
                payload: response.data
            })
            this.changeEditStatus();
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {image, name, price} = this.props.product;
        return (
            <div>
                <div>Product</div>
                <div>
                    <img src={image} alt="product_image" />
                    <h3>Product: {name}</h3>
                    <h4>Price: ${price}</h4>
                    <button onClick={() => this.props.removeProduct(this.props.product.id)}>Delete</button>
                    <button onClick={this.changeEditStatus}>Edit</button>
                    {
                        this.state.editStatus === true
                    ?
                    (
                        <>
                        <input placeholder='Image URL' onChange={this.updateHandleChange} defaultValue={image} name='image' />
                        <input placeholder='Name' onChange={this.updateHandleChange} defaultValue={name} name='name' />
                        <input placeholder='Price' onChange={this.updateHandleChange} defaultValue={price} name='price' />
                        <button onClick={() => this.updateProduct(this.props.product.id)}>Update</button>
                        </>
                    )
                    :
                        null
                    }
                </div>
            </div>
        )
    }
}