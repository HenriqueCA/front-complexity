import { forgotColor } from 'resources/colors/appColors.js';
const styles = {

    container: {
        padding:0
    },
    
    title:{
        alignSelf:'center'
    },

    accountTitle: {
        alignSelf:'center',
        marginTop:'2%',
    },

    button: {
        backgroundColor: forgotColor.button,
        color: forgotColor.text,
        width: '50%',
        margin: '3%',
        alignSelf: 'center'
    },

    label: {
        alignSelf: 'center',
        marginRight: '1%',
        whiteSpace: 'nowrap'
    },

    imagePreview: {
        alignSelf: 'center', margin: '1%', height: '140px', width: '140px', border: 'solid black'
    },

}

export default styles;