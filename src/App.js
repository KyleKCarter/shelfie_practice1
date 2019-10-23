import React, {Component} from "react";

//components
import Header from "./components/Header/Header";

class App extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div>
                <Header />
            </div>
        )
    }

}

export default App;