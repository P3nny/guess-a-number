import React, { Component } from "react";
import { GuessBox } from "./components/guessBox/GuessBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      secretNumber: Math.floor(Math.random() * 10) + 1 + "",
      guess: "",
    };
  }

  handleGuess = (e) => {
    this.setState({ guess: e.target.value });
  };

  render() {
    let { guess, secretNumber } = this.state;
    console.log(guess, secretNumber);

    return (
      <div className="App">
        <h1>Guess a number between 1 and 10</h1>
        <GuessBox handleChange={this.handleGuess} placeholder="Your guess" />
        <p>{guess}</p>
        <div>
          {!guess && <h2>What do you think?</h2>}
          {guess && guess > secretNumber && (
            <h2>The secret number is smaller.</h2>
          )}
          {guess && guess < secretNumber && (
            <h2>The secret number is bigger.</h2>
          )}
          {guess === secretNumber && <h2>Yay!</h2>}
        </div>
      </div>
    );
  }
}

export default App;
