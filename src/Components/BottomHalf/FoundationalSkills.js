import React from 'react';
import '../../Styles/FoundationalSkills.css';

const FoundationalSkills = ({ theme, wtk1, wtk2, wtk3, wtk4, wtk5, wtk6 }) => {
    return (
        <div className='foundational-skills-container'>
            <div className='foundational-header'>
                <h5 className='foundational-skills-title'>
                    Foundational Skills
                </h5>
            </div>
            <div className='foundational-header-main'>
                <h3 className='foundational-skills-title-2'>Words to Know</h3>
                <h4 className='foundational-skills-title-3'>
                    High-Frequency Words
                </h4>
            </div>
            <div className='words-container'>
                <div className='column-1-words'>
                    <p>{wtk1}</p>
                    <p>{wtk2}</p>
                    <p>{wtk3}</p>
                </div>
                <div className='column-2-words'>
                    <p>{wtk4}</p>
                    <p>{wtk5}</p>
                    <p>{wtk6}</p>
                </div>
            </div>
        </div>
    );
};

export default FoundationalSkills;
