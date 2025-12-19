import React from 'react';

const Hero: React.FC = () => (
    <section className='w-full relative'>
        <div
            className='relative h-screen bg-cover bg-center'
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')",
            }}
        >
            <div className='absolute inset-0 bg-black/30' />

            <div className='relative z-10 h-full flex flex-col justify-center items-center text-white text-center space-y-6'>
                <h1
                    className='
                        font-script
                        text-[64px]
                        leading-[0.95]
                        md:text-[112px]
                        md:leading-[0.9]
                    '
                >
                    Azul & Pablo
                </h1>

                <div className='w-12 h-px bg-white/50' />

                <div className='font-serif uppercase tracking-[0.4em] text-[12px] md:text-[14px] text-white/90'>
                    Nos casamos
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
