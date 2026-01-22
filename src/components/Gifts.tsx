import React from 'react';
import Button from './Button';

const Gifts: React.FC = () => (
    <section
        className='
            w-full
            max-w-2xl
            px-8
            py-20
            text-center
            space-y-10
        '
    >
        {/* ICONO */}
        <div className='text-[26px] opacity-70'>🎁</div>

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
            Regalos
        </h3>

        {/* TEXTO */}
        <p
            className='
                text-[14px]
                md:text-[15px]
                leading-[1.7]
                text-[#6f6f63]
                max-w-md
                mx-auto
            '
        >
            Lo más importante es tu presencia, pero si deseás hacernos un
            regalo, acá te dejamos nuestros datos.
        </p>

        {/* CTA */}
        <div className='pt-2'>
            <Button
                variant='primary'
                size='md'
            >
                Ver datos bancarios
            </Button>
        </div>
    </section>
);

export default Gifts;
