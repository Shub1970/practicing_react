import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";

export function FunctionStateClock() {
  //use hook to store date
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const ti = new Date().toLocaleTimeString();
      setTime(ti);
    };
    const st = setInterval(update, 1000);
    return () => {
      clearInterval(st);
    };
  }, []);

  return (
    <>
      {/* <h4>{date}</h4> */}
      <h5>{time}</h5>
    </>
  );
}

export class ClassStateClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
    console.log(this.state);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }
  render() {
    return (
      <div>
        <h3>hellow</h3>
        <h5>{this.state.time}</h5>
      </div>
    );
  }
}
