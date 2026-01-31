import React from 'react';
import Button from './Button';
import Countdown from './Countdown';

const getCalendarLink = () => {
    const ua = navigator.userAgent.toLowerCase();

    const title = encodeURIComponent('Casamiento de Azul & Pablo');
    const location = encodeURIComponent(
        'Lowlands Club, Blanco Encalada 1201, CABA',
    );
    const details = encodeURIComponent(
        'Celebración del casamiento de Azul y Pablo',
    );

    // Google Calendar dates (alineado con el .ics)
    const dates = '20260404T170000/20260504T020000';

    // iOS → Apple Calendar (archivo .ics)
    if (/iphone|ipad|ipod/.test(ua)) {
        return `${window.location.origin}/fecha.ics`;
    }

    // Android + Desktop → Google Calendar
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
};

const handleAddToCalendar = () => {
    const link = getCalendarLink();
    const ua = navigator.userAgent.toLowerCase();

    // iOS necesita navegación directa para abrir .ics
    if (/iphone|ipad|ipod/.test(ua)) {
        window.location.href = link;
    } else {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
};

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
            bg-[#f8f8f8]
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
                font-semibold
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
            ¡Falta poco!
        </p>

        <Countdown />

        <Button
            className='mt-6'
            variant='primary'
            size='md'
            onClick={handleAddToCalendar}
        >
            Agregar al calendario
        </Button>
    </section>
);

export default Invitation;
