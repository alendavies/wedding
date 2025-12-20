import React, { useState } from 'react';
import Button from './Button';

const RSVP: React.FC = () => {
    const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        allergies: '',
        song: '',
        message: '',
    });

    const handleSubmit = async () => {
        if (!attendance || !formData.name) {
            alert('Por favor completá tu nombre y asistencia');
            return;
        }

        try {
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
                }
            );

            setAttendance(null);
            setFormData({
                name: '',
                allergies: '',
                song: '',
                message: '',
            });
        } catch (error) {
            alert('Hubo un error. Probá de nuevo más tarde.');
            console.error(error);
        }
    };

    return (
        <section
            className='
                w-full
                max-w-2xl
                px-8
                py-20
                space-y-12
                bg-white/50
                text-center
            '
        >
            {/* TÍTULO */}
            <h3
                className='
                    font-serif
                    uppercase
                    tracking-[0.45em]
                    text-[12px]
                    md:text-[14px]
                    text-[#2f2f2a]
                    font-medium
                '
            >
                Confirmar asistencia
            </h3>

            {/* TEXTO */}
            <p
                className='
                    text-[14px]
                    md:text-[15px]
                    leading-[1.7]
                    text-[#6f6f63]
                '
            >
                Por favor, confirmá tu asistencia.
                <br />
                ¡Esperamos que estés allí!
            </p>

            {/* ASISTENCIA */}
            <div className='flex justify-center gap-10 py-4'>
                <label className='flex items-center gap-3 cursor-pointer text-[14px] text-[#2f2f2a]'>
                    <input
                        type='radio'
                        name='attendance'
                        checked={attendance === 'yes'}
                        onChange={() => setAttendance('yes')}
                        className='accent-[#8f9d87] w-4 h-4'
                    />
                    Sí, allí estaré
                </label>

                <label className='flex items-center gap-3 cursor-pointer text-[14px] text-[#2f2f2a]'>
                    <input
                        type='radio'
                        name='attendance'
                        checked={attendance === 'no'}
                        onChange={() => setAttendance('no')}
                        className='accent-[#8f9d87] w-4 h-4'
                    />
                    No podré asistir
                </label>
            </div>

            {/* FORMULARIO */}
            <div className='space-y-4 max-w-xl mx-auto text-left'>
                <input
                    className='
                        w-full
                        border
                        border-[#d0d0c8]
                        rounded-xl
                        p-4
                        text-[14px]
                        focus:outline-none
                        focus:border-[#8f9d87]
                    '
                    placeholder='Nombre y apellido'
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />

                <input
                    className='
                        w-full
                        border
                        border-[#d0d0c8]
                        rounded-xl
                        p-4
                        text-[14px]
                        focus:outline-none
                        focus:border-[#8f9d87]
                    '
                    placeholder='Intolerancias o alergias alimentarias'
                    value={formData.allergies}
                    onChange={(e) =>
                        setFormData({ ...formData, allergies: e.target.value })
                    }
                />

                <input
                    className='
                        w-full
                        border
                        border-[#d0d0c8]
                        rounded-xl
                        p-4
                        text-[14px]
                        focus:outline-none
                        focus:border-[#8f9d87]
                    '
                    placeholder='¿Qué canción no puede faltar?'
                    value={formData.song}
                    onChange={(e) =>
                        setFormData({ ...formData, song: e.target.value })
                    }
                />

                <textarea
                    className='
                        w-full
                        border
                        border-[#d0d0c8]
                        rounded-xl
                        p-4
                        text-[14px]
                        focus:outline-none
                        focus:border-[#8f9d87]
                        min-h-30
                    '
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
                >
                    Enviar respuesta
                </Button>
            </div>
        </section>
    );
};

export default RSVP;
