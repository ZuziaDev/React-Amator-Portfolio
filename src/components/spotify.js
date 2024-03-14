import React from 'react';
import useLanyard from '../hooks/useLanyard';
import { AiFillPlayCircle } from 'react-icons/ai';


// Lanyard API'den gelen verileri dinlemek için bir WebSocket bağlantısı kurun

function SpotifyPlayerCard() {
  const data = useLanyard();
  const spotifyStatus = data ? data.spotify : false;
  if (!spotifyStatus) {
    return (
      <div className="hontainer spotify-card-off">
        <div className="album-cover">
          <img srcSet="https://cdn.discordapp.com/avatars/1060713660286246912/1a97e605ad46028a547cd0e534fdcc81.png" alt="Albüm Kapağı" />
        </div>
        <div className="song-info">
          <p className='song'>SakuraAI</p>
          <p>{data?.discord_user.global_name}</p>
        </div>

        <div className="controls">
          <AiFillPlayCircle size={50} />
        </div>

      </div>
    );
  }

  return (
    <div className="hontainer spotify-card">
      <div className="album-cover">
        <img src={spotifyStatus.album_art_url} alt="Albüm Kapağı" />
      </div>
      <div className="song-info">
        <p className='song'>{spotifyStatus.song}</p>
        <p>{spotifyStatus.artist}</p>
      </div>
      <div className="controls">
        <a href={`https://open.spotify.com/intl-tr/track/${spotifyStatus.track_id}`}><AiFillPlayCircle size={50} /></a>
      </div>

    </div>
  );
}

export default SpotifyPlayerCard;
