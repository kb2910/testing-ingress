import React from 'react';
import './SongItem.css';

const SongItem = ({ song, onVote }) => {
  return (
    <li className="song-item">
      <div className="song-info">
        <p>🎵 <strong>{song.title}</strong></p>
        <p>👤 {song.username}</p>
        <p>🎤 {song.artist}</p>
      </div>
      <div className="song-votes">
        <button onClick={() => onVote(song.id)}>❤️</button>
        <span>{song.votes}</span>
      </div>
    </li>
  );
};

export default SongItem;