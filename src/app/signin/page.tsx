import React from 'react';

const SignInPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-2xl font-bold text-red-700 pb-4'>সাইন ইন</h2>
            <form action="">
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button className="btn bg-red-700 text-white mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;