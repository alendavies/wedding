import React from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Location from './components/Location';

const App: React.FC = () => (
    <main className='w-full min-h-screen bg-[#f2f2ef] flex flex-col items-center'>
        <Hero />

        <Invitation />

        <Location />

        <RSVP />

        <DressCode />

        <Gallery />

        <Gifts />

        <Footer />
    </main>
);

export default App;
