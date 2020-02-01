import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

describe('App', () => {
  function setup() {
    const fetchArtistsMock = jest.fn();
    const fetchSongsMock = jest.fn();

    const songs = [{ title: 'Song1' }];
    const artists = [{ name: 'Artist1' }];

    return {
      songs,
      artists,
      fetchArtistsMock,
      fetchSongsMock
    };
  }

  it('renders without crashing', () => {
    const { songs, artists, fetchArtistsMock, fetchSongsMock } = setup();
    const div = document.createElement('div');
    ReactDOM.render(
      <App
        fetchSongs={fetchSongsMock}
        fetchArtists={fetchArtistsMock}
        songs={songs}
        artists={artists}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
