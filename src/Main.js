import React, { useState } from 'react';
import Banner from './Components/Banner';
import CorkBoard from './Components/CorkBoard/CorkBoard';
import { Data } from './Assets/Data/Data';
import './Styles/Main.css';

function Main() {
    const [data, setData] = useState(Data[0]);

    return (
        <div className='container'>
            <Banner data={data} />
            <CorkBoard setData={setData} data={data}/>
        </div>
    );
}

export default Main;
