import { useEffect, useState } from 'react';

function useLanyard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.lanyard.rest/socket');

    ws.onopen = () => {
      // Bağlantı açıldığında mesaj gönder
      ws.send(JSON.stringify({
        op: 2, // Lanyard API için "SUBSCRIBE" işlem kodu
        d: { subscribe_to_id: "890626326350946364" }
      }));
    };

    ws.onmessage = event => {
      const response = JSON.parse(event.data);
      if (response.t === 'INIT_STATE' || response.t === 'PRESENCE_UPDATE') {
        setUser(response.d); // Durum güncellemelerini kaydet
      }
    };

    // WebSocket bağlantısını kapat
    return () => {
      ws.close();
    };
  }, []); // Bağımlılık dizisi olarak boş bir dizi kullanın

  return user;
}

export default useLanyard;