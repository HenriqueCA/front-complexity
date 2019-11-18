import {signupColor} from 'resources/colors/appColors.js'

const styles = {
    main : {
        textAlign:'center',
        height:'80vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    input : {
        backgroundColor:signupColor.input,
    },

    button : {
        backgroundColor:signupColor.button,
        color:signupColor.text,
        width:'30%',
        margin:'10%',
    }
}

export default styles;