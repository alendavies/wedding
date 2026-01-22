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
        <div
            className='
                text-[14px]
                md:text-[15px]
                leading-[1.7]
                text-[#6f6f63]
                space-y-3
            '
        >
            <p className='font-serif text-[18px] md:text-[20px] text-[#2f2f2a]'>
                Formal
            </p>

            <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#6f6f63]'>
                ¡Lucí tu mejor look!
            </p>
        </div>
    </section>
);

export default DressCode;
