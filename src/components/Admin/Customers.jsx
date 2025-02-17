import Layout from './Layout';
import { useState } from 'react';
const Customers = () => {
    const [customers, setCustomers] = useState([
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            date: '14-02-2025 05:34:21',
            address: 'Electronic city, Phase-2, Bengaluru, Kaenatka 560100'
        },
        
    ]);
    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold text-center underline">
                    Customers
                </h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-600 text-gray-200">
                                <th className="py-4">Customer&apos;s Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => {
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
                                        <td className="capitalize px-4 py-2">
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    src="/user.jpg"
                                                    alt="customers image"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div className="flex flex-col justify-center">
                                                    <span className="font-semibold">
                                                        {customer.customerName}
                                                    </span>
                                                    <small className="text-gray-500">
                                                        {customer.date}
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{customer.email}</td>
                                        <td>{customer.mobile}</td>
                                        <td>{customer.date}</td>
                                        <td>{customer.address}</td>
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
export default Customers;
