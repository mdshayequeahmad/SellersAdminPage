import React from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import TotalPrice from './components/TotalPrice';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div style={{ marginTop: "25px" }}>
        <AddProductForm />
      </div>
      <h2>Products</h2>
      <ProductList />
      <TotalPrice />
    </AppProvider>
  )
}

export default App;