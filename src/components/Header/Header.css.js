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
    },

    linkCurrent: {
        color: headerColor.linkCurrentColor,
        backgroundColor: headerColor.containerCurrentColor,
    }
}

export default styles;