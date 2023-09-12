import React from 'react';
import {v4 as uuidv4} from 'uuid'

const info = [
    {
        uuid: uuidv4(),
        name: "Sabbir",
        id: 1802162
    },
    {
        uuid: uuidv4(),
        name: "Mosh",
        id: 1702160
    },
    {
        uuid: uuidv4(),
        name: "Hasibul",
        id: 1802107
    },
    {
        uuid: uuidv4(),
        name: "Shahinur",
        id: 1802111
    },
    {
        uuid: uuidv4(),
        name: "Masum",
        id: 1802176
    }
]


const List = () => {
    return (
        <div>
            {info.map((item) => { 
            const {name, id, uuid} = item;
            
            return(
                
                <div key={uuid} >
                    <h3>{name}</h3>
                    <h3>{id}</h3>
                </div>
            )
          })}
        </div>
           
       
    );
};

export default List;