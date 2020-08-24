import React from 'react';
import styled from 'styled-components';

const ThumbWrapper = styled.div`
    padding: 0;
    box-sizing: border-box;
    :hover img{
    -webkit-transform: scale(1.3);
	transform: scale(1.3);
    }
    :hover{
        cursor: pointer;
    }
`;

const ThumbTime = styled.p`
    position: absolute;
    right: 6px;
    bottom: 8px;
    opacity: 80%;
    color: white;
    background: black;
    padding: 1rem;
    margin: 0;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
`;

const ThumbImage = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    

`;

const Image = styled.img`
    width: 100%;
    display: block;
    height: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
`;

const ThumbTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    color: #2d2d2d;
`;

const ThumbDesc = styled.p`
    font-size: 12px;
    color: #C2C2C2;
    padding: 0;
    margin: 0;
`;


class Thumbnail extends React.Component {
    render() {
        return (
            <ThumbWrapper >
                <ThumbImage>
                    <Image src={this.props.thumb} alt="Thumbnail Image"/>
                    <ThumbTime>{this.props.vote}</ThumbTime>
                </ThumbImage>
                <ThumbTitle>
                    {this.props.title}
                </ThumbTitle>
                <ThumbDesc>
                    {this.props.desc}
                </ThumbDesc>
            </ThumbWrapper>
        );
    }
}

export default Thumbnail;