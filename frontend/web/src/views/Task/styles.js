import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const Form = styled.div`
width: 50%;
margin-bottom: 70px;
`

export const TypeIcons = styled.div`
width: 100%;
display: flex;
justify-content: center;

.inative {
    opacity: 0.5;
}

button {
    border: none;
    background: none;
}

img {
    width: 50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
}
`

export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0px;
//margin-bottom: 100px;

span {
    color: #707070;
    margin-bottom: 5px;
}

input{
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #ED145B;
}
`

export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span {
    color: #707070;
    margin-bottom: 5px;
}

textarea {
   font-size: 16px;
   border: 1px solid #ED145B;
}
`
export const Options = styled.div`
display: flex;
justify-content: space-between;

button {
    font-weight: bold;
    color: #000000;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
    
    &:hover{
        opacity: 0.7;
    }
}

div {
    display: flex;
    align-items: center;
    color: #ED145B;
    font-weight: bold;
    font-size: 17px;
}
`

export const Save = styled.div`
width: 100%;


button{
    width: 100%;
    background-color: #ED145B;
    border: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding: 10px;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
}

`

