import styled from 'styled-components'


const CategorySection = styled.section`
    > ul{
        display:flex;
        background-color:#c4c4c4;
        > li{
            width:50%;
            text-align:center;
            padding:16px 0;
            position:relative;
            &.selected::after{
                content:'';
                display:block;
                height:3px;
                border:1px solid red;
                background:#333;
                position:absolute;
                bottom:0;
                width:100%;
                left:0;
            }
        }
    }
`

export { CategorySection }