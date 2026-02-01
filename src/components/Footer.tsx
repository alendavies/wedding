import React from 'react';

const Footer: React.FC = () => (
    <section
        className='
            w-full
            max-w-2xl
            pb-8
            text-center
            space-y-8
        '
    >
        {/* ICONO */}
        <img
            src='/moto.png'
            alt='Moto'
            className='w-40 h-40 mx-auto object-contain'
        />

        {/* FRASE */}
        <p
            className='
                font-script
                text-[32px]
                md:text-[44px]
                leading-none
                text-[#6f6f63]
            '
        >
            Te esperamos
        </p>

        {/* NOMBRES */}
        <p
            className='
                font-script
                text-[28px]
                md:text-[32px]
                text-[#6f6f63]
            '
        >
            Azul & Pablo
        </p>

        {/* DIVISOR SUTIL */}
        <div className='w-8 h-px bg-[#8f9d87]/40 mx-auto' />

        {/* CRÉDITO */}
        <p
            className='
                text-[11px]
                tracking-wide
                text-[#9a9a8f]
            '
        >
            Desarrollado por Alen Davies · 2026
        </p>
    </section>
);

export default Footer;
