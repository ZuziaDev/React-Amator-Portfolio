import React from 'react';
import useLanyard from '../hooks/useLanyard';


// Lanyard API'den gelen verileri dinlemek için bir WebSocket bağlantısı kurun

function Profile(){
  const user  = useLanyard();
 const data = user ? user : { discord_user :{avatar:"2cab262aebc7bb123587c1b97e4ee034", global_name:"Zuziâ RodzeN"}, discord_status:"offline"};

  return (
    <div>
    <img
          src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`}
          alt={data.discord_user.global_name}
          srcSet={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`}
          className={`pfp ${data?.discord_status}`}
        />
        <h1>{data.discord_user.global_name}</h1>
        <h4>Hey selam ben {data.discord_user.global_name}</h4>
    </div>
  );
}

export default Profile;
