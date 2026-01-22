import React from 'react';

const DressCode: React.FC = () => (
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
        <div className='text-[26px] opacity-70'>👗</div>

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
            Dress code
        </h3>

        {/* CONTENIDO */}
        <p
            className='
                text-[14px]
                md:text-[15px]
                leading-[1.7]
                text-[#6f6f63]
            '
        >
            <span className='block font-medium text-[#2f2f2a]'>Formal</span>
            ¡Lucí tu mejor look!
        </p>
    </section>
);

export default DressCode;
