import React from 'react';
import { useHistory } from 'react-router-dom';
function quiz() {
    const history = useHistory();
    const navigateTo = () => history.push('/questions');
    return (
        <div className='homecontent'>
            <p>Quiz  App</p>
            <button className='homebutton' onClick={navigateTo}>Play</button>
        </div>
    )
}
export default quiz