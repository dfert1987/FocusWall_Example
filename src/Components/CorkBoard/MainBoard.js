import React from 'react';
import '../../Styles/MainBoard.css';

const MainBoard = ({
    idea,
    titleOne,
    genreOne,
    imageOne,
    titleTwo,
    genreTwo,
    imageTwo,
    question,
}) => {
    return (
        <div className='mainboard'>
            <h3 className='idea'>
                <b>BIG IDEA: </b>
                {idea}
            </h3>
            <div className='book-question'>
                <section className='book-section'>
                    <div className='book-card first'>
                        <img
                            src={imageOne}
                            alt='What is a Pal?'
                            class='book-image first'
                        />

                        <div className='under-image'>
                            <h3 className='book-title'>{titleOne}</h3>
                            <h5 className='book-genre'>
                                <b className='book-bold'>GENRE: </b> {genreOne}
                            </h5>
                            <div className='text-type'>
                                <h5 className='anchor-text'>ANCHOR TEXT</h5>
                            </div>
                        </div>
                    </div>
                    <div className='book-card second'>
                        {' '}
                        <img
                            src={imageTwo}
                            alt='What is a Pal?'
                            class='book-image first'
                        />
                        <div className='under-image'>
                            <h3 className='book-title'>{titleTwo}</h3>
                            <h5 className='book-genre'>
                                <b className='book-bold'>GENRE: </b> {genreTwo}
                            </h5>
                            <div className='text-type'>
                                <h5 className='anchor-text'>READ TOGETHER</h5>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='vl'></div>
                <section className='question-section'>
                    <h3 className='question-header'>ESSENTIAL QUESTION:</h3>
                    <h4 className='question-text'>{question}</h4>
                </section>
            </div>
        </div>
    );
};

export default MainBoard;
