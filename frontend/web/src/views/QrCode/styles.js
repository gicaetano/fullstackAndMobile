import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;

h1{
    color: #ED145B;
}

p{
    color: #000;
    //font-size: 18px;
}
` 

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

span{
    text-transform: uppercase;
    font-weight: bold;
}

input{
    font-size: 18px;
    padding: 10px;
    text-align: center;
}

button{
    font-weight: bold;
    background-color: #ED145B;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
        background: #000;
    }
}
`