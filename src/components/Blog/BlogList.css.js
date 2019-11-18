import {blogListColors} from 'resources/colors/appColors';

const styles = {
    linkStyle:{
        textDecoration:'none'
    },

    blogList:{
        backgroundColor: blogListColors.background,
        marginBottom:'1%'
    },

    thumbsUp:{
        color:blogListColors.thumbsUp,
        marginLeft:'5%',
        marginBottom:'5%',
        marginRight:'5%'
    },
    
    thumbsDown:{
        color:blogListColors.thumbsDown,
        marginLeft:'5%',
        marginRight:'5%'
    },

    blogInfo:{
        flex:1,
    },

    aval:{
        margin:'1%'
    },
    comments:{
        marginRight:'2%',
        color:blogListColors.comment
    }
    
}

export default styles;