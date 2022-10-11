import React from 'react';
import Lesson from './Lesson';
import '../../Styles/CorkBoard.css';

const CorkBoard = ({ data }) => {
    return (
        <div className='frame'>
            <Lesson number={data.Lesson} />
        </div>
    );
};

export default CorkBoard;
