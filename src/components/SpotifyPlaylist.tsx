import Button from './Button';

const SpotifyPlaylist = () => {
    return (
        <section
            id='playlist'
            className='
                flex
                flex-col
                items-center
                gap-10
                px-6
                pb-32
                pt-16
                md:pb-36
                md:pt-24
                bg-[rgb(var(--color-bg)/1)]
            '
        >
            {/* ICONO */}
            <img
                src='/mirrorball.png'
                alt='Música'
                className='w-12 h-16 md:w-14 md:h-18 mx-auto'
            />

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
                Música
            </h3>

            {/* DESCRIPCIÓN */}
            <p
                className='
                    max-w-md
                    text-center
                    text-[14px]
                    md:text-[15px]
                    leading-[1.7]
                    text-[#6f6f63]
                '
            >
                Ayudanos a armar la playlist perfecta para la fiesta.
                <br />
                ¡Agregá tus canciones favoritas!
            </p>

            {/* BOTÓN PARA AGREGAR CANCIONES */}
            <a
                href='https://open.spotify.com/playlist/31mh9Qb0oMBQGGgFHdUyJN?si=-qLH6C36T4iRG5ZzjD1IrA&pi=tIH7XPgHSYGtS&pt=d952b109286b13a03aac8f52be1ec814'
                target='_blank'
                rel='noopener noreferrer'
            >
                <Button
                    variant='primary'
                    size='md'
                >
                    Agregar canciones
                </Button>
            </a>

            {/* SPOTIFY EMBED */}

            <iframe
                data-testid='embed-iframe'
                className='border-radius:12px pointer-events-none'
                src='https://open.spotify.com/embed/playlist/31mh9Qb0oMBQGGgFHdUyJN?utm_source=generator'
                width='100%'
                height='352'
                frameBorder='0'
                allowFullScreen={true}
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
            />
        </section>
    );
};

export default SpotifyPlaylist;
