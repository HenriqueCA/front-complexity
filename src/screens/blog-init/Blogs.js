import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Paper, Box} from '@material-ui/core';
import { blogRoutes } from 'library/routes/backendRequest';
import { BlogHeader } from '../../components/Blog/BlogHeader';
import {BlogList} from '../../components/Blog/BlogList';

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
            let response = await blogRoutes.listByTime();
            if (response.status === 200) {
                let blogs = response.data.query;
                blogs.reverse();
                this.setState({ blogsByTime: blogs });
            }

            response = await blogRoutes.listByLike();
            if (response.status === 200) {
                let blogs = response.data.query;
                this.setState({ blogsByLikes: blogs });
            }
        } catch (error) {
            //alert('Oops. Something went wrong');
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
        let content = [];
        if (list) {

            list.forEach(element => {
                content.push(<BlogList blog={element} />);
            });
        }

        return content;

    }


    render() {
        return (
            <>
                <Header />
                <Container style={{}}>
                    <BlogHeader orderBar changeOrder={(ord) => {this.setState({order: ord})}} />
                    <Box display='flex' flexDirection='column'>
                        {this.listBlogs()}
                    </Box>
                </Container>
                <Footer />
            </>
        )
    }

}

export default Blogs;