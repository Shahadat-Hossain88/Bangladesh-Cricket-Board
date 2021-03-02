import React, { useEffect, useState } from 'react';
import playersInfo from '../../data/data.json'
import Player from '../Players/Player';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './Home.css'


const Home = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(playersInfo);

    }, [])

    const [selectedPlayer, setSelectedPlayer] = useState([]);

    const handleAddPlayer = (player) => {
        const newPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newPlayer);
    }

    return (
        <div className="home-container">
            <div className="Player-home">
                <h1>Total Players: {players.length} </h1>
                {
                    players.map(players => <Player player={players} handleAddPlayer={handleAddPlayer}></Player>)
                }

            </div>
            <div className="selected-player">
                <SelectedPlayer selectedPlayer={selectedPlayer}>
                </SelectedPlayer>

            </div>

        </div>

    );
};

export default Home;