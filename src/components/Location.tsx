import React from 'react';
import Button from './Button';

const Location: React.FC = () => (
    <section className='w-full max-w-2xl px-8 py-20 bg-[rgb(var(--color-surface)/1)] text-center space-y-10'>
        <img
            src='/copas.png'
            alt='Ubicación'
            className='w-16 h-16 md:w-20 md:h-20 mx-auto'
        />

        <h3 className='font-serif uppercase tracking-[0.45em] text-[14px] md:text-[16px] text-[#2f2f2a] font-semibold'>
            Celebración
        </h3>

        <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#6f6f63]'>
            La celebración será en
        </p>

        <p className='font-serif text-[18px] md:text-[20px] text-[#2f2f2a]'>
            Lowlands Club
        </p>

        <div className='flex justify-center gap-8 md:gap-16 py-4'>
            <div className='text-center font-serif text-[#2f2f2a]'>
                <div className='text-[20px] md:text-[22px]'>04 ABR 2026</div>
            </div>

            <div className='text-center font-serif text-[#2f2f2a]'>
                <div className='text-[20px] md:text-[22px]'>16:00</div>
            </div>
        </div>

        <p className='text-[13px] md:text-[14px] text-[#6f6f63]'>
            Blanco Encalada 1201, CABA
        </p>

        <a
            href='https://maps.app.goo.gl/8TxCx5EhhCtBET3x9'
            target='_blank'
            rel='noopener noreferrer'
        >
            <Button
                variant='primary'
                size='md'
            >
                Ver ubicación
            </Button>
        </a>
    </section>
);

export default Location;
