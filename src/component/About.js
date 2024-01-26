import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("parent ComponentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>

        <UserClass name={"First (class) "} location={"mumbai"} />
        <UserClass name={"Second (class) "} location={"Pune"} />
        <UserClass name={"third (class) "} location={"Goa"} />
      </div>
    );
  }
}

/*
-parent constructor
-parent render
  -first constructor
  -first render

  -first constructor
  -first render

  -first constructor
  -first render

  <Dom updated - in single batch>

  -First componentDidMount
  -second componentDidMount
  -third componentDidMount

  -parent componentDidMount

*/
export default About;
