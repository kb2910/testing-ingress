import React from 'react';
import SongItem from './SongItem';
import './SongList.css';

const SongList = ({ songs, onVote }) => {
  const sortedSongs = [...songs].sort((a, b) => b.votes - a.votes);

  return (
    <div className="song-list-container">
      <div className="song-list">
        <h2> Listado de Solicitudes </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {sortedSongs.map(song => (
            <SongItem key={song.id} song={song} onVote={onVote} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongList;