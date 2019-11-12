import React, {Component} from 'react';
import {Paper} from '@material-ui/core';

//TODO: STYLE BLOG LIST.
const BlogList = ({blog}) => {
    const author = blog.author.profile.name;
    const numLikes = blog.numlikes;
    const numDislikes = blog.numdislikes;
    const numComments = blog.comments.length;
    const title = blog.title;
    const id = blog.id;
    return (
        <Paper>

        </Paper>
    );
}

export default BlogList;