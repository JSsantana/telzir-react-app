import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Title from "./components/Title/Title";
import Form from './containers/Form/Form';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
      <Header />
        <Title />
        <Form />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
