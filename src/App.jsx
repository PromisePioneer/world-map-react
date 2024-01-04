import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext.jsx";
import { AuthProvider } from "./context/FakeAuthContext.jsx";

import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/Reusable/SpinnerFullPage.jsx";

// import Homepage from "./pages/Homepage.jsx";
// import Product from "./pages/Product.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";
// import CityList from "./components/City/CityList.jsx";
// import CountryList from "./components/Country/CountryList.jsx";
// import City from "./components/City/City.jsx";
// import Form from "./components/Form/Form.jsx";

const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const CityList = lazy(() => import("./components/City/CityList.jsx"));
const CountryList = lazy(() => import("./components/Country/CountryList.jsx"));
const City = lazy(() => import("./components/City/City.jsx"));
const Form = lazy(() => import("./components/Form/Form.jsx"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  replace
                  element={<Navigate replace to="cities" />}
                />
                <Route path="cities" element={<CityList />} />
                {/*url params*/}
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
