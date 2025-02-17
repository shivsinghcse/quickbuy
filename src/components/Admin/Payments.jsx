import Layout from './Layout';
import { useState } from 'react';
const Payments = () => {
    const [payments, setPayments] = useState([
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
        {
            customerName: 'Ajeet Singh',
            email: 'ajeet@gmail.com',
            mobile: '+91 90323565',
            amount: 5000,
            date: '14-02-2025 05:34:21',
        },
    ]);
    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold text-center underline">
                    Payments
                </h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-600 text-gray-200">
                                <th className="py-4">Customer&apos;s Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => {
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
                                            <div className='flex gap-3 items-center'>
                                                <img
                                                    src="/user.jpg"
                                                    alt="payments image"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div className='flex flex-col justify-center'>
                                                        <span className='font-semibold'>{payment.customerName}</span>
                                                        <small className='text-gray-500'>{payment.date}</small>
                                                </div>
                                            </div>
                                            
                                        </td>
                                        <td>{payment.email}</td>
                                        <td>{payment.mobile}</td>
                                        <td>₹{payment.amount.toLocaleString()}</td>
                                        <td>{payment.date}</td>
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
export default Payments;

