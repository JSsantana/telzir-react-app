import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import "./Form.css";
import { calculaTarifa } from "../../services/calculaTarifa/calculaTarifa";
import Button from "../../components/Button/Button";
import ResultPage from "../Result/ResultPage";
import Title from "../../components/Title/Title";

function Form() {
  const [plano, setPlano] = useState("");
  const alteraPlano = (event) => {
    setPlano(event.target.value);
    console.log(plano);
  };

  let minutos;

  const alteraMinutos = (event) => {
    minutos = event.target.value;
  };

  const origem = [{ ddd: 11 }, { ddd: 16 }, { ddd: 17 }, { ddd: 18 }];

  const [destino, setDestino] = useState([]);

  function alteraDestino() {
    let dddOrigem = document.getElementById("ddd-origem").value;

    if (dddOrigem == 11) {
      setDestino([{ddd: 16 }, { ddd: 17 }, { ddd: 18 }]);
    }

    if (dddOrigem == 16 || dddOrigem == 17 || dddOrigem == 18)
      setDestino([{ ddd: 11 }]);
  }

  const [tarifas, setTarifas] = useState([
    { tarifaNormal: 0, tarifaFaleMais: 0 },
  ]);

  let history = useHistory();

  const handleCalculaTarifa = (event) => {
    setTarifas([calculaTarifa()]);
    history.push({ pathname: "/result" });
  };

  return (
    <Route
      path="/"
      render={() => (
        <div className="main-container">
          <Title> Conheça as vantagens do nosso novo plano
      <em className="title-primary"> FaleMais</em></Title>
          <div className="form-container">
            <Title><em>Calcule aqui sua nova tarifa</em></Title>
            <form className="main-form">
              <div>
                <label>de (DDD)</label>
                <select id="ddd-origem" onChange={alteraDestino} required>
                  <option>Selecione</option>
                  {origem.map((origem) => {
                    return <option key={origem.ddd}>{origem.ddd}</option>;
                  })}
                </select>
              </div>
              <div>
                <label>para (DDD)</label>
                <select id="ddd-destino" required>
                  <option>Selecione</option>
                  {destino.map((destino) => {
                    return <option key={destino.ddd}>{destino.ddd}</option>;
                  })}
                </select>
              </div>
              <div>
                <label>Plano</label>
                <select id="plano" onChange={alteraPlano}>
                  <option>Selecione</option>
                  <option value={30}>FaleMais30</option>
                  <option value={60}>FaleMais60</option>
                  <option value={120}>FaleMais120</option>
                </select>
              </div>
              <div>
                <label>Tempo (Em minutos)</label>
                <input
                  id="minutos"
                  onChange={alteraMinutos}
                  type="number"
                ></input>
              </div>
              <Button action={handleCalculaTarifa}>Calcular Tarifa</Button>
            </form>
          </div>
          <div>
            <ResultPage plano={plano} tarifas={tarifas} />
          </div>
        </div>
      )}
    />
  );
}
export default Form;
