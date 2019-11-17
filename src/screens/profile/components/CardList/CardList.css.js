import { profileColor } from '../../../../resources/colors/appColors';

const styles = {
    container : {
        width: '100%',
        textAlign: 'center',
        padding: '0'
    },

    title :{
        backgroundColor: profileColor.friendsCardTitle
    },

    card : {
        backgroundColor: profileColor.background,
        padding: '0px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
    }

}

export default styles;