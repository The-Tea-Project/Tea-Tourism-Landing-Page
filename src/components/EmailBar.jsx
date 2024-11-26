import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
function EmailBar() {
    const [email, setEmail] = useState('shrikarlekkala@metafrazocc.com');
    const [subject, setSubject] = useState('Email from Metafrazo');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_email: email,
            subject,
            message,
        };

        emailjs
            .send(
              
            )
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Email sent successfully');
                setMessage('');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send email');
            });
    };

    return (
        <>
            <div
                style={{
                    boxShadow: "0px 0px 64px 0px #0A47F226"
                }}
                className="lg:w-[728px] w-11/12 flex rounded-full bg-white lg:h-[67px]  justify-between items-center ">
                <input type='text' onChange={(e) => setMessage(e.target.value)} className="lg:text-[18px] outline-none focus:outline-none w-full rounded-full text-[14px] lg:px-[32px] p-4 text-[#0E0E0C] opacity-50 font-satoshiMed" placeholder='E-mail' />
                <button onClick={sendEmail} className="lg:text-[18px] text-[14px] p-3 font-bold font-satoshi bg-[#0A47F2] flex items-center justify-center text-white rounded-full w-[107px] mr-2">Send</button>
            </div>
        </>)
}

export default EmailBar