import { useState } from 'react';
import { Link } from 'react-router';
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    return (
        <>
            <div className="grid md:grid-cols-2  md:overflow-hidden md:h-screen animate__animated animate__fadeIn">
                <div className="flex items-center">
                    <img
                        src="/signup.avif"
                        alt="signup_image"
                        className="xl:h-full w-full md:p-2"
                    />
                </div>
                <div className=" flex flex-col p-8  md:p-16 md:justify-center">
                    <h1 className="text-2xl font-bold">New User</h1>
                    <p className="text-lg text-gray-600">
                        Create your account to start shopping
                    </p>
                    <form className="mt-8 space-y-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="font-semibold text-lg"
                            >
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="John Doe"
                                className="border border-gray-300 rounded-md py-1 px-2  focus:outline-1 focus:outline-[#159A9C] focus:text-[#159A9C]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="font-semibold text-lg"
                            >
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                className="border border-gray-300 rounded-md py-1 px-2   focus:outline-1 focus:outline-[#159A9C] focus:text-[#159A9C]"
                            />
                        </div>
                        <div className="flex flex-col relative">
                            <label
                                htmlFor="password"
                                className="font-semibold text-lg"
                            >
                                Password
                            </label>
                            <input
                                required
                                type={passwordType}
                                name="user_password"
                                id="password"
                                placeholder="********"
                                className="border border-gray-300 rounded-md py-1 px-2 focus:outline-1 focus:outline-[#159A9C] focus:text-[#159A9C]"
                            />
                            <button
                                type="button"
                                className="absolute top-8 right-2 w-7 h-7 text-[#159A9C] rounded-full hover:cursor-pointer hover:bg-[#159A9C] hover:text-[#fff] duration-300"
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                    setPasswordType(
                                        passwordType === 'password'
                                            ? 'text'
                                            : 'password'
                                    );
                                }}
                            >
                                {showPassword ? (
                                    <i className="ri-eye-off-line"></i>
                                ) : (
                                    <i className="ri-eye-line"></i>
                                )}
                            </button>
                        </div>
                        <button className="border-2 border-[#159A9C] text-lg text-[#159A9C] font-semibold py-2 w-full mt-3 hover:bg-[#159A9C] hover:text-[#fff] hover:cursor-pointer duration-300 ">
                            Signup
                        </button>
                    </form>
                    <div className="mt-5 text-sm">
                        Already have an account ?{' '}
                        <Link
                            to="/login"
                            className="text-[#159A9C] font-semibold animate__animated animate__zoomIn animate__infinite animate__slower"
                        >
                            Login now
                        </Link>
                    </div>
                    <div>
                        <button className="w-12 h-12 border-2 border-[#159A9C] rounded-full flex justify-center items-center shadow-lg text-3xl font-extrabold absolute md:bottom-10 md:right-19 bottom-1 right-1 text-[#159A9C] hover:cursor-pointer hover:bg-[#159A9C] hover:text-white duration-300 animate__animated animate__zoomIn animate__infinite animate__slower">
                            <Link to="/">
                                <i className="ri-home-7-line "></i>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
