import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box } from '@material-ui/core';
import { blogRoutes } from 'library/routes/backendRequest';
import BlogHeader from '../../components/Blog/BlogHeader';
import BlogList from '../../components/Blog/BlogList';
import styles from './SearchBlog.css.js';

class SearchBlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: undefined,
        }
    }

    async componentDidMount() {
        await this.search();
    }

    search = async () => {
        let url = window.location.href;
        url = new URL(url);
        let title = url.searchParams.get("title");
        let author = url.searchParams.get("author");
        let body = url.searchParams.get("body");
        try {
            let response;
            if (title !== null) {
                response = await blogRoutes.searchByTitle(title);
            }

            else if (author !== null) {
                response = await blogRoutes.searchByAuthor(author);
            }
            else if (body !== null) {
                response = await blogRoutes.searchByBody(body);
            }
            this.setState({ blogs: response.data.query });
        } catch (error) {
            console.log(error);
            //TODO: Handle Error.
        }
    }

    listBlogs = () => {
        let { blogs } = this.state;
        let content = [];
        if (blogs) {

            blogs.forEach(element => {
                content.push(<BlogList blog={element.blog} />);
            });
        }

        return content;

    }


    render() {
        return (
            <>
                <Header />
                <BlogHeader makeSearch={this.search} />
                <Container style={styles.listBlogs}>
                    <Box display='flex' flexDirection='column'>
                        {this.listBlogs()}
                    </Box>
                </Container>
                <Footer />
            </>
        )
    }

}

export default SearchBlog;