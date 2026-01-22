import { useState } from 'react';

const BankModal = ({ onClose }: { onClose: () => void }) => {
    const [copiedPesos, setCopiedPesos] = useState(false);
    const [copiedUsd, setCopiedUsd] = useState(false);

    const aliasPesos = import.meta.env.VITE_ALIAS_PESOS;
    const aliasUsd = import.meta.env.VITE_ALIAS_USD;

    const copyToClipboard = (text: string, type: 'pesos' | 'usd') => {
        navigator.clipboard.writeText(text);
        if (type === 'pesos') {
            setCopiedPesos(true);
            setTimeout(() => setCopiedPesos(false), 2000);
        } else {
            setCopiedUsd(true);
            setTimeout(() => setCopiedUsd(false), 2000);
        }
    };

    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm'
            onClick={onClose}
        >
            <div
                className='bg-white max-w-md w-full rounded-2xl p-8 space-y-6 text-center shadow-2xl relative animate-[fadeInScale_0.3s_ease-out]'
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    className='absolute top-4 right-4 text-[#6f6f63] hover:text-[#2f2f2a] transition-colors cursor-pointer'
                    onClick={onClose}
                    aria-label='Cerrar'
                >
                    <svg
                        className='w-6 h-6'
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

                <h4 className='font-serif text-[22px] text-[#2f2f2a]'>
                    Datos bancarios
                </h4>

                <div className='space-y-4'>
                    {/* Pesos */}
                    <div className='bg-[#f2f2ef] rounded-xl p-5 space-y-3 relative text-center'>
                        <button
                            className='absolute top-3 right-3 text-[#6f6f63] hover:text-[#2f2f2a] transition-all cursor-pointer'
                            onClick={() => copyToClipboard(aliasPesos, 'pesos')}
                            aria-label='Copiar'
                        >
                            {copiedPesos ? (
                                <svg
                                    className='w-5 h-5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M5 13l4 4L19 7'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='w-5 h-5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                                    />
                                </svg>
                            )}
                        </button>
                        <p className='text-[12px] uppercase tracking-wider text-[#6f6f63]'>
                            Pesos
                        </p>
                        <p className='font-mono text-[17px] text-[#2f2f2a]'>
                            {aliasPesos}
                        </p>
                    </div>

                    {/* Dólares */}
                    <div className='bg-[#f2f2ef] rounded-xl p-5 space-y-3 relative text-center'>
                        <button
                            className='absolute top-3 right-3 text-[#6f6f63] hover:text-[#2f2f2a] transition-all cursor-pointer'
                            onClick={() => copyToClipboard(aliasUsd, 'usd')}
                            aria-label='Copiar'
                        >
                            {copiedUsd ? (
                                <svg
                                    className='w-5 h-5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M5 13l4 4L19 7'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='w-5 h-5'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                                    />
                                </svg>
                            )}
                        </button>
                        <p className='text-[12px] uppercase tracking-wider text-[#6f6f63]'>
                            Dólares
                        </p>
                        <p className='font-mono text-[17px] text-[#2f2f2a]'>
                            {aliasUsd}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankModal;
