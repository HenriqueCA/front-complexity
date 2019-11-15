import React from 'react';
import styles from './UserInventory.css';
import { Card, Typography, Container } from '@material-ui/core';

//TODO: MOCK INVENTORY.
const UserInventory = () => {
    return (
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Typography>
                    Inventário
                </Typography>
            </Card>
        </Container>
    );
}

export default UserInventory;