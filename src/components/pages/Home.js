import React from 'react';
import styled from 'styled-components';
import  Thumbnail  from '../commons/Thumbnail.js';
import Axios from 'axios';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thumbnails : []
        }
    }

    componentWillMount() {
        this.performSearch(this.props.data)  
    }

    componentWillUpdate(){
        this.performSearch(this.props.data)  
    }
    
    performSearch(){
        Axios.get("https://api.themoviedb.org/3/search/movie?&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + this.props.data)
        .then(res => {
            const thumbnails = res.data.results
            this.setState({thumbnails})
        }).catch(err => console.log(err))
    }
    render(){
        const urlString = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" 
        return(
            <>   
                <ThumbnailContent>
                    {
                        this.state.thumbnails.map((row, index) => {
                           
                            return(
                                <Thumbnail key={row.id}
                                    title={row.title}
                                    desc={row.release_date}
                                    thumb={urlString+row.poster_path}
                                    vote={row.vote_average}
                                />
                            )
                        })
                    }
                </ThumbnailContent>
            </>
        )
    } 
}

const ThumbnailContent = styled.div`
    display: grid;  
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto; 
    grid-gap: 1.5rem;
    @media only screen and (max-width: 1080px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (max-width: 880px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 720px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default Home;