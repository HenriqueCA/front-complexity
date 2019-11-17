import React from 'react';
import styles from './UserInventory.css';
import { Container, Grid, Paper, Typography, Modal } from '@material-ui/core';
import Scroll from 'components/Scroll/Scroll';


//MOCKED ITEMS
class UserInventory extends React.Component {
    itemList = [
        { name: 'Book of EXP', description: 'Esse item dá uma quantidade aleatória de 10 até 1000 de experiência.', qtd: 1, img: 'https://i.pinimg.com/originals/a8/54/3d/a8543d8b0831e574da5dd03bda205b7a.png' },
        { name: 'Axe of Axel', description: 'O machado do Axel é um machado antigo com uma história incrível. É perceptível a quantidade de demônios que esse aluno sanguinário extinguiu.', qtd: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMODu8XqGY7yn-RTXJzSEdEVdrsK9Cp7myPYxPGWRSKHNS0uBHBA&s' },
        { name: 'Shield of Trust', description: 'Um confiável escudo para um aventureiro em sua jornada.', qtd: 2, img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/9/92/Mosaic_Kite_Shield_inventory_icon.png' },
        { name: 'Staff of Archangel Lucas', description: 'Após uma guerra entre o céu e o inferno, o cajado do arcanjo foi perdido no purgatório. Que bom que você o encontrou.', qtd: 3, img: 'https://db4sgowjqfwig.cloudfront.net/images/3429802/magicrod.png' },
        { name: "Demon's Sword", description: 'Uma espada feita para eliminar seres celestiais.', qtd: 4, img: 'https://cdn11.bigcommerce.com/s-fgvmf62le/images/stencil/1024x1024/products/652/2186/pin-fractured-xanion-sword__31417.1560486196.png?c=2' },
        { name: 'Light Axe', description: 'Um machado básico. Espero que não seja de nenhum aluno sanguinário.', qtd: 9, img: 'https://i.pinimg.com/originals/bd/11/0c/bd110c2ced41c25f4a7e121baf335eb9.png' },
        { name: 'Bag of Coins', description: 'Esse item dá uma quantidade aleatória de 10 até 1000 de moedas.', qtd: 10, img: 'https://opengameart.org/sites/default/files/bag_1.png' },
        { name: 'Mysterious Book', description: 'Um livro misterioso. O que será que há dentro dele? Uma nova quest? Uma nova magia? Uma nova história? Ou talvez alguém apenas perdeu um livro básico e agora tem multa na biblioteca.', qtd: 2, img: 'https://i.pinimg.com/originals/95/66/42/956642128d8be6a6805ff5cb977086eb.png' },
        { name: 'Elvish Bow', description: 'Um arco poderoso que parece atirar por conta própria. Tome cuidado para não perder sua essência.', qtd: 7, img: 'https://i.pinimg.com/originals/c9/4c/2d/c94c2de4ceb47e56d21180ed538b1487.png' },
        { name: 'Staff of Incineration', description: 'Perfeito para piromaníacos.', qtd: 1, img: 'https://www.qtoptens.com/wp-content/uploads/2017/08/staffofincineration.png' },
        { name: 'Great Hat', description: 'Esse chapéu parece que fala. Talvez ele possa dizer pra você qual o próximo problema que ele deve fazer.', qtd: 1, img: 'http://hogwartshabbinchotel.weebly.com/uploads/1/8/5/2/18520316/1409935.gif?331' },
        { name: 'Light Shield', description: 'Um escudo que parece não ter sido feito para o guerreiro mais excepcional, porém parece bem durável.', qtd: 2, img: 'https://i.pinimg.com/originals/27/b1/14/27b114fad8a65667619308395fdd9aef.png' },
        { name: 'Dwarven shield', description: 'Um escudo feito pelos melhores ferreiros. Só parece um pouco pequeno.', qtd: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQnRY99i4P2TBvm6D0S6rce9upHhgq7bCGtFfFLgjB4M_kzgqmA&s' },
        { name: 'Angel Axe', description: 'Um machado feito para aniquilar demônios. Ou cortar madeira.', qtd: 5, img: 'https://i.pinimg.com/originals/59/6e/ef/596eefdc673f7d117fea8a14d5028ad6.png' },
        { name: 'Basic Sword', description: 'Uma espada para iniciantes. Em bom estado, mas não vai durar muito tempo nas mãos de um aventureiro como você.', qtd: 4, img: 'https://tr.rbxcdn.com/3ca495d0a21c41d99854ad7cf93fb270/420/420/Gear/Png' },
        { name: 'Infinity Orb', description: 'Esse Orb parece que consegue olhar algumas coisas que jamais seriam vistas pelo ser humano enquanto tenta submeter questões.', qtd: 1, img: 'http://reinodevalarior.weebly.com/uploads/2/2/1/8/22187530/869527.png' },
        { name: 'Frost Staff', description: 'Esse cajado parece parar o tempo. Mas parece que só pode ser usado pelos escolhidos.', qtd: 1, img: 'https://www.qtoptens.com/wp-content/uploads/2017/08/staffofthefroststormmonarch.png' },
        { name: 'Slime Sword', description: 'Uma espada feita do monstro mais fácil de derrotar que você já viu. Quer dizer, contanto que ele não tenha vindo de um mangá isekai.', qtd: 1, img: 'https://cdn11.bigcommerce.com/s-fgvmf62le/images/stencil/1024x1024/products/645/2168/pin-fractured-phyrexius-sword__38308.1560483660.png?c=2' },
        { name: 'Ice Staff', description: 'Parece que vai derreter nas suas mãos e é tão escorregadio!', qtd: 1, img: 'https://vignette.wikia.nocookie.net/elderscrolls/images/2/20/Hrormir%27s_Icestaff.png/revision/latest?cb=20120227190257' },
    ]

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            item: {},
        }
    }

    handleOpen = (element) => {
        this.setState({ open: true, item: element });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    items = () => {
        let content = [];
        this.itemList.forEach(element => {
            let item = (
                <Grid item xs={2} onClick={() => this.handleOpen(element)}>
                    <Paper style={styles.itemContainer} >
                        <Container style={styles.imgContainer}>
                            <img src={element.img} style={styles.img} alt='item' />
                        </Container>
                        <Typography variant='caption'>{element.name} x{element.qtd}</Typography>
                    </Paper>
                </Grid>
            )
            content.push(item);
        });

        return content;

    }

    showItem = () => {
        const { item } = this.state;
        return (
            <Container>
                <Container style={styles.imgShowContainer}>
                    <img src={item.img} style={styles.img} alt='item' />
                </Container>
                <Typography variant='h6'>Nome</Typography>
                <Typography>{item.name}</Typography>
                <Typography variant='h6'>Quantidade</Typography>
                <Typography>{item.qtd}</Typography>
                <Typography variant='h6'>Descrição</Typography>
                <Typography>{item.description}</Typography>
            </Container>
        )

    }

    render() {
        return (
            <Container style={styles.container}>
                <Scroll height='60vh'>
                    <Grid container spacing={3} >
                        {this.items()}
                    </Grid>
                    <Modal open={this.state.open} onClose={this.handleClose}>
                        <Paper style={styles.itemInfoContainer}>
                            {this.showItem()}
                        </Paper>
                    </Modal>
                </Scroll>
            </Container>
        );
    }

}

export default UserInventory;