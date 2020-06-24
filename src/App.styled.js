import styled, {keyframes} from 'styled-components';

export const AppWrapper = styled.div`
    text-align: center;
`;

export const AppHeaderWrapper = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const ImageLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const ImageAppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference){
        animation: ${ImageLogoSpin} infinite 20s linear;
    }
`;

export const AppLink = styled.a`
    color: #61dafb;
    color: ${props => props.color === 'primary' ? '#61dafb' : 'white'}
`;