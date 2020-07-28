import React from "react";
import PriceCard from "../../components/PriceCard/PriceCard";
import { Route } from "react-router-dom";
import Title from '../../components/Title/Title'
import  './ResultPage.css'
const ResultPage = (props) => {
  const tarifas = props.tarifas;
  const plano = props.plano;
  return (
    <Route
      path="/result"
      render={() => (
        <div className="result-container">
          {tarifas.map((tarifa) => (
            
            <div>
              <div>
              <Title>Confira o resultado abaixo:</Title>
              </div>
              <PriceCard
                class="card-grey"
                price={tarifa.tarifaNormal}
                title="Sem FaleMais"
                discount="0% de Desconto"
              />
              <PriceCard
                class="card-blue"
                price={tarifa.tarifaFaleMais}
                title={"Com FaleMais "+plano}
              />
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default ResultPage;
