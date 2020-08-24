import React from 'react';
import LogoApp from '../images/logoApp.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsGrid3X3Gap as Dash, BsBell } from "react-icons/bs";
import { RiMenuLine as Humburger } from "react-icons/ri";
import { MdSearch as SearchIcon } from "react-icons/md";
import Avatar from "../images/thumb-1.jpg";


export class Navbar extends React.Component{
    state = {
        value: "ya" 
    }

    onSubmit = this.onSubmit.bind(this);
    

    handleSearchChange = (newValue) => {
        this.props.onSearchChange(newValue);
    }

    onSubmit(event){
        event.preventDefault();
        var query = this.input.value;
        this.setState({
            value: query
        }, () =>{
            this.handleSearchChange(this.state.value);
        })
    }

    render(){
        return (
            <Headers>
            <HeaderContainer>
                <LeftHeader>
                    <Link to="/">
                        <Humburger className="humberger-icon"/>
                    </Link>
                    <Link to="/" className="logo">
                        <img src={LogoApp} alt="Youtube Logo" />
                    </Link>
                </LeftHeader>
                <CenterHeader>
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text"
                            placeholder="Enter search term"
                            ref = {input => this.input = input}
                            to = "/subscription"
                            />
                        <button><SearchIcon /></button>
                    </form>
                   
                </CenterHeader>
                <RightHeader>
                    <Link to="/">
                        <SearchIcon className="nav-icon" id="search-icon" />
                    </Link>
                    <Link to="/">
                        <AiOutlineVideoCamera className="nav-icon" />
                    </Link >
                    <Link to="/">
                        <Dash className="nav-icon" />
                    </Link>
                    <Link to="/">
                        <BsBell className="nav-icon" />
                    </Link>
                    <Link to="/">
                        <img src={Avatar} alt="avatar" className="nav-icon"/>
                    </Link>   
                </RightHeader>
            </HeaderContainer>
            </Headers>
        );
    }
};

export default Navbar;

const Headers = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
    background:white;
`;

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 160px 1fr auto; 
    grid-template-rows: 1fr 0px 40%;
    padding: 8px 0;
    position: relative;
    @media only screen and (max-width: 600px){
        grid-template-columns: 50% 1fr auto; 
        grid-template-rows: 1fr 0px 40%;
    }
`;

const LeftHeader = styled.div`
    padding: 8px 20px;
    a{
        color: black;
    }
    .humberger-icon{
        font-size: 16px;
        margin-right: 20px;
    }
    .logo img{
        height: 1.1rem;
    }
    @media only screen and (max-width: 600px){
        padding: 16px;
        margin: auto 0;
        a{
            float: left;
        }
    }
`;

const CenterHeader = styled.div`
    margin: auto 46px;
    input{
        width: 60%;
        padding: 8px 12px;
        margin: auto;
        background: #ebebeb7a;
        border-radius: 22px 0 0 22px;
        border: none;
        outline: none;
        float: left;
    }
    button{
        padding: 7px 12px;
        margin: auto;
        border-radius: 0 22px 22px 0;
        background: #ebebeb7a;
        border: none;
        outline: none;
        color: #b3b3b3
    }
    @media only screen and (max-width: 720px){
        input, button{
            display: none;
        }
    }
    @media only screen and (max-width: 600px){
        display: none;
    }
`;

const RightHeader = styled.div`
    margin: auto 12px;
    a{
        padding: 16px; 
        color: #b3b3b3;
    }
    .nav-icon{
        font-size: 20px;
    }
    img{
        height: 24px;
        width: 24px;
        object-fit: cover;
        border-radius: 100%;
    }
    #search-icon{
        display: none;
    }
    @media only screen and (max-width: 720px){
        #search-icon{
            display: inline;
        }
    }
    @media only screen and (max-width: 600px){
        padding: 0px;
        margin: auto 0;
        a{
            float: left;
            font-size: 12px;
        }
        img{
            height: 18px;
            width: 18px;
            object-fit: cover;
            border-radius: 100%;
        }
        .nav-icon{
            font-size: 18px;
        }
    }
`;