import React from 'react';

const Footer: React.FC = () => (
    <section
        className='
            w-full
            max-w-2xl
            px-8
            py-24
            text-center
            space-y-6
        '
    >
        {/* FRASE */}
        <p
            className='
                font-script
                text-[36px]
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
    </section>
);

export default Footer;
