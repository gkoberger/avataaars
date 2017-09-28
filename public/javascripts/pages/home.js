import React from "react";
import Counter from "../components/counter";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3 className="title">This is a counter built using React.</h3>
                <Counter count={this.props.count} />
            </div>
        );
    }
}

export default HomePage;
