'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {name: string, image: string, email: string, password: string};
        
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })
        
        if (data) {
            console.log(data);
            redirect('/');
        }

        if (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-2xl font-bold text-red-700 pb-4'>সাইন আপ</h2>
            <form onSubmit={onSubmit} action="">
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">নাম</label>
                    <input name='name' type="text" className="input" placeholder="Name" />

                    <label className="label">ImageURL</label>
                    <input name='image' type="url" className="input" placeholder="Image" />

                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn bg-red-700 text-white mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;