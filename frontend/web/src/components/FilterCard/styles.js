import styled from 'styled-components';

export const Container = styled.div`
width: 210px;
height: 50px;
background: ${props => props.actived ? '#ED145B' : '#000000'} ;
padding: 10px;
cursor: pointer;

border-radius: 10px;

display: flex;
flex-direction: column;
justify-content: space-around;

img{
    width: 20px;
    height: 20px;
}

span{
    color: #FFF;
    font-weight: bold;
    align-self: flex-end;
    font-size: 16px;
}

&:hover {
    background-color: #ED145B;
}

`
