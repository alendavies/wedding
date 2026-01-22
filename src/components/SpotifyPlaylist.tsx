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
                py-20
                md:py-28
                bg-[#f2f2ef]
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

            {/* SPOTIFY EMBED */}

            <iframe
                data-testid='embed-iframe'
                className='border-radius:12px'
                src='https://open.spotify.com/embed/playlist/31mh9Qb0oMBQGGgFHdUyJN?utm_source=generator'
                width='100%'
                height='352'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
            ></iframe>
        </section>
    );
};

export default SpotifyPlaylist;
