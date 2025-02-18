import { useState } from 'react';
import Layout from './Layout';

const Category = () => {
    const [category, setCategory] = useState([
        {
            title: "TV's",
        },
        {
            title: 'Mobile',
        },
        {
            title: 'Laptop',
        },
        {
            title: 'Printer',
        },
        {
            title: 'T-Shirt',
        },
        {
            title: 'Shirt',
        },
        {
            title: 'Men',
        },
        {
            title: 'Women',
        },
    ]);
    return (
        <>
            <Layout>
                <div className="md:16 p-8">
                    <div className="md:w-10/12 mx-auto p-7 grid md:grid-cols-4 gap-8">
                        {category.map((cat, index) => {
                            return (
                                <div
                                    key={index}
                                    className="shadow-2xl text-[#159A9C] border-2 border-[#002333] hover:bg-[#DEEFE7] hover:text-[#002333]
                                    hover:border-[#159A9C] rounded-lg"
                                >
                                    <h2 className="text-2xl font-bold py-8 px-6 text-center uppercase cursor-pointer">
                                        {cat.title}
                                    </h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Category;
