import React, { useState } from 'react';

function Contact({ contact }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const webhookUrl = 'https://api.zuzia.dev/hooks/zuzia.dev';

    async function sendMessageToDiscord(body) {
        

        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            console.log('Mesaj başarıyla gönderildi.');
        } catch (error) {
            console.error('Hata oluştu:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email && formData.name && formData.message) {
            await sendMessageToDiscord(formData)
            console.log('Form verileri:', formData);
                window.location.href = '/'; // Ana sayfanın URL'sini buraya ekleyin
        } else {
            alert("Lütfen tüm alanları doldurun.")
            console.error('Lütfen tüm alanları doldurun.');
        }
    };

    return (
        <div className={contact ? 'contact active' : 'contact'}>
            <div className="hontainer contact">

            <form onSubmit={handleSubmit}>
            
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Adınız:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            style={{"background-color": "transparent", "color":"white", "width":"700px","margin":"auto"}}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            E-posta:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            style={{"background-color": "transparent", "color":"white", "width":"700px","margin":"auto"}}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Mesajınız:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            style={{"background-color": "transparent", "color":"white", "width":"700px","margin":"auto"}}
                        />
                    </div>
                    <button type="submit" className="btn a-btn" style={{"color":"white"}}>
                        Gönder
                    </button>
                </form>
                <br/><br/>

                <p>
                    <a href="/" className="a-btn">
                        Home
                    </a>
                    <a href="/about" className="a-btn">
                        About
                    </a>
                </p>
                
            </div>
        </div>
    );
}

export default Contact;
