//este archivo sustituirá al archivo App.js en el index.js de nuestra aplicación, en él haremos la configuración y la gestión de nuestras rutas:

// si queremos proveer a toda nuestra aplicación de rutas tenemos que posicionar al componente BrowserRouter como el componente padre de todas nuestras rutas

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  const LoginPage = () => <h1>Login</h1>
  const AdminPage = () => <h1>Admin</h1>;
  const ChefPage = () => <h1>Chef</h1>;
  const WaiterPage = () => <h1>Waiter</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
          <Route path="admin" element={<AdminPage />}></Route>
          <Route path="chef" element={<ChefPage />}></Route>
          <Route path="waiter" element={<WaiterPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;