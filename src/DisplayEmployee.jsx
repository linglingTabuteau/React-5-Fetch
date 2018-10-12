import React from 'react';

const DisplayEmployee = ({ employee }) => {
    return (
        <div className="DisplayEmployee">
            <img src={employee.image} alt="picture" />
            <ul>
                <li> quote: {employee.quote}</li>
                <li> Character : {employee.character}</li>
                <li>
                    Name :{employee.character}
                </li>
                <li>CharacterDirection : {employee.characterDirection}</li>
            </ul> 
        </div>
    );
};

export default DisplayEmployee;