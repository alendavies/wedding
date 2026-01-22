import React from 'react';
import heroImage from '../../assets/hero.jpeg';

const Hero: React.FC = () => (
    <section className='w-full relative'>
        <div
            className='relative h-screen bg-cover'
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: 'center 40%',
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

                <div className='max-w-2xl px-6 md:px-8 text-center'>
                    <p
                        className='font-serif italic text-[19px] md:text-[24px] leading-relaxed text-white mb-3'
                        style={{
                            textShadow:
                                '1px 1px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)',
                        }}
                    >
                        Que el fiel amor y la lealtad nunca te abandonen.
                        <br />
                        Átalos a tu cuello, escríbelos en tu corazón
                    </p>
                    <p
                        className='font-serif uppercase tracking-[0.3em] text-[12px] md:text-[14px] text-white/90'
                        style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}
                    >
                        Proverbios 3:3
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
