import React from "react";

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = { change: 0 };
	}

	addFun() {
		const { change } = this.state;
		this.setState({ change: change + 1 });
	}

	render() {
		const { change } = this.state
		return (
			<div>
				<h3>Class Component</h3>
				<button type="button" onClick={() => this.addFun()}>Click Here!</button>
				<div>{change}</div>
				<div>hasdfasdsf</div>
			</div>
		);
	}
}

export default Test;
