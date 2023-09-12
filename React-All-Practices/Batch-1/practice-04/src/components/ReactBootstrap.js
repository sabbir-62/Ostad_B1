import React from 'react';
import {Button, Card} from 'react-bootstrap'

const ReactBootstrap = () => {
    return (
        <Card id = 'parent' className = 'm-5' style={{width : "400px"}}>
            <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Card.Text>
            <Button variant="secondary">Click Me</Button>
            </Card.Body>
        </Card>
    );
};

export default ReactBootstrap;