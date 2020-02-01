import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { AppState } from './store';
import { fetchArtistsRequest } from './store/artist/actions';
import { fetchSongsRequest } from './store/songs/actions';
import { getAllSongs } from './store/songs/reducers';
import { getAllArtists } from './store/artist/reducers';
import NavBar from './components/common/NavBar';
import SideNav from './components/common/SideNav';

const Container = styled.main`
  display: flex;
  background-color: #343435;
  min-height: 100vh;
  display: flex;
  font-size: calc(10px + 1.1vmin);
  color: white;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  padding: 2em;
`;

interface Props {
  fetchArtists: typeof fetchArtistsRequest;
  fetchSongs: typeof fetchSongsRequest;
  songs: { title: string }[];
  artists: { name: string }[];
}

export class App extends React.Component<Props> {
  componentDidMount() {
    const { fetchArtists, fetchSongs } = this.props;
    fetchArtists();
    fetchSongs();
  }

  render() {
    const { artists, songs } = this.props;

    return (
      <Container className="App">
        <SideNav />
        <Content className="App-header">
          <NavBar />
          <ContentContainer>
            <h1>Browse </h1>
            <h2>Top Artists</h2>
            {artists && artists.map((a, i) => <li key={`${a.name}${i}`}>{a.name}</li>)}
            <h2>New Releases</h2>
            {songs && songs.map((s, i) => <li key={`${s.title}${i}`}>{s.title}</li>)}
          </ContentContainer>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  artists: getAllArtists(state),
  songs: getAllSongs(state)
});

export default connect(mapStateToProps, {
  fetchArtists: fetchArtistsRequest,
  fetchSongs: fetchSongsRequest
})(App);
