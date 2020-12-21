import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import ProductContextProvider from './Global/ProductContext';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cart from './Components/Cart';
import CartContextProvider from './Global/CartContext';
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
        
        <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        </Switch>
        </Router>
        </CartContextProvider>
        </ProductContextProvider>
    </div>
  );
}

export default App;
