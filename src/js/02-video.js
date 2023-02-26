// Додаю бібліотеку як залежність проекту через npm https://github.com/vimeo/player.js/#vimeo-player-api

// Ініціалізуація плеєра https://github.com/vimeo/player.js/#pre-existing-player
import Player from '@vimeo/player';

console.log(Player);

// Ініціалізуація бібліотеку lodash.throttle
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

// Ініціалізуація плеєра https://github.com/vimeo/player.js/#pre-existing-player
const vimeoPlayer = new Player(iframe);

// Відстеження події timeupdate https://github.com/vimeo/player.js/#events
vimeoPlayer.on('timeupdate', throttle(onPlay, 1000, { leading: false }));

currentTimeChecker();

// Створюємо локальне сховище
function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

// Застосовуємо метод setCurrentTime() для відтворення останнього місця програвання https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror
function currentTimeChecker() {
    if (getCurrentTime()) {
        vimeoPlayer.setCurrentTime(getCurrentTime());
    }
}

// функція повернення зі сховища значення з ключем 'videoplayer-current-time'
function getCurrentTime() {
    return localStorage.getItem('videoplayer-current-time');
}





    // import Player from '@vimeo/player';
    
    // import throttle from 'lodash.throttle';


    // const iframe = document.querySelector('iframe');
    // const player = new Player(iframe);

    // const onPlay = ({ seconds }) => {   
    //     localStorage.setItem("videoplayer-current-time", seconds);
    // };
    

    // player.on('timeupdate', throttle(onPlay, 1000));
    
    
    // player.setCurrentTime(localStorage.setItem("videoplayer-current-time"));