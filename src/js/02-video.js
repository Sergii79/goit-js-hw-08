
    import player from '@vimeo/player';
    
    import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new player(iframe);

    const onPlay = ({ seconds }) => {   
        localStorage.setItem("videoplayer-current-time", seconds);
    };
    

    player.on('play', throttle(onPlay, 1000));
    
    
    player.setCurrentTime(localStorage.setItem("videoplayer-current-time"));
    
    


   

