import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
height: 70px;
background: #000000;
border-bottom: 5px solid #ED145B;

display: flex;
`

export const LeftSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 10px;

img {
   width: 100px;
   height: 50px;
}
`

export const RightSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;

button {
    background: none;
    border: none;
}

a{
    color: #ED145B;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    /* button {
        background: ;
    } */

    &:hover{
       color: white;
    }
}

#notification {
    img {
       width: 25px;
       height: 30px; 
    }

    span {
        background: #fff;
        color: #ED145B;
        align-content: center;
        padding: 2px 7px;
        border-radius: 50%;
        position: relative;
        top: -20px;
        right: 10px;
    }

    &:hover {
        opacity: 0.5;
    }

}
    .dividir::after{
        content: "|";
        margin: 0 10px;
        //color: #ED145B;
    }

    button {
        font-size: 16px;
        color: #ED145B;
        font-weight: bold;
        margin-top: 4px;

        &:hover{
       color: white;
        }
    }
    
`