import Layout from './Layout';
import { useState } from 'react';
const Orders = () => {
    const [orders, setOrders] = useState([
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
        {
            orderId: '#rty4583',
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            product: 'CMF 50',
            amount: 14000,
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            status: 'pending',
        },
    ]);
    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold text-center underline">
                    Orders
                </h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-600 text-gray-200">
                                <th className="py-4">Order Id</th>
                                <th>Customer&apos;s Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className="text-center"
                                        style={{
                                            backgroundColor:
                                                (index + 1) % 2 === 0
                                                    ? '#fff'
                                                    : '#E2E8F0',
                                        }}
                                    >
                                        <td className=' py-4'>{order.orderId}</td>
                                        <td className="capitalize">
                                            {order.customerName}
                                        </td>
                                        <td>{order.email}</td>
                                        <td>{order.mobile}</td>
                                        <td className="capitalize">
                                            {order.product}
                                        </td>
                                        <td>
                                            ₹{order.amount.toLocaleString()}
                                        </td>
                                        <td>{order.date}</td>
                                        <td>
                                            <select className="border border-gray-200 p-1 rounded-md capitalize">
                                                <option value="pending">
                                                    pending
                                                </option>
                                                <option value="processing">
                                                    processing
                                                </option>
                                                <option value="dispatched">
                                                    dispatched
                                                </option>
                                                <option value="delivered">
                                                    delivered
                                                </option>
                                                <option value="returned">
                                                    returned
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default Orders;
