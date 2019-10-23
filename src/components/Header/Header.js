import React, { Component } from "react";
import {HashRouter, Link} from "react-router-dom";

//components
import routes from "../../routes";

export default class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
           <HashRouter>
               <div>
                   <Link className='links' to='/' >Store</Link>
                   <Link className='links' to='/add' >Add</Link>
                   <Link className='links' to='/edit/:id'>Cart</Link>
                   {routes}
               </div>
           </HashRouter>
        )
    }
}