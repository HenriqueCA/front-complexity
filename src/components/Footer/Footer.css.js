import {footerColor} from 'resources/colors/appColors.js';

const styles = {
    footer : {
        display: 'grid',
        gridTemplateRows: '3fr 1fr',
        backgroundColor:footerColor.background,
    },

    pages : {
        display:'grid',
        gridTemplateColumns: 'repeat(8,1fr)',
    },
    
    mainpages :{
        color:footerColor.mainPages,
    },
    
    subpages : {
        display:'block',
    },

    github :{
        display: 'inline',
    },
    
    git : {
        display: 'grid',
        gridTemplateColumns: 'repeat(10,1fr)',
        justifyItems: 'center',
    }
}

export default styles;