import React from 'react';
import styles from './UserInventory.css';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Scroll from 'components/Scroll/Scroll';

const itemList = [
    'https://i.pinimg.com/originals/a8/54/3d/a8543d8b0831e574da5dd03bda205b7a.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMODu8XqGY7yn-RTXJzSEdEVdrsK9Cp7myPYxPGWRSKHNS0uBHBA&s',
    'https://gamepedia.cursecdn.com/pathofexile_gamepedia/9/92/Mosaic_Kite_Shield_inventory_icon.png',
    'https://db4sgowjqfwig.cloudfront.net/images/3429802/magicrod.png',
    'https://cdn11.bigcommerce.com/s-fgvmf62le/images/stencil/1024x1024/products/652/2186/pin-fractured-xanion-sword__31417.1560486196.png?c=2',
    'https://vignette.wikia.nocookie.net/elderscrolls/images/2/20/Hrormir%27s_Icestaff.png/revision/latest?cb=20120227190257',
    'https://cdn11.bigcommerce.com/s-fgvmf62le/images/stencil/1024x1024/products/645/2168/pin-fractured-phyrexius-sword__38308.1560483660.png?c=2',
    'https://www.qtoptens.com/wp-content/uploads/2017/08/staffofthefroststormmonarch.png',
    'http://reinodevalarior.weebly.com/uploads/2/2/1/8/22187530/869527.png',
    'https://tr.rbxcdn.com/3ca495d0a21c41d99854ad7cf93fb270/420/420/Gear/Png',
    'https://i.pinimg.com/originals/59/6e/ef/596eefdc673f7d117fea8a14d5028ad6.png',
    'https://i.pinimg.com/originals/27/b1/14/27b114fad8a65667619308395fdd9aef.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQnRY99i4P2TBvm6D0S6rce9upHhgq7bCGtFfFLgjB4M_kzgqmA&s',
    'http://hogwartshabbinchotel.weebly.com/uploads/1/8/5/2/18520316/1409935.gif?331',
    'https://i.pinimg.com/originals/bd/11/0c/bd110c2ced41c25f4a7e121baf335eb9.png',
    'https://www.qtoptens.com/wp-content/uploads/2017/08/staffofincineration.png',
    'https://i.pinimg.com/originals/c9/4c/2d/c94c2de4ceb47e56d21180ed538b1487.png',
    'https://opengameart.org/sites/default/files/bag_1.png',
    'https://i.pinimg.com/originals/95/66/42/956642128d8be6a6805ff5cb977086eb.png',
]

const items = () => {
    let content = [];
    itemList.forEach(element => {
        let item = (
            <Grid item xs={2}>
                <Paper style={styles.itemContainer}>
                    <Container style={styles.imgContainer}>
                        <img src={element} style={styles.img} />
                    </Container>
                    <Typography variant='caption'>Unnamed Item x{Math.ceil(Math.random(10) * 10)}</Typography>
                </Paper>
            </Grid>
        )
        content.push(item);
    });

    return content;

}

//TODO: MOCK INVENTORY.
const UserInventory = () => {
    return (
        <Container style={{ padding: 0 }}>
            <Scroll height='60vh'>
                <Grid container spacing={3} >
                    {items()}
                </Grid>
            </Scroll>
        </Container>
    );
}

export default UserInventory;