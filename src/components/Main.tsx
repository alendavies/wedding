import React, { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2026-09-27T20:00:00');

const getTimeLeft = () => {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
};

const Main: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        allergies: '',
        song: '',
        message: '',
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = () => {
        console.log('Form submitted:', { attendance, ...formData });
        alert('¡Gracias por confirmar tu asistencia!');
    };

    return (
        <main className='w-full min-h-screen bg-[#f2f2ef] flex flex-col items-center'>
            {/* Hero Section */}
            <section className='w-full relative'>
                <div
                    className='relative h-screen bg-cover bg-center'
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')",
                    }}
                >
                    <div className='absolute inset-0 bg-black/30' />

                    <div className='relative z-10 h-full flex flex-col justify-center items-center text-white text-center space-y-6'>
                        <h1 className='text-7xl md:text-8xl font-serif italic'>
                            Azul & Pablo
                        </h1>

                        <div className='uppercase tracking-[0.3em] text-sm md:text-base'>
                            NOS CASAMOS
                        </div>
                    </div>
                </div>
            </section>

            {/* Invitation Section */}
            <section className='w-full max-w-2xl -mt-16 relative z-20 px-8 py-16 bg-white rounded-t-3xl text-center space-y-8'>
                <h2 className='text-5xl font-serif italic'>¡Estás invitado!</h2>

                <p className='text-base text-[#6f6f63] leading-relaxed'>
                    Nos encantaría que seas parte de este momento tan especial
                    para nosotros. ¡Falta poco!
                </p>

                {/* Countdown */}
                <div className='flex justify-center gap-6 py-4'>
                    {[
                        ['DÍAS', timeLeft.days],
                        ['HORAS', timeLeft.hours],
                        ['MINUTOS', timeLeft.minutes],
                        ['SEGUNDOS', timeLeft.seconds],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className='space-y-2'
                        >
                            <div className='w-20 h-20 rounded-full bg-[#8f9d87] text-white flex items-center justify-center text-2xl font-medium'>
                                {value}
                            </div>
                            <div className='text-xs tracking-widest text-[#6f6f63] font-sans uppercase'>
                                {label}
                            </div>
                        </div>
                    ))}
                </div>

                <button className='mt-6 px-8 py-3 rounded-full bg-[#8f9d87] text-white text-sm tracking-wide hover:bg-[#7a8a75] transition-colors font-sans'>
                    Agendar recordatorio
                </button>
            </section>

            {/* Ceremony Section */}
            <section className='w-full max-w-2xl px-8 py-20 text-center space-y-6'>
                <div className='text-5xl'>⛪</div>

                <h3 className='uppercase tracking-[0.2em] text-sm font-semibold'>
                    CEREMONIA
                </h3>

                <p className='text-base text-[#6f6f63]'>
                    Iglesia de San Francisco
                </p>

                <p className='text-sm text-[#6f6f63]'>Te esperamos el</p>

                <div className='flex justify-center gap-12 text-base py-4'>
                    <div>
                        <div className='text-xl font-semibold'>27 SEP</div>
                        <div className='text-sm text-[#6f6f63] mt-1'>2026</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold'>8:00 PM</div>
                    </div>
                </div>

                <p className='text-sm text-[#6f6f63] pt-2'>
                    Calle, #123, Estado, País
                </p>

                <button className='mt-4 px-8 py-3 rounded-full bg-[#8f9d87] text-white text-sm tracking-wide hover:bg-[#7a8a75] transition-colors'>
                    Ver ubicación
                </button>
            </section>

            {/* Celebration Section */}
            <section className='w-full max-w-2xl px-8 py-20 text-center space-y-6 bg-white/50'>
                <div className='text-5xl'>🥂</div>

                <h3 className='uppercase tracking-[0.2em] text-sm font-semibold'>
                    CELEBRACIÓN
                </h3>

                <p className='text-base text-[#6f6f63]'>
                    La celebración será en
                </p>

                <p className='text-lg font-medium'>Del Carril Eventos</p>

                <div className='flex justify-center gap-12 text-base py-4'>
                    <div>
                        <div className='text-xl font-semibold'>27 SEP</div>
                        <div className='text-sm text-[#6f6f63] mt-1'>2026</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold'>9:00 PM</div>
                    </div>
                </div>

                <p className='text-sm text-[#6f6f63]'>
                    Calle, #123, Estado, País
                </p>

                <button className='mt-4 px-8 py-3 rounded-full bg-[#8f9d87] text-white text-sm tracking-wide hover:bg-[#7a8a75] transition-colors'>
                    Ver ubicación
                </button>
            </section>

            {/* Dress Code Section */}
            <section className='w-full max-w-2xl px-8 py-20 text-center space-y-6'>
                <div className='text-5xl'>👗</div>

                <h3 className='uppercase tracking-[0.2em] text-sm font-semibold'>
                    DRESS CODE
                </h3>

                <p className='text-base text-[#6f6f63] leading-relaxed'>
                    Formal <br /> ¡Lucí tu mejor look!
                </p>
            </section>

            {/* Photo Gallery Section */}
            <section className='w-full max-w-4xl px-8 py-20 bg-[#8f9d87]/10'>
                <h3 className='uppercase tracking-[0.2em] text-sm font-semibold text-center mb-12'>
                    COMPARTE FOTOS
                </h3>

                <p className='text-center text-[#6f6f63] mb-8'>
                    Sube fotos de la boda al álbum!
                </p>

                <div className='grid grid-cols-3 gap-4'>
                    {[1, 2, 3].map((i) => (
                        <img
                            key={i}
                            src={`https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop&crop=entropy&cs=tinysrgb&w=${
                                400 + i * 50
                            }`}
                            alt={`Foto ${i}`}
                            className='rounded-xl object-cover w-full h-64'
                        />
                    ))}
                </div>

                <div className='text-center mt-8'>
                    <button className='px-8 py-3 rounded-full bg-[#8f9d87] text-white text-sm tracking-wide hover:bg-[#7a8a75] transition-colors font-sans'>
                        Subir foto
                    </button>
                </div>
            </section>

            {/* Gifts Section */}
            <section className='w-full max-w-2xl px-8 py-20 text-center space-y-6'>
                <div className='text-5xl'>🎁</div>

                <h3 className='uppercase tracking-[0.2em] text-sm font-semibold'>
                    REGALOS
                </h3>

                <p className='text-base text-[#6f6f63] leading-relaxed max-w-lg mx-auto'>
                    Lo más importante es tu presencia, pero si deseás hacernos
                    un regalo, aquí te dejamos nuestros datos.
                </p>

                <button className='mt-6 px-8 py-3 rounded-full bg-[#8f9d87] text-white text-sm tracking-wide hover:bg-[#7a8a75] transition-colors'>
                    Ver datos bancarios
                </button>
            </section>

            {/* RSVP Section */}
            <section className='w-full max-w-2xl px-8 py-20 space-y-8 bg-white/50'>
                <h3 className='uppercase tracking-[0.2em] text-sm font-semibold text-center'>
                    CONFIRMAR ASISTENCIA
                </h3>

                <p className='text-center text-[#6f6f63]'>
                    Por favor, confirmá tu asistencia
                    <br />
                    ¡Esperamos que estés allí!
                </p>

                <div className='flex justify-center gap-4 py-4'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type='radio'
                            name='attendance'
                            checked={attendance === 'yes'}
                            onChange={() => setAttendance('yes')}
                            className='w-4 h-4'
                        />
                        <span className='text-sm'>Sí, allí estaré!</span>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type='radio'
                            name='attendance'
                            checked={attendance === 'no'}
                            onChange={() => setAttendance('no')}
                            className='w-4 h-4'
                        />
                        <span className='text-sm'>No podré asistir</span>
                    </label>
                </div>

                <div className='space-y-4 max-w-xl mx-auto'>
                    <input
                        className='w-full border border-[#d0d0c8] rounded-xl p-4 text-sm focus:outline-none focus:border-[#8f9d87]'
                        placeholder='Nombre y apellido'
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                    <input
                        className='w-full border border-[#d0d0c8] rounded-xl p-4 text-sm focus:outline-none focus:border-[#8f9d87]'
                        placeholder='Intolerancias o alergias alimentarias'
                        value={formData.allergies}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                allergies: e.target.value,
                            })
                        }
                    />
                    <input
                        className='w-full border border-[#d0d0c8] rounded-xl p-4 text-sm focus:outline-none focus:border-[#8f9d87]'
                        placeholder='¿Qué canción no puede faltar?'
                        value={formData.song}
                        onChange={(e) =>
                            setFormData({ ...formData, song: e.target.value })
                        }
                    />
                    <textarea
                        className='w-full border border-[#d0d0c8] rounded-xl p-4 text-sm focus:outline-none focus:border-[#8f9d87] min-h-25'
                        placeholder='Mensaje para los novios'
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />

                    <button
                        onClick={handleSubmit}
                        className='w-full py-4 rounded-full bg-[#8f9d87] text-white text-sm tracking-wide hover:bg-[#7a8a75] transition-colors'
                    >
                        Enviar respuesta
                    </button>
                </div>
            </section>

            {/* Footer */}
            <section className='w-full max-w-2xl px-8 py-16 text-center'>
                <p className='text-4xl font-serif italic text-[#6f6f63]'>
                    Te esperamos
                </p>
                <p className='text-xl mt-4 text-[#6f6f63]'>Azul & Pablo</p>
            </section>
        </main>
    );
};

export default Main;
