import React, { useState } from 'react';
import Loading from './Loading';
import { apiUrl, notify } from '../helpers';
import axios from 'axios';

//icons
import { HiMail } from 'react-icons/hi';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleLoadingState = (flag) => {
        setLoading(flag);
    }

    const handleSendEmail = (email) => {
        handleLoadingState(true);
        // console.log(email);
        axios.post(`${apiUrl}/subscribe`,{
            email:email
        }).then(res => {
            if(res.data.success) {
                notify('success','Subscribed!', res.data.success);
                setEmail('');
                setLoading(false);
            }else{
                notify('error','Unable to Subscribe!', res.data.error);
                setLoading(false);
            }
        }).catch(error => {
            notify('error', "Error: Please try again later!", error.message)
            handleLoadingState(false);
        })
    }

    // const isEmailValid = (email) => {
    //     // Regular expression for email validation
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // };

    return (
        <>
            <section className="mt-20 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 title text-center">Sign up for our Newsletter</h2>
                        <p className="mx-auto mb-10 max-w-2xl subdesc text-center">Stay up to date with our announcements and exclusive discounts.</p>

                        {loading ?
                            <Loading message="Working on it..." />
                            : <form action="#" method='POST'>
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlfor="email" className="hidden mb-2 text-sm font-medium text-gray-800 ">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <HiMail size={20} className='text-gray-500' />
                                        </div>
                                        <input className="block p-3 pl-10 w-full text-sm text-gray-800 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary focus:border-primary" placeholder="Enter your email" type="email"
                                            id="email"
                                            value={email}
                                            onChange={handleOnChangeEmail}
                                            required />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className='py-3 px-5 w-full text-sm font-semibold text-center text-white rounded-xl border cursor-pointer shadow-xl bg-primary sm:rounded-none sm:rounded-r-lg hover:bg-primary-hover focus:bg-primary-hover duration-300 
                                    transition-colors'
                                            onClick={() => handleSendEmail(email)}
                                        // disabled={!isEmailValid(email)}
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 font-light">Your email is safe with us. We don't spam.</div>
                            </form>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter