import React from 'react';
import '../../Styles/Phonics.css';

const PhonicsFluency = ({
    theme,
    phonics,
    phonics2,
    phonics3,
    phonics4,
    phonics5,
    fluency,
}) => {
    return (
        <div className='phonics-fluency-container'>
            <section className='phonics-container'>
                <div className='phonics-header'>
                    <h4 className='phonics-title'>Phonics</h4>
                </div>
                <div className='phonics-topics'>
                    <p>{phonics}</p>
                    <p>{phonics2}</p>
                    <p>{phonics3}</p>
                    <p>{phonics4}</p>
                    <p>{phonics5}</p>
                </div>
            </section>
            <section className='fluency-container'>
                <div className='phonics-header'>
                    <h4 className='phonics-title'>Fluency</h4>
                </div>
                <div className='phonics-topics'>{fluency}</div>
            </section>
        </div>
    );
};

export default PhonicsFluency;
