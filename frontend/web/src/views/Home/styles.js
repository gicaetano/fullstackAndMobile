import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 margin-bottom: 60px;
`
export const FilterArea = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 30px;
`

export const Content = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

a{
    text-decoration: none;
    color: #000;
}

`

export const Title = styled.div`
width: 100%;
border-bottom: 1px solid #ED145B;
display: flex;
justify-content: center;
margin-bottom: 20px;

h3 {
    color: #ED145B;
    position: relative;
    top: 30px;
    background: #FFF;
    padding: 0 20px;
}
`