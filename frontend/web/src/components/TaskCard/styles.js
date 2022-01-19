import styled from 'styled-components';

export const Container = styled.div`

width: 230px;
height: 145px;
box-shadow: -4px 5px 18px -5px rgba(0,0,0,0.75);
border-radius: 10px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

margin: 15px;
cursor: pointer;
transition: all 0.3s ease;
opacity: ${props => props.done ? 0.5 : 1};

&:hover {
    opacity: 50%;
}
`

export const TopCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

img{
    height: 50px;
}

h3{
    font-size: 16px;
}
`

export const BottomCard = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

strong {
    color: #ED145B;
    font-weight: bold;
    font-size: 12px;
}

span {
   color : #707070;
   font-size: 14px;
}
`
