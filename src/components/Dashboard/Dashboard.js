import React, {Component} from "react";
import axios from "axios";
import store, {UPDATE_INVENTORY} from "../../the_mighty_ducks/store";
import {} from "react-router-dom"


//components
import Product from "../Product/Product";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = {
            inventory: reduxState.inventory
        }
    }

    componentDidMount() {
        this.getInventory();
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({ inventory: reduxState.inventory})
        })
    }

    getInventory = () => {
        axios.get('/api/inventory')
            .then(response => {
                store.dispatch({
                    type: UPDATE_INVENTORY,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    removeProduct = (id) => {
        axios.delete(`/api/inventory/${id}`)
            .then(response => {
                store.dispatch({
                    type: UPDATE_INVENTORY,
                    payload: response.data
                });
            }).catch(error => {
                console.log(error.response);
            })
    };

    render() {
        console.log(this.state.inventory);
        const {inventory} = this.state;
        let mappedInventory = inventory.map((val, i) => {
            return(
                <Product inventory={inventory} product={val} key={i} removeProduct={this.removeProduct} />
            )
        })
        console.log(mappedInventory);
        return(
            <div>
                <div>Dashboard</div>
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;