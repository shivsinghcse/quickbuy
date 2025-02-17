import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const Layout = ({ children }) => {
    const [size, setSize] = useState('20vw');
    const [mobileSize, setMobileSize] = useState(0);
    const [accountMenu, setAccountMenu] = useState(false);
    const location = useLocation();

    const menus = [
        {
            label: 'Dashbord',
            icon: <i className="ri-dashboard-line mr-3"></i>,
            path: '/admin/dashboard',
        },
        {
            label: 'Customers',
            icon: <i className="ri-user-3-line mr-3"></i>,
            path: '/admin/customers',
        },
        {
            label: 'Products',
            icon: <i className="ri-shopping-bag-3-line mr-3"></i>,
            path: '/admin/products',
        },
        {
            label: 'Orders',
            icon: <i className="ri-shopping-cart-2-line mr-3"></i>,
            path: '/admin/orders',
        },
        {
            label: 'Payments',
            icon: <i className="ri-money-rupee-circle-line mr-3"></i>,
            path: '/admin/payments',
        },

        {
            label: 'Settings',
            icon: <i className="ri-settings-5-line mr-3"></i>,
            path: '/admin/settings',
        },
    ];
    return (
        <>
            {/* desktop  */}
            <div className="md:block hidden">
                <aside
                    className=" h-full bg-slate-600 fixed top-o left-0 duration-300 ease-in-out overflow-hidden"
                    style={{
                        width: size,
                    }}
                >
                    <div className=" flex flex-col  text-gray-100 text-[1.1rem]">
                        {menus.map((menu, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={menu.path}
                                    className="text-gray-100 px-4 py-3 hover:bg-rose-300 hover:text-gray-100 "
                                    style={{
                                        background:
                                            location.pathname === menu.path
                                                ? '#FF637E'
                                                : 'transparent',
                                    }}
                                >
                                    {menu.icon}
                                    {menu.label}
                                </Link>
                            );
                        })}

                        <button className="text-gray-100 px-4 py-3 hover:bg-rose-300 hover:text-gray-100 text-left hover:cursor-pointer">
                            <i className="ri-logout-circle-line mr-3"></i>Logout
                        </button>
                    </div>
                </aside>
                <section
                    className="h-screen duration-300 ease-in-out"
                    style={{
                        marginLeft: size,
                    }}
                >
                    <nav className="bg-white shadow-2xl p-5 flex items-center justify-between sticky top-0 left-0 z-5">
                        <div className="flex gap-3 items-center">
                            <button
                                className="bg-gray-50 hover:bg-slate-500 px-2 py-1 rounded-md hover:text-gray-100 border-1 duration-300 ease-in-out"
                                onClick={() => {
                                    size === 0 ? setSize('20vw') : setSize(0);
                                }}
                            >
                                <i className="ri-menu-fill text-2xl font-bold hover:cursor-pointer"></i>
                            </button>
                            {/* <h1 className=" text-xl font-bold">QuickBuy</h1> */}
                            <img
                                src="/logo.png"
                                alt=""
                                className=" h-10 hover:cursor-pointer"
                            />
                        </div>

                        <div>
                            <button className="border-1 border-indigo-500 w-12 h-12 flex items-center justify-center rounded-full relative ">
                                <i
                                    className="ri-user-3-fill text-3xl text-rose-700 hover:cursor-pointer"
                                    onClick={() => {
                                        setAccountMenu(!accountMenu);
                                    }}
                                ></i>
                                {accountMenu && (
                                    <div className="absolute top-16 -right-4 bg-white shadow-2xl  p-6 overflow-hidden duration-500">
                                        <div>
                                            <h1 className="font-semibold text-lg">
                                                Shiv Singh
                                            </h1>
                                            <p className="text-md text-gray-500">
                                                singhshiv0204@gmail.com
                                            </p>
                                            <div className="h-px bg-gray-300 my-4"></div>
                                            <button className="font-semibold hover:cursor-pointer">
                                                <i className="ri-logout-box-line mx-1 "></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </div>
                    </nav>
                    <div className="p-6">{children}</div>
                </section>
            </div>
            {/* mobile  */}
            <div className="md:hidden block">
                <aside
                    className=" h-full bg-slate-600 fixed top-o left-0 duration-300 ease-in-out overflow-hidden z-10"
                    style={{
                        width: mobileSize,
                    }}
                >
                    <button
                        className="bg-gray-50 hover:bg-slate-500 px-2 py-1 m-5 rounded-md hover:text-gray-100 border-1 duration-300 ease-in-out"
                        onClick={() => {
                            mobileSize === 0
                                ? setMobileSize('100vw')
                                : setMobileSize(0);
                        }}
                    >
                        <i className="ri-menu-fill text-2xl font-bold hover:cursor-pointer"></i>
                    </button>
                    <div className=" flex flex-col  text-gray-100 text-[1.1rem]">
                        {menus.map((menu, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={menu.path}
                                    className="text-gray-100 px-4 py-3 hover:bg-rose-300 hover:text-gray-100 "
                                    style={{
                                        background:
                                            location.pathname === menu.path
                                                ? '#FF637E'
                                                : 'transparent',
                                    }}
                                >
                                    {menu.icon}
                                    {menu.label}
                                </Link>
                            );
                        })}
                        <button className="text-gray-100 px-4 py-3 hover:bg-rose-300 hover:text-gray-100 text-left hover:cursor-pointer">
                            <i className="ri-logout-circle-line mr-3"></i>Logout
                        </button>
                    </div>
                </aside>
                <section className="h-screen duration-300 ease-in-out">
                    <nav className="bg-white shadow-2xl p-5 flex items-center justify-between sticky top-0 left-0 z-5">
                        <div className="flex gap-3 items-center">
                            <button
                                className="bg-gray-50 hover:bg-slate-500 px-2 py-1 rounded-md hover:text-gray-100 border-1 duration-300 ease-in-out"
                                onClick={() => {
                                    mobileSize === 0
                                        ? setMobileSize('100vw')
                                        : setMobileSize(0);
                                }}
                            >
                                <i className="ri-menu-fill text-2xl font-bold hover:cursor-pointer"></i>
                            </button>
                            {/* <h1 className=" text-xl font-bold">QuickBuy</h1> */}
                            <img
                                src="/logo.png"
                                alt=""
                                className=" h-10 hover:cursor-pointer"
                            />
                        </div>

                        <div>
                            <button className="border-1 border-indigo-500 w-12 h-12 flex items-center justify-center rounded-full relative ">
                                <i
                                    className="ri-user-3-fill text-3xl text-rose-700 hover:cursor-pointer"
                                    onClick={() => {
                                        setAccountMenu(!accountMenu);
                                    }}
                                ></i>
                                {accountMenu && (
                                    <div className="absolute top-16 -right-4 bg-white shadow-2xl  p-6 overflow-hidden duration-500">
                                        <div>
                                            <h1 className="font-semibold text-lg">
                                                Shiv Singh
                                            </h1>
                                            <p className="text-md text-gray-500">
                                                singhshiv0204@gmail.com
                                            </p>
                                            <div className="h-px bg-gray-300 my-4"></div>
                                            <button className="font-semibold hover:cursor-pointer">
                                                <i className="ri-logout-box-line mx-1 "></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </div>
                    </nav>
                    <div className="p-6">{children}</div>
                </section>
            </div>
        </>
    );
};

export default Layout;
