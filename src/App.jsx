import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import PageNotFound from './components/PageNotFound';
import Products from './components/Admin/Products';
import Orders from './components/Admin/Orders';
import Dashboard from './components/Admin/Dashboard';
import Customers from './components/Admin/Customers';
import Payments from './components/Admin/Payments';
import Settings from './components/Admin/Settings';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
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
