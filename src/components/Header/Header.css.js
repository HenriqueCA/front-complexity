import { headerColor } from 'resources/colors/appColors.js';

const styles = {

    header: {
        padding: 0,
        backgroundColor: headerColor.background
    },

    link: {
        flex: '1',
        textAlign: 'center',
        padding:'1%',
        color: headerColor.linkColor,
        backgroundColor: headerColor.containerColor,
        textDecoration: 'none',
    },

    linkCurrent: {
        color: headerColor.linkCurrentColor,
        backgroundColor: headerColor.containerCurrentColor,
    },

    headerLinks: {
        textDecoration: 'none',
        fontWeight:'bold',
        color: headerColor.headerLinksColor,
    },

    headerLinksLogged: {
        color: headerColor.headerLinksLoggedColor,        
    },

    title: {
        padding:'1%',
        color: headerColor.titleColor,
    }

}

export default styles;