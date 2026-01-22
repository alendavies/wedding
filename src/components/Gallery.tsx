import React, { useState } from 'react';
import Button from './Button';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.jpeg';

const images = [
    { src: image1, alt: 'Foto 1' },
    { src: image2, alt: 'Foto 2' },
    { src: image3, alt: 'Foto 3' },
    { src: image4, alt: 'Foto 4' },
    { src: image5, alt: 'Foto 5' },
    { src: image6, alt: 'Foto 6' },
    { src: image7, alt: 'Foto 7' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const albumUrl = import.meta.env.VITE_PHOTOS_ALBUM;

    return (
        <>
            <section
                className='
                    w-full
                    max-w-4xl
                    px-8
                    py-20
                    text-center
                    space-y-10
                    bg-[#f8f8f8]
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
                    Fotos
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
                    Subí fotos del casamiento al álbum para que podamos revivir
                    juntos cada momento.
                </p>

                {/* GRID */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.src}
                            alt={image.alt}
                            onClick={() => setSelectedImage(i)}
                            className='
                                w-full
                                aspect-square
                                object-cover
                                rounded-xl
                                hover:opacity-90
                                transition-opacity
                                cursor-pointer
                            '
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className='pt-4'>
                    <Button
                        variant='primary'
                        size='md'
                        onClick={() =>
                            albumUrl && window.open(albumUrl, '_blank')
                        }
                    >
                        Subir fotos
                    </Button>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer'
                        onClick={() => setSelectedImage(null)}
                        aria-label='Cerrar'
                    >
                        <svg
                            className='w-8 h-8'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>

                    {/* Navegación anterior */}
                    {selectedImage > 0 && (
                        <button
                            className='absolute left-4 text-white hover:text-gray-300 transition-colors cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(selectedImage - 1);
                            }}
                            aria-label='Anterior'
                        >
                            <svg
                                className='w-10 h-10'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15 19l-7-7 7-7'
                                />
                            </svg>
                        </button>
                    )}

                    <img
                        src={images[selectedImage].src}
                        alt={images[selectedImage].alt}
                        className='max-w-full max-h-full object-contain'
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Navegación siguiente */}
                    {selectedImage < images.length - 1 && (
                        <button
                            className='absolute right-4 text-white hover:text-gray-300 transition-colors cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(selectedImage + 1);
                            }}
                            aria-label='Siguiente'
                        >
                            <svg
                                className='w-10 h-10'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 5l7 7-7 7'
                                />
                            </svg>
                        </button>
                    )}

                    {/* Contador */}
                    <div className='absolute bottom-4 text-white text-sm'>
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
