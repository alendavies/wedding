import React, { useState } from 'react';
import Button from './Button';
import BankModal from './BankModal';

const Gifts: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className='w-full max-w-2xl px-8 pt-20 text-center pb-20'>
                <img
                    src='/gift.png'
                    alt='Regalo'
                    className='w-32 h-32 md:w-45 md:h-45 mx-auto'
                />

                <h3 className='font-serif uppercase tracking-[0.45em] text-[14px] md:text-[16px] text-[#2f2f2a] font-semibold'>
                    Regalos
                </h3>

                <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#6f6f63] max-w-md mx-auto pt-12'>
                    Tu presencia es muy importante para nosotros y nos alegra
                    que nos acompañes en este momento. Si deseás hacernos un
                    regalo, aquí te dejamos nuestros datos.
                </p>

                <div className='pt-14'>
                    <Button
                        variant='primary'
                        size='md'
                        onClick={() => setOpen(true)}
                    >
                        Ver datos bancarios
                    </Button>
                </div>
            </section>

            {open && <BankModal onClose={() => setOpen(false)} />}
        </>
    );
};

export default Gifts;
