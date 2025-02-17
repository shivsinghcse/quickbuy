import Layout from './Layout';
import { useState } from 'react';
const Products = () => {
    const [products, setProducts] = useState([
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 58,
            image: '/products/shirt1.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt2.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt3.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt4.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt5.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt6.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt7.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt8.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt9.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt10.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt11.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt12.jpg',
        },
        {
            title: "Men's Shirt",
            description: 'Cotton Slim Fit Casual Shirt',
            price: 2099,
            discount: 45,
            image: '/products/shirt13.jpg',
        },
    ]);

    return (
        <>
            <Layout>
                <div>
                    <h1 className="text-xl font-semibold text-center underline mb-8">
                        Products
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-15">
                        {products.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" bg-white  shadow-lg hover:cursor-pointer hover:scale-110 duration-300"
                                >
                                    <img
                                        src={product.image}
                                        alt="shirt"
                                        className="rounded-t-md "
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold">
                                            {product.title}
                                        </h2>
                                        <h2 className="text-gray-600 text-sm">
                                            {product.description.length > 40
                                                ? product.description.slice(
                                                      0,
                                                      50
                                                  ) + '...'
                                                : product.description}
                                        </h2>
                                        <h2 className="flex gap-1 items-center">
                                            <span className="font-bold">
                                                ₹&nbsp;
                                                {product.price - Math.round(
                                                    product.price *
                                                        (product.discount / 100)
                                                )}
                                            </span>
                                            <span className="line-through text-gray-500 text-sm">
                                                ₹&nbsp;{product.price}
                                            </span>
                                            <span className="text-red-400 overflow-hidden text-[12px]">
                                                ({product.discount}% OFF)
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Products;
