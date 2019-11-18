import {forgotColor} from 'resources/colors/appColors.js';
import { flexbox } from '@material-ui/system';

const styles = {
    main : {
        textAlign:'center',
        height:'80vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    input : {
        backgroundColor:forgotColor.input,
    },

    button : {
        backgroundColor:forgotColor.button,
        color:forgotColor.text,
        width:'30%',
        margin:'10%',
    }
}

export default styles