import React, { useEffect, useState } from 'react'

const useYouTubeAPI = () => {
    const [youTubeAPIReady, setYouTubeAPIReady] = useState(false);

    useEffect(() => {
        if (window.YT && typeof window.YT.Player === 'function') {
            setYouTubeAPIReady(true);
        } else {
            window.onYouTubeIframeAPIReady = () => {
                setYouTubeAPIReady(true);
            };
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, []);

    return youTubeAPIReady;
};

const VideoRead = () => {
    const youTubeAPIReady = useYouTubeAPI();
    
    useEffect(() => {
        if (youTubeAPIReady) {
            new window.YT.Player('player', {
                height: '250px',
                width: '300px',
                videoId: 'hvU0jbjk4gM',
                playerVars: {
                    'autoplay': 0,
                    'controls': 1,
                    'rel': 0,
                }
            });
        }
    }, [youTubeAPIReady]);

    return (
        <main className=''>
            <script src="https://www.youtube.com/iframe_api"></script>

            <section className='py-4 flex justify-center items-center '>
                <div className='w-[300px] h-[250px] ' id="player"></div>
            </section>
        </main>
    )
}

export default VideoRead