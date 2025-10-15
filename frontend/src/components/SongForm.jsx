import React, { useState } from 'react';
import './SongForm.css';

const SongForm = ({ addSong }) => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !title || !artist) return;
    addSong({ username, title, artist });
    setUsername('');
    setTitle('');
    setArtist('');
  };

  return (
    <div className="song-form">
      <h2>Formulario de Solicitudes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Nombre de Usuario: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label> Nombre de la Canción :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label> Artista: </label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>
  );
};

export default SongForm;
