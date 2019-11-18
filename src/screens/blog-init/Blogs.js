import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box } from '@material-ui/core';
import { blogRoutes } from 'library/routes/backendRequest';
import BlogHeader from '../../components/Blog/BlogHeader';
import BlogList from '../../components/Blog/BlogList';
import styles from './Blogs.css.js';

class Blogs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'Recentes',
            blogsByTime: undefined,
            blogsByLikes: undefined,
        }
    }

    async componentDidMount() {
        try {
            let responseTime = await blogRoutes.listByTime();
            let responseLike = await blogRoutes.listByLike();
            let blogsByTime = responseTime.data.query;
            blogsByTime.reverse();
            let blogsByLikes = responseLike.data.query;
            this.setState({ blogsByLikes, blogsByTime });
        } catch (error) {
            console.log(error);
            //TODO: Handle Response.
        }
    }

    listBlogs = () => {
        const { blogsByTime, blogsByLikes, order } = this.state;
        let list;
        if (order === 'Recentes') {
            list = blogsByTime;
        } else {
            list = blogsByLikes;
        }
        let content = []

        if (list) {
            list.forEach(element => {
                content.push(<BlogList blog={element.blog} />);
            });
        }

        return content;

    }


    render() {
        return (
            <>
                <Header />
                <BlogHeader orderBar changeOrder={(ord) => { this.setState({ order: ord }) }} />
                <Container style={styles.listBlogs}>
                    <Box display='flex' flexDirection='column' style={styles.listBlogs}>
                        {this.listBlogs()}
                    </Box>
                </Container>
                <Footer />
            </>
        )
    }

}

export default Blogs;