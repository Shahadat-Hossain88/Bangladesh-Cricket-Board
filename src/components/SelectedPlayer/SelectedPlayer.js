import React from 'react';

const SelectedPlayer = (props) => {
    
    let selectedPlayer = props.selectedPlayer;
    

    let total = 0,salary=0 ;
    let playerName=[];

    for (let i = 0; i <selectedPlayer.length; i++){
        const player = selectedPlayer[i];
        total = total + player.salary;
        playerName += player.name +",";
        salary = salary +player.salary +" ,";
    }

    

    return (
        <div className="selected">
            <h1>SELECT FOR CLUB</h1>
            <h2> Selected Player: {selectedPlayer.length} </h2>
            <h5>All Players Name:{playerName}</h5>
            <p>Salary:{salary}</p>
            <h3>Total Budget: {total}</h3>
        </div>
    );
};

export default SelectedPlayer;