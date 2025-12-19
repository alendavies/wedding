import React from 'react';
import Button from './Button';
import Countdown from './Countdown';

const Invitation: React.FC = () => (
    <section
        className='
            w-full
            max-w-2xl
            -mt-16
            relative
            z-20
            px-8
            py-16
            bg-white
            rounded-t-3xl
            text-center
            space-y-10
        '
    >
        <h2
            className='
      font-serif
      uppercase
      tracking-[0.45em]
      text-[14px]
      md:text-[16px]
      text-[#2f2f2a]
      font-medium
    '
        >
            ¡Estás invitado!
        </h2>

        <div className='w-10 h-px bg-[#8f9d87]/50 mx-auto' />

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
            Nos encantaría que seas parte de este momento tan especial para
            nosotros.
            <br />
            <span className='font-medium text-[#2f2f2a]'>¡Falta poco!</span>
        </p>

        <Countdown />

        <a href='/fecha.ics'>
            <Button
                className='mt-6'
                variant='primary'
                size='md'
            >
                Agendar recordatorio
            </Button>
        </a>
    </section>
);

export default Invitation;
