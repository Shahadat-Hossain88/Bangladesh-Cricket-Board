import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = (props) => {
    console.log(props);
    const { name, img, gender, age, salary, birth } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div>
            <div className="player-container">

              <div className="bootstrap-div">
              <CardDeck className="row  row-cols-md-1 bootstrap-player">
                    <Card className="col bootstrap-player-col">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Text>
                                <h2>Name:  {name}</h2>
                                <h4>Date of Birth: {birth}</h4>
                                <h4>Age: {age}</h4>
                                <h4>Gender: {gender}</h4>
                                <h4>Salary: {salary}</h4>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="success" onClick={() => handleAddPlayer(props.player)} >  <FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>

                        </Card.Footer>
                    </Card>

                </CardDeck>
              </div>

            </div>


        </div>
    );
};

export default Player;