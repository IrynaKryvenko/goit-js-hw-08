import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function () {
  console.log('played the video!');
};


const onTimeupdate = throttle(function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);


player.on('play', onPlay);
player.on('timeupdate', onTimeupdate);

const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(currentTime);