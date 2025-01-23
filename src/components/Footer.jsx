import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white py-10 text-center'>
             <p>Blogger © {new Date().getFullYear()} - All right reserved</p>
        </div>
    );
};

export default Footer;