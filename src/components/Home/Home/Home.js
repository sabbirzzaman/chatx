import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <section className='grid grid-cols-[25%_minmax(75%,_1fr)] h-screen'>
            <Sidebar />
            <Chat />
        </section>
    );
};

export default Home;