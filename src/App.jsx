import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/City/CityList.jsx";
import CountryList from "./components/Country/CountryList.jsx";
import City from "./components/City/City.jsx";
import Form from "./components/Form/Form.jsx";
import { CitiesProvider } from "./context/CitiesContext.jsx";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index replace element={<Navigate to="cities" />} />
            <Route path="cities" element={<CityList />} />
            {/*url params*/}
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}




export default App;
