import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Box} from '@material-ui/core';
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
        let url = window.location.href;
        url = new URL(url);
        let title = url.searchParams.get("title");
        let author = url.searchParams.get("author");
        let body = url.searchParams.get("body");
        try {
            let response;
            if(title){
                response = await blogRoutes.searchByTitle(title);
            }

            else if(author){
                response = await blogRoutes.searchByAuthor(author);
            }
            else if(body){
                response = await blogRoutes.searchByBody(body);
            }

            if(response.status === 200){
                this.setState({blogs: response.data.query});
            }
        } catch (error) {
            //alert('Oops. Something went wrong');
        }
    }

    listBlogs = () => {
        let { blogs } = this.state;
        let content = [];
        blogs = [{
            author: {
                profile:{
                    name:'Henrique'
                }
            },
            numlikes:30,
            numdislikes:30,
            comments:['a','a','a'],
            title:'Questão feia',
            id:'42a'
        },{
            author: {
                profile:{
                    name:'Henrique'
                }
            },
            numlikes:30,
            numdislikes:30,
            comments:['a','a','a'],
            title:'Questão feia',
            id:'42a'
        },{
            author: {
                profile:{
                    name:'Henrique'
                }
            },
            numlikes:30,
            numdislikes:30,
            comments:['a','a','a'],
            title:'Questão feia',
            id:'42a'
        },{
            author: {
                profile:{
                    name:'Henrique'
                }
            },
            numlikes:30,
            numdislikes:30,
            comments:['a','a','a'],
            title:'Questão feia',
            id:'42a'
        },{
            author: {
                profile:{
                    name:'Henrique'
                }
            },
            numlikes:30,
            numdislikes:30,
            comments:['a','a','a'],
            title:'Questão feia',
            id:'42a'
        }];
        if (blogs) {

            blogs.forEach(element => {
                content.push(<BlogList blog={element} />);
            });
        }

        return content;

    }


    render() {
        return (
            <>
                <Header />
                    <BlogHeader/>
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