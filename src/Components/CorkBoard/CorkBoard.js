import React from 'react';
import Lesson from './Lesson';
import MainBoard from './MainBoard';
import FoundationalSkills from '../BottomHalf/FoundationalSkills';
import PhonicsFluency from '../BottomHalf/PhonicsFluency';
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
                theme={data.Theme}
                wtk1={data.wtk1}
                wtk2={data.wtk2}
                wtk3={data.wtk3}
                wtk4={data.wtk4}
                wtk5={data.wtk5}
                wtk6={data.wtk6}
            />
            <section className='bottom-half'>
                <div className='column first'>
                    <FoundationalSkills
                        theme={data.Theme}
                        wtk1={data.wtk1}
                        wtk2={data.wtk2}
                        wtk3={data.wtk3}
                        wtk4={data.wtk4}
                        wtk5={data.wtk5}
                        wtk6={data.wtk6}
                    />
                </div>
                <div className='column two'>
                    <PhonicsFluency
                        theme={data.Theme}
                        phonics={data.phonics}
                        phonics2={data.phonics2}
                        phonics3={data.phonics3}
                        phonics4={data.phonics4}
                        phonics5={data.phonics5}
                        fluency={data.Fluency}
                    />
                </div>
                <div className='column three'></div>
                <div className='column four'></div>
            </section>
        </div>
    );
};

export default CorkBoard;
