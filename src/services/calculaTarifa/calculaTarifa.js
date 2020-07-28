export function calculaTarifa() {
  let dddOrigemInput = document.getElementById("ddd-origem").value;
  let dddDestinoInput = document.getElementById("ddd-destino").value;
  let plano = document.getElementById("plano").value;
  let minutos = document.getElementById("minutos").value;

  const tarifas = [
    { dddOrigem: "11", dddDestino: "16", tarifaMinuto: 1.9 },
    { dddOrigem: "16", dddDestino: "11", tarifaMinuto: 2.9 },
    { dddOrigem: "11", dddDestino: "17", tarifaMinuto: 1.7 },
    { dddOrigem: "17", dddDestino: "11", tarifaMinuto: 2.7 },
    { dddOrigem: "11", dddDestino: "18", tarifaMinuto: 0.9 },
    { dddOrigem: "18", dddDestino: "11", tarifaMinuto: 1.9 },
  ];

  let getTarifaMinuto = tarifas.filter(
    (tarifa) =>
      tarifa.dddOrigem === dddOrigemInput &&
      tarifa.dddDestino === dddDestinoInput
  );

  let tarifaMinuto = getTarifaMinuto[0].tarifaMinuto;

  let tarifaNormal = minutos * tarifaMinuto;

  let tarifaFaleMais = minutos - tarifaNormal;

  let tempoCobrado = minutos - plano;

  tarifaFaleMais = tempoCobrado * tarifaMinuto;

  if (tarifaFaleMais <= 0) {
    tarifaFaleMais = 0;
  }

  tarifaFaleMais = tarifaFaleMais + (tarifaFaleMais * 10) / 100;

  console.log("Tempo Cobrado: " + tempoCobrado);
  console.log("Tarifa Normal: " + tarifaNormal);
  console.log("Tarifa Minuto: " + tarifaMinuto);
  console.log("Tarifa FaleMais: " + tarifaFaleMais);

  const NovaTarifa = {
    tarifaNormal,
    tarifaFaleMais,
  };

  return (NovaTarifa);
}
