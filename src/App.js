import React, { Component } from 'react';
import { Todo } from './todo';

// Это входной компонент приложения, на который мы помещаем наш компонент Todo, что бы он появился на странице

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
