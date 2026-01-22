import React from 'react';
import Button from './Button';

const Gallery: React.FC = () => (
    <section
        className='
            w-full
            max-w-4xl
            px-8
            py-20
            text-center
            space-y-10
            bg-[#8f9d87]/10
        '
    >
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
            Comparte fotos
        </h3>

        {/* TEXTO */}
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
            Subí fotos de la boda al álbum para que podamos revivir juntos cada
            momento.
        </p>

        {/* GRID */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {[1, 2, 3].map((i) => (
                <img
                    key={i}
                    src={`https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop&crop=entropy&cs=tinysrgb&w=${
                        400 + i * 50
                    }`}
                    alt={`Foto ${i}`}
                    className='
                        w-full
                        h-48
                        md:h-64
                        object-cover
                        rounded-2xl
                    '
                />
            ))}
        </div>

        {/* CTA */}
        <div className='pt-4'>
            <Button
                variant='primary'
                size='md'
            >
                Subir foto
            </Button>
        </div>
    </section>
);

export default Gallery;
