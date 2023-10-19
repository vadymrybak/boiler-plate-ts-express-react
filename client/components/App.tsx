import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./App.scss";

interface IAppProps {
    name?: string
}

class App extends React.Component<IAppProps, { count: number }> {
    constructor(props: IAppProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { count: 0 };
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="appContainer">
                <h1>Isomorphic React Application</h1>
                <h2>React, NodeJS, ExpressJS, Typescript, MobX</h2>
                <h1>hey {this.props.name}!</h1>
                <button onClick={this.handleClick}>Clicks: {this.state.count}</button>
            </div>
        );
    }
}

export default withStyles(styles)(App);
