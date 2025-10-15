import React, { useState, useEffect } from 'react';
import './styles/App.css';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');
  const [songs, setSongs] = useState(() => {
    const defaultSongs = [
      { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', username: 'User1', votes: 5 },
      { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', username: 'User2', votes: 10 },
      { id: 3, title: 'Hotel California', artist: 'Eagles', username: 'User3', votes: 3 },
    ];

    if (typeof window === 'undefined') {
      return defaultSongs;
    }

    try {
      const savedSongs = localStorage.getItem('songs');
      return savedSongs ? JSON.parse(savedSongs) : defaultSongs;
    } catch (error) {
      console.error('Error parsing songs from localStorage', error);
      return defaultSongs;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('songs', JSON.stringify(songs));
    }
  }, [songs]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addSong = (song) => {
    setSongs([...songs, { ...song, id: Date.now(), votes: 0 }]);
  };

  const handleVote = (songId) => {
    setSongs(songs.map(song =>
      song.id === songId ? { ...song, votes: song.votes + 1 } : song
    ));
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <SongForm addSong={addSong} />
        <SongList songs={songs} onVote={handleVote} />
      </main>
    </div>
  );
}

export default App;