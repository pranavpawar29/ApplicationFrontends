import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path="/products" element={<ProductsPage />}/>
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage />, 
        children:[
          { path: ':productId', element: <ProductDetails />}]
      },
    ],
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
