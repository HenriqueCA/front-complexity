import headerColor from '../../resources/colors/appColors.js';

const styles = {

    header : {
        width:'100%',
        backgroundColor: headerColor.background,
        display: 'grid',
        gridTemplateRows: '2fr 1fr',
        textAlign:'center',
    },

    div : {
        display: 'grid',
        gridTemplateColumns: 'repeat(6,1fr)',
    },

    options : {
        gridColumn:6,
        alignSelf: 'center',
    },

    ul : {
        margin:0,
        padding:0,
        border:0,
        listStyleType:'none',
        display:'grid',
        gridTemplateColumns: 'repeat(7,1fr)',

    },

    li :{
        backgroundColor:headerColor.navColor,
        display:'grid',
        alignItems:'center'
    },

    liPage :{
        backgroundColor:headerColor.pageColor,
    }
}

export default styles;