import React from 'react';
import '../../Styles/Lesson.css';

const Lesson = ({ number }) => {
    return (
        <div className='lesson'>
            <div className='lesson-header'>
                <div className='lesson-box'>
                    <h2 className='lesson-text'>LESSON</h2>
                    <h2 className='lesson-number'>{number}</h2>
                </div>
                <h1 className='focus-wall'>FOCUS WALL</h1>
            </div>
        </div>
    );
};

export default Lesson;
