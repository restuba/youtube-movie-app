import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AvaChannel from "../images/thumb-1.jpg";
import { MdWhatshot as TrendingIcon, MdHome as HomeIcon, MdSubscriptions as SubIcon,
    MdVideoLibrary as LibraryIcon, MdHistory as HistoryIcon, MdAccessTime as WatchIcon,
    MdOndemandVideo as FavIcon, MdFavoriteBorder as LoveIcon, MdSettings as SettingIcon}  from 'react-icons/md';

export const Sidebar = (props) => {
    return(
        <SidebarWrapper>
            <SidebarNav>
                <Link to="/"><HomeIcon className="nav-link"/>Home</Link>
                <Link to="/trending"><TrendingIcon  className="nav-link"/>Trending</Link>
                <Link to="/subscription"><SubIcon className="nav-link"/>Subscriptions</Link>
            </SidebarNav>
            <br />
            <SidebarNav>
                <Link to="/"><LibraryIcon className="nav-link"/>Library</Link>
                <Link to="/"><HistoryIcon className="nav-link"/>History</Link>
                <Link to="/"><FavIcon className="nav-link"/>Your videos</Link>
                <Link to="/"><WatchIcon className="nav-link"/>Watch later</Link>
                <Link to="/"><LoveIcon className="nav-link"/>Liked Videos</Link>
            </SidebarNav>

            <br />
            <SidebarNav className="sub-content">
                <TitleNav>Subscriptions</TitleNav>
                <Link to="/"><img src={AvaChannel} alt="AvaChannel"/><span>Gussie Singleton</span></Link>
                <Link to="/"><img src={AvaChannel} alt="AvaChannel"/><span>Gussie Singleton</span></Link>
                <Link to="/"><img src={AvaChannel} alt="AvaChannel"/><span>Gussie Singleton</span></Link>
                <Link to="/"><img src={AvaChannel} alt="AvaChannel"/><span>Gussie Singleton</span></Link>
            </SidebarNav>
            <br />
            <SidebarNav>
            <Link to="/"><SettingIcon className="nav-link"/>Setting</Link>
            </SidebarNav>
        </SidebarWrapper>
    )
}



const SidebarWrapper = styled.div`
    float: left;
    width: 14%;
    z-index: -1;
    padding-top: 56px;
    height: 100vh;
    overflow: scroll;
    box-sizing: border-box;
    @media only screen and (max-width: 1280px){
        width: 10%;
        z-index: -1;
        float: left;
        height: 100vh;
        padding-top: 56px;
        overflow: scroll;
        box-sizing: border-box;
    }
    @media only screen and (max-width: 720px){
        display: none;
    }
`;

const SidebarNav = styled.div`
    img{
        width: 20px;
        height: 20px;
        float: left;
        border-radius: 50%;
        object-fit: cover;
        background-color: #ebebeb7a;
    }
    a{
        padding: 14px 20px;
        text-decoration: none;
        font-size: 16px;
        color: rgb(143, 143, 143);
        display: inline-block;
        font-weight: 100;
        :hover{
            color: red;
        }
    }
    span{
        padding-left: 8px;
    }
    .nav-link{
        padding-right: 12px;
    }
    @media only screen and (max-width: 1280px){
        width: 60%;
        a{
            padding: 16px 20px;
            width: 100%;
            text-decoration: none;
            font-size: 16px;
            color: rgb(143, 143, 143);
            display: block;
            font-weight: 100;
            text-align: center;
            font-size: 12px;
        }
        .nav-link{
            display: block;
            text-align: center;
            font-size: 24px;
            width: 100%;
        }
        &&.sub-content{
            display: none;
        }
    }
`;

const TitleNav = styled.h4`
    color: #b3b3b3;
    padding-left: 20px;
    @media only screen and (max-width: 1280px){
        display: none;
    }
`;