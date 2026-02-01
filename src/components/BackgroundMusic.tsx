import { useEffect, useRef, useState } from 'react';
import Button from './Button';

type BackgroundMusicProps = {
    src: string;
    volume?: number;
    loop?: boolean;
};

export default function BackgroundMusic({
    src,
    volume = 0.3,
    loop = true,
}: BackgroundMusicProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !src) return;

        audio.volume = volume;
        audio.loop = loop;

        const removeListeners = () => {
            window.removeEventListener('pointerdown', unlockAudio);
            window.removeEventListener('click', unlockAudio);
            window.removeEventListener('touchstart', unlockAudio);
            window.removeEventListener('keydown', unlockAudio);
            window.removeEventListener('wheel', unlockAudio);
            window.removeEventListener('scroll', unlockAudio);
        };

        const attemptPlay = async () => {
            try {
                await audio.play();
                setIsActive(true);
                removeListeners();
            } catch {}
        };

        const unlockAudio = () => {
            void attemptPlay();
        };

        // cualquier interacción válida
        window.addEventListener('pointerdown', unlockAudio);
        window.addEventListener('click', unlockAudio);
        window.addEventListener('touchstart', unlockAudio);
        window.addEventListener('keydown', unlockAudio);
        window.addEventListener('wheel', unlockAudio, { passive: true });
        window.addEventListener('scroll', unlockAudio, { passive: true });

        return () => {
            removeListeners();
        };
    }, [src, volume, loop]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onPlay = () => setIsActive(true);
        const onPause = () => setIsActive(false);

        audio.addEventListener('play', onPlay);
        audio.addEventListener('pause', onPause);

        return () => {
            audio.removeEventListener('play', onPlay);
            audio.removeEventListener('pause', onPause);
        };
    }, []);

    return (
        <>
            {!isActive && src ? (
                <div className='fixed top-6 right-6 z-50'>
                    <Button
                        variant='outline'
                        size='sm'
                        className='gap-2'
                        onClick={() => {
                            const audio = audioRef.current;
                            if (!audio) return;
                            void audio.play();
                        }}
                    >
                        <img
                            src='/mirrorball.png'
                            alt=''
                            aria-hidden
                            className='w-5 h-5 object-contain'
                        />
                        <span>Activar música</span>
                    </Button>
                </div>
            ) : null}

            <audio
                ref={audioRef}
                src={src}
                preload='auto'
                playsInline
                style={{ display: 'none' }}
            />
        </>
    );
}
