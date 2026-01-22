import React, { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2026-04-04T17:00:00');

const getTimeLeft = () => {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
};

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='flex justify-center gap-6 py-6'>
            {[
                ['DÍAS', timeLeft.days],
                ['HORAS', timeLeft.hours],
                ['MINUTOS', timeLeft.minutes],
                ['SEGUNDOS', timeLeft.seconds],
            ].map(([label, value]) => (
                <div
                    key={String(label)}
                    className='flex flex-col items-center space-y-3'
                >
                    <div
                        className='
                            w-16
                            h-16
                            md:w-18
                            md:h-18
                            rounded-full
                            bg-[#8f9d87]
                            text-white
                            flex
                            items-center
                            justify-center
                            font-serif
                            text-[22px]
                            md:text-[24px]
                        '
                    >
                        {value}
                    </div>

                    <div
                        className='
                            text-[10px]
                            md:text-[11px]
                            tracking-[0.35em]
                            uppercase
                            text-[#6f6f63]
                            text-center
                        '
                    >
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
