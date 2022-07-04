import React from 'react';
import Lottie from 'lottie-react';
import chatLottie from '../../../lottie/chat.json';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
    // lottie style
    const style = {
        height: 300,
    };

    // navigator
    const navigate = useNavigate();

    // react firebase hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);

    // react form hook
    const { register, handleSubmit } = useForm();

    // create new account
    const onSubmit = async ({name, email, password}) => {
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name})
    };

    return (
        <section className="bg-[#13121d] h-screen">
            <div className="max-w-[1240px] m-auto h-screen flex justify-evenly items-center">
                <Lottie animationData={chatLottie} loop={true} style={style} />

                <div className="w-96 bg-[#1e1d29] p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-8">Create ChatX</h2>

                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input bg-[#13121d] w-full mb-3"
                            {...register('name', {
                                required: true,
                            })}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input bg-[#13121d] w-full mb-3"
                            {...register('email', {
                                required: true,
                            })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input bg-[#13121d] w-full mb-3"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <input
                            className="btn btn-primary text-white"
                            type="submit"
                            value="Create Account"
                        />

                        <div className="divider">OR</div>
                        <button className="btn" onClick={() => navigate('/login')}>
                            Already Have An Account
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
