import React from 'react';
import Button from './Button';

const Location: React.FC = () => (
    <section
        className='
            w-full
            max-w-2xl
            px-8
            py-20
            text-center
            space-y-10
            bg-white/50
        '
    >
        {/* ICONO */}
        <div className='text-[28px] opacity-70'>🥂</div>

        {/* TÍTULO */}
        <h3
            className='
                font-serif
                uppercase
                tracking-[0.45em]
                text-[14px]
                md:text-[16px]
                text-[#2f2f2a]
                font-semibold
            '
        >
            Celebración
        </h3>

        {/* TEXTO */}
        <p
            className='
                text-[14px]
                md:text-[15px]
                leading-[1.7]
                text-[#6f6f63]
            '
        >
            La celebración será en
        </p>

        {/* LUGAR */}
        <p
            className='
                text-[16px]
                md:text-[19px]
                text-[#6f6f63]
            '
        >
            Lowlands Club
        </p>

        {/* FECHA Y HORA */}
        <div className='flex justify-center gap-16 py-4'>
            <div className='text-center'>
                <div
                    className='
                        font-serif
                        text-[18px]
                        md:text-[20px]
                    '
                >
                    04 ABR
                </div>
                <div
                    className='
                        text-[11px]
                        tracking-widest
                        text-[#6f6f63]
                        mt-1
                    '
                >
                    2026
                </div>
            </div>

            <div className='text-center'>
                <div
                    className='
                        font-serif
                        text-[18px]
                        md:text-[20px]
                    '
                >
                    17:00
                </div>
            </div>
        </div>

        {/* DIRECCIÓN */}
        <p
            className='
                text-[13px]
                md:text-[14px]
                text-[#6f6f63]
            '
        >
            Blanco Encalada 1201, CABA
        </p>

        {/* CTA */}
        <a
            href='https://maps.app.goo.gl/aCivzeW2YufiV6XY9'
            target='_blank'
            rel='noopener noreferrer'
        >
            <Button
                className='mt-6'
                variant='primary'
                size='md'
            >
                Ver ubicación
            </Button>
        </a>
    </section>
);

export default Location;
