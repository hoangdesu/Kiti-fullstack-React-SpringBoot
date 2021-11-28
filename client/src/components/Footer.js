import React from 'react';

const Footer = () => {
    return (
        <div
            style={{
                // margin: '10px 0',
                padding: '30px',
                backgroundColor: '#1a068a',
                color: '#f5ebf2',
            }}
        >
            <h3>Kiti - A Tiki's ripoff ¯\_(ツ)_/¯</h3>
            <p>
                A fullstack web developement project by{' '}
                <a
                    href="https://github.com/hoangdesu"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#b9aef2' }}
                >
                    Hoang Nguyen
                </a>
            </p>
        </div>
    );
};

export default Footer;
