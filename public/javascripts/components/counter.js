var React = require("react");

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.count || 1 };
    }

    increment() {
        let newCount = this.state.count + 1;
        this.setState({ count: newCount });
    }

    decrement() {
        let newCount = this.state.count - 1;
        this.setState({ count: newCount });
    }

    componentDidMount() {
        fetch("/api/count")
            .then(r => {
                return r.json();
            })
            .then(data => {
                this.setState({ count: data.count });
            });
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.decrement.bind(this)}>
                    -
                </button>
                <span
                    style={{
                        width: "75px",
                        display: "inline-block",
                        textAlign: "center",
                        fontWeight: "bold"
                    }}
                >
                    {this.state.count}
                </span>
                <button className="button" onClick={this.increment.bind(this)}>
                    +
                </button>
            </div>
        );
    }
}

export default Counter;
