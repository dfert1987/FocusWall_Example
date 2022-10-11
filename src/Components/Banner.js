import React from 'react';
import '../Styles/Banner.css';

const Banner = ({ data }) => {
    return (
        <div className='banner-container'>
            <div className='center-tab'>
                <span className='center-tab-top-line'>
                    <h4 className='domain'>DOMAIN: </h4>
                    <h4 className='domain-name'>
                        <b>{data.Domain}</b>
                    </h4>
                </span>
                <hr className='dotted-line' />
                <span className='center-tab-bottom-line'>
                    <h5 className='topic-tab left'>Lesson Topic: </h5>
                    <h5 className='topic-tab'>
                        <b>{data.Topic}</b>
                    </h5>
                </span>
            </div>
        </div>
    );
};

export default Banner;
