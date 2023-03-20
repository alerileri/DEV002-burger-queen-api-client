//este archivo sustituirá al archivo App.js en el index.js de nuestra aplicación, en él haremos la configuración y la gestión de nuestras rutas:

// si queremos proveer a toda nuestra aplicación de rutas tenemos que posicionar al componente BrowserRouter como el componente padre de todas nuestras rutas

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;