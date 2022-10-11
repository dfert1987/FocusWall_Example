import React from 'react';
import Lesson from './Lesson';
import MainBoard from './MainBoard';
import '../../Styles/CorkBoard.css';

const CorkBoard = ({ data }) => {
    return (
        <div className='frame'>
            <Lesson number={data.Lesson} />
            <MainBoard
                idea={data.BigIdea}
                titleOne={data.ReadTogether}
                genreOne={data.ReadTogetherGenre}
                imageOne={data.ReadTogetherImage}
                titleTwo={data.ReadTogetherTwo}
                genreTwo={data.ReadTogetherTwoGenre}
                imageTwo={data.ReadTogetherTwoImage}
                question={data.EssentialQuestion}
            />
        </div>
    );
};

export default CorkBoard;
