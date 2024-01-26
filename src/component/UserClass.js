import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    this.state = {};
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child component did mount");

    // API call
    const data = await fetch("  https://api.github.com/users/RutujaKum20");
    const json = await data.json();

    console.log(json);
  }

  render() {
    const { name, location } = this.props;

    console.log(this.props.name + "child render");
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button>
        <h2>name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact : {name}@test.com</h4>
      </div>
    );
  }
}

export default UserClass;
