import Layout from './Layout';
import { useState } from 'react';

const Product = () => {
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
            image: '/products/shirt13.jpg',
        },
    ]);
    return (
        <>
            <Layout>
                <div className="p-12">
                    <h1 className="text-3xl font-bold text-center">
                        Our Product
                    </h1>
                    <p className="text-gray-600 text-center w-7/12 mx-auto mt-2 mb-16">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Possimus asperiores nobis exercitationem error
                        officia voluptatem iste.
                    </p>

                    <div className="w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-15">
                        {products.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" bg-white  shadow-lg hover:cursor-pointer "
                                >
                                    <img
                                        src={product.image}
                                        alt="shirt"
                                        className="rounded-t-md hover:scale-95 duration-300"
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
                                                {product.price -
                                                    Math.round(
                                                        product.price *
                                                            (product.discount /
                                                                100)
                                                    )}
                                            </span>
                                            <span className="line-through text-gray-500 text-sm">
                                                ₹&nbsp;{product.price}
                                            </span>
                                            <span className="text-red-400 overflow-hidden text-[12px]">
                                                ({product.discount}% OFF)
                                            </span>
                                        </h2>
                                        <button className="border-2 border-[#159A9C] py-2 mt-3 font-semibold hover:cursor-pointer hover:bg-[#159A9C] hover:text-white text-[#159A9C] w-full">
                                            <i className="ri-shopping-cart-fill mr-2 "></i>
                                            Add to cart
                                        </button>
                                        <button className="border-2 border-[#159A9C]  py-2 mt-3 font-semibold hover:cursor-pointer bg-[#159A9C] text-white w-full">
                                            Buy Now
                                        </button>
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

export default Product;
