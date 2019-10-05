const styles = {

    header : {
        width:'100%',
        backgroundColor: 'lightblue',
        display: 'grid',
        gridTemplateRows: '3fr 1fr',
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
        backgroundColor:'grey',
    },

    liPage :{
        backgroundColor:'darkgrey',
    }
}

export default styles;