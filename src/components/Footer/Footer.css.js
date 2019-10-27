import { footerColor } from 'resources/colors/appColors.js';

const styles = {
    footer: {
        backgroundColor: footerColor.background,
        padding:'0.5%',
    },

    pagesContainer: {
        paddingBottom:'0.5%',
    },

    github: {
        color: 'black',
    },

    git: {
        color: footerColor.gitLinks,
        textDecoration: 'none',
    },

    footerLinks: {
        color: footerColor.footerLinks,
        textDecoration: 'none',
    }
}

export default styles;