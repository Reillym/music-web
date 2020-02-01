import React from 'react';

const AudioPlayer = () => {
  return (
    <audio controls src="/media/examples/t-rex-roar.mp3">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
};

export default AudioPlayer;
