import React from 'react';
import { Paper, Typography, Box, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import styles from 'components/Blog/BlogList.css.js';

const BlogList = ({ blog }) => {
    const author = blog.author.profile.nick;
    const numLikes = blog.numlikes;
    const numDislikes = blog.numdislikes;
    const numComments = blog.comments.length;
    const title = blog.title;
    const id = blog.id;
    return (
        <Link style={styles.linkStyle} to={`/blog/page/?id=${id}`}>
            <Paper style={styles.blogList}>
                <Box display='flex'>
                    <Box display='flex' alignItems='center' style={styles.aval}>
                        <Typography>{numLikes}</Typography>
                        <FontAwesomeIcon icon={faThumbsUp} style={styles.thumbsUp} />
                        <Typography>{numDislikes}</Typography>
                        <FontAwesomeIcon icon={faThumbsDown} style={styles.thumbsDown} />
                    </Box>
                    <Container style={styles.blogInfo}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='caption'>Postado por {author}</Typography>
                        </Box>
                        <Typography variant='h5'>{title}</Typography>
                    </Container>
                    <Box display='flex' style={styles.comments} alignItems='center'>
                        <Typography>{numComments}</Typography>
                        <FontAwesomeIcon style={styles.commentIcon} icon={faCommentAlt} />
                    </Box>
                </Box>
            </Paper>
        </Link>
    );
}

export default BlogList;