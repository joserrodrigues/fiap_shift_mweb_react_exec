import React from 'react';
import './Home.css';

function HomeView({ count, onClickButton}) {
    return (
        <>
            <div className="App">Contador - {count}  </div>
            <div className='buttonDiv'>
                <button className='button' onClick={onClickButton}>Adicionar</button>
            </div>
            
        </>
    );
}
export default HomeView;