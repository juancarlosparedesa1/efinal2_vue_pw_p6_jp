import axios from "axios";

//creamos metodos
const guardar = (bodyVehiculo) => {
  const data = axios.post(`http://localhost:8080/API/1.0/Consesionario/vehiculos`, bodyVehiculo).then.then(r => r.data);
  return data;
}

const consultaTotal = async () => {
  const data = axios
    .get("http://localhost:8080/API/v1.0/Consesionario/vehiculos")
    .then(r => r.data);
  return data;
};

const consultaUnica = (placa) => {
  const data = axios
    .get(`http://localhost:8080/API/v1.0/Consesionario/vehiculos/${placa}`)
    .then(r => r.data);
  return data;
};

//METODOS FACHADA
export const consultaTotalFachada = async () => {
  return await consultaTotal();
};

export const consultaUnicaFachada = async (placa) => {
  return await consultaUnica(placa);
};
export const guardarFachada = async (bodyVehiculo) => {
  return await guardar(bodyVehiculo);
};