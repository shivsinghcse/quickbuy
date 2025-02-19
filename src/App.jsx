import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import PageNotFound from './components/PageNotFound';
import Products from './components/Admin/Products';
import Orders from './components/Admin/Orders';
import Dashboard from './components/Admin/Dashboard';
import Customers from './components/Admin/Customers';
import Payments from './components/Admin/Payments';
import Settings from './components/Admin/Settings';
import Home from './components/Home';
import Product from './components/Product';
import './App.css';
import Category from './components/Category';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin">
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="products" element={<Products />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="payments" element={<Payments />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
