import React, { useState, useEffect } from 'react';
import Button from './Button';

type Status = 'idle' | 'loading' | 'error';

const RSVP: React.FC = () => {
    const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState<Status>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        allergies: '',
        message: '',
    });

    useEffect(() => {
        const alreadySubmitted = localStorage.getItem('rsvp_submitted');
        if (alreadySubmitted === 'true') {
            setSubmitted(true);
        }
    }, []);

    const handleSubmit = async () => {
        setErrorMessage(null);

        if (!attendance || !formData.name) {
            setStatus('error');
            setErrorMessage('Por favor indicá tu nombre y asistencia.');
            return;
        }

        try {
            setStatus('loading');

            await fetch(
                'https://script.google.com/macros/s/AKfycbyQx0Ml60moNR8Z4A-rXMkoNz_-g3tUAGH0QRVLMwoMCQ-pL92C3teYEAKhd--7KpIZ/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        attendance,
                        ...formData,
                    }),
                },
            );

            setSubmitted(true);
            localStorage.setItem('rsvp_submitted', 'true');
        } catch (error) {
            setStatus('error');
            setErrorMessage(
                'No pudimos enviar tu respuesta. Probá de nuevo en unos minutos.',
            );
            console.error(error);
        }
    };

    if (submitted) {
        return (
            <section className='w-full max-w-2xl px-8 py-32 bg-[rgb(var(--color-surface)/1)] text-center space-y-6'>
                <p className='font-script text-[40px] md:text-[48px] text-[#6f6f63]'>
                    ¡Gracias!
                </p>

                <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#6f6f63] max-w-md mx-auto'>
                    Recibimos tu confirmación.
                    <br />
                    ¡Nos vemos muy pronto!
                </p>
            </section>
        );
    }

    return (
        <section className='w-full max-w-2xl px-8 py-20 space-y-12 bg-[rgb(var(--color-surface)/1)] text-center'>
            {/* TÍTULO */}
            <h3 className='font-serif uppercase tracking-[0.45em] text-[14px] md:text-[16px] text-[#2f2f2a] font-semibold'>
                Confirmar asistencia
            </h3>

            {/* TEXTO */}
            <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#6f6f63]'>
                Por favor, confirmá tu asistencia.
                <br />
                ¡Te esperamos!
            </p>

            {/* ERROR MESSAGE */}
            {status === 'error' && errorMessage && (
                <p className='text-[13px] text-[#b4533c]'>{errorMessage}</p>
            )}

            {/* ASISTENCIA */}
            <div
                className={`
                    flex justify-center gap-10 py-4
                    ${
                        status === 'error' && !attendance
                            ? 'ring-1 ring-[#b4533c]/40 rounded-xl px-4'
                            : ''
                    }
                `}
            >
                <label className='flex items-center gap-3 cursor-pointer text-[14px] text-[#2f2f2a]'>
                    <input
                        type='radio'
                        name='attendance'
                        checked={attendance === 'yes'}
                        onChange={() => setAttendance('yes')}
                        className='accent-[#8f9d87] w-4 h-4 cursor-pointer'
                    />
                    Sí, ahí voy a estar
                </label>

                <label className='flex items-center gap-3 cursor-pointer text-[14px] text-[#2f2f2a]'>
                    <input
                        type='radio'
                        name='attendance'
                        checked={attendance === 'no'}
                        onChange={() => setAttendance('no')}
                        className='accent-[#8f9d87] w-4 h-4 cursor-pointer'
                    />
                    No voy a poder ir
                </label>
            </div>

            {/* FORM */}
            <div className='space-y-4 max-w-xl mx-auto text-left'>
                <input
                    className={`
                        w-full rounded-xl p-4 text-[14px]
                        focus:outline-none focus:border-[#8f9d87]
                        border
                        ${
                            status === 'error' && !formData.name
                                ? 'border-[#b4533c]'
                                : 'border-[#d0d0c8]'
                        }
                    `}
                    placeholder='Nombre y apellido'
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />

                <input
                    className='w-full border border-[#d0d0c8] rounded-xl p-4 text-[14px] focus:outline-none focus:border-[#8f9d87]'
                    placeholder='Intolerancias o restricciones alimentarias'
                    value={formData.allergies}
                    onChange={(e) =>
                        setFormData({ ...formData, allergies: e.target.value })
                    }
                />

                <textarea
                    className='w-full border border-[#d0d0c8] rounded-xl p-4 text-[14px] focus:outline-none focus:border-[#8f9d87] min-h-30'
                    placeholder='Mensaje para los novios'
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                />

                <Button
                    onClick={handleSubmit}
                    variant='primary'
                    size='full'
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando…' : 'Enviar'}
                </Button>
            </div>
        </section>
    );
};

export default RSVP;
