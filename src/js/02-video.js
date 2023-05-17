import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeKey = 'videoplayer-current-time';

player.on('play', function() {
  console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});

const onTimeUpdate = throttle(function(event) {
  localStorage.setItem(currentTimeKey, event.seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);

const savedTime = localStorage.getItem(currentTimeKey);
if (savedTime) {
  player.setCurrentTime(savedTime).catch(function(error) {
    console.log('Failed to set current time:', error);
  });
}