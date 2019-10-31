import React from 'react';
import styles from './UserEditProfile.css';
import { Card, Typography, Container, Paper, Grid, TextField } from '@material-ui/core';


class UserEditProfile extends React.Component {
     render(){
         return(
        <Container style={styles.size}>
            <Card style={styles.card}>
                <Paper>
                    <Grid container direction="column">
                        <Grid container direction="row" alignItems="center">
                            <Typography item xs={6}>
                                Nome:
                            </Typography>
                            <TextField item xs={6}
                            />
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Typography>
                                Instituição:
                            </Typography>
                            <TextField 
                            />
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Typography>
                                Cidade:
                            </Typography>
                            <TextField 
                            />
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Typography>
                                Estado:
                            </Typography>
                            <TextField 
                            />
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Typography>
                                País:
                            </Typography>
                            <TextField 
                            />
                        </Grid>







                    </Grid>
                </Paper>
            </Card>
        </Container>
        )
    }
}

export default UserEditProfile;