import React from 'react';
import Lottie from 'lottie-react';
import chatLottie from '../../../lottie/chat.json';
import { useForm } from 'react-hook-form';

const Login = () => {
    const style = {
        height: 300,
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <section className="bg-[#13121d] h-screen">
            <div className="max-w-[1240px] m-auto h-screen flex justify-evenly items-center">
                <Lottie animationData={chatLottie} loop={true} style={style} />

                <div className="w-96 bg-[#1e1d29] p-8 rounded-lg">
                    <h2 className='text-3xl font-bold mb-8'>Login to ChatX</h2>
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="input bg-[#13121d] w-full mb-3"
                            {...register('email', {
                                required: true,
                            })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            class="input bg-[#13121d] w-full mb-3"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <input class="btn btn-primary text-white" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
