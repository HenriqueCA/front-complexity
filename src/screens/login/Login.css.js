import {loginColor} from 'resources/colors/appColors.js'

const styles = {
    main : {
        height:'80vh',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',

    },

    input : {
        backgroundColor:loginColor.input,
    },

    button : {
        backgroundColor:loginColor.button,
        color:loginColor.text,
        width:'30%',
        margin:'10%',
    },
    
    link : {
        alignSelf:'flex-start',
    }
}

export default styles;