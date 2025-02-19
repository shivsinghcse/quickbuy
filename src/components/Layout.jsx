import { useState } from 'react';
import { Link, useLocation } from 'react-router';
const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const [drawerSize, setDrawerSize] = useState(0);

    const menus = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Products',
            path: '/products',
        },
        {
            label: 'Category',
            path: '/category',
        },
        {
            label: 'Contact us',
            path: '/contact',
        },
    ];
    return (
        <>
            <div>
                <nav className="shadow-lg bg-white sticky top-0 left-0 z-99">
                    <div className="w-10/12 mx-auto flex justify-between items-center">
                        <Link to="/">
                            <img src="/logo.png" alt="logo" className="w-32" />
                        </Link>
                        <button
                            className="text-2xl hover:cursor-pointer"
                            onClick={() => {
                                drawerSize === 0
                                    ? setDrawerSize('50vw')
                                    : setDrawerSize(0);
                            }}
                        >
                            <i className="ri-menu-fill md:hidden"></i>
                        </button>
                        <ul className="md:flex justify-center items-center gap-4 hidden">
                            {menus.map((menu, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            to={menu.path}
                                            // style={{
                                            //     backgroundColor:
                                            //         menu.path === pathname
                                            //             ? '#159A9C'
                                            //             : '#fff',
                                            //     color:
                                            //         menu.path === pathname
                                            //             ? '#fff'
                                            //             : '#002333',
                                            // }}
                                            className="block h-full text-[#002333] font hover:bg-[#159A9C] w-24 text-center py-5 hover:text-[#FFFFFF] hover:font-semibold "
                                        >
                                            {menu.label}

                                            {/* hover:border-b-2 border-[#002333]  */}
                                        </Link>
                                    </li>
                                );
                            })}
                            {/* <Link
                                to="/login"
                                className="block hover:bg-[#159A9C] w-24 text-center py-5 hover:text-white"
                            >
                                Login
                            </Link> */}
                            <Link
                                to="/signup"
                                className="block bg-[#159A9C] text-white py-2 px-5  hover:bg-white  text-center  hover:text-[#002333] font-semibold border-2 border-[#159A9C]"
                            >
                                Signup
                            </Link>
                        </ul>
                    </div>
                </nav>
                <div>{children}</div>
                <footer className="bg-[#159A9c] p-8">
                    <div className="md:w-10/12 mx-auto grid md:grid-cols-3 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold text-[#fff] mb-5 underline underline-offset-8">
                                Brand Details
                            </h2>
                            <p className="text-gray-100 mb-5 text-justify">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias cumque laborum, id
                                corporis blanditiis eum eos, quis temporibus,
                                sequi qui quisquam libero iste rerum quam
                                consectetur velit sapiente nulla. Modi!
                            </p>
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="w-32"
                                />
                            </Link>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#fff] mb-5 underline underline-offset-8">
                                Website Links
                            </h2>

                            <ul>
                                {menus.map((menu, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                to={menu.path}
                                                className="text-gray-200 font hover:text-[#FFFFFF] hover:font-semibold hover:underline hover:underline-offset-4"
                                            >
                                                {menu.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#fff] mb-5 underline underline-offset-8">
                                Brand Details
                            </h2>
                            <p className="text-gray-100 mb-5 text-justify">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias cumque laborum, id
                                corporis blanditiis eum eos, quis temporibus,
                                sequi qui quisquam libero iste rerum quam
                                consectetur velit sapiente nulla. Modi!
                            </p>
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="w-32"
                                />
                            </Link>
                        </div>
                    </div>
                </footer>

                {/* nav for mobile  */}

                <div
                    className="bg-[#002333] h-screen fixed top-0 left-0 z-99 duration-300 overflow-hidden"
                    style={{
                        width: drawerSize,
                    }}
                >
                    <button
                        className="text-[#DEEFE7] text-2xl mx-6 my-3 hover:cursor-pointer font-extrabold"
                        onClick={() => {
                            drawerSize === 0
                                ? setDrawerSize('50vw')
                                : setDrawerSize(0);
                        }}
                    >
                        <i className="ri-close-large-line"></i>
                    </button>
                    <ul className="flex flex-col">
                        {menus.map((menu, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={menu.path}
                                        className="block text-[#DEEFE7] font-semibold border-b-1 border-[#DEEFE7] hover:bg-[#159A9C] pl-6 py-2 hover:text-[#FFFFFF] hover:font-semibold duration-300"
                                    >
                                        {menu.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <Link
                            to="/login"
                            className="block text-[#DEEFE7] font-semibold border-b-1 border-[#DEEFE7] hover:bg-[#159A9C] pl-6 py-2 hover:text-[#FFFFFF] hover:font-semibold "
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="block text-[#DEEFE7] font-semibold border-b-1 border-[#DEEFE7] hover:bg-[#159A9C] pl-6 py-2 hover:text-[#FFFFFF] hover:font-semibold "
                        >
                            Signup
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Layout;
