import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`
export const Footer = styled.footer`
position: absolute;
bottom: 0;
font-size: 12px;
margin: 10px;
`

// FILE UPLOAD

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    `
export const UploadContainer = styled.div`
    min-width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    `

export const Label = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 6px 12px;
    width: 40%;
    height: 200px;
    background-image: ${props => props.url ? `url(${props.url})`: ""};
    background-size: cover;
    overflow: hidden;
    color: white;
    font-weight: bold;
    border: 1px solid #ccc;
    cursor: pointer;

    [type="file"]{
        display: none;
    }

    `

export const Button = styled.button`
    margin: 20px 10px;
    width: 200px;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 10px;

`
// IMAGE COMPARISON

export const ComparisonContainer = styled.div`
    position: relative;
    margin: 20px;
    width: 1280px;
    height: 720px;
    background-color: rgb(50,50,50);
    background-image: ${props => props.url ? `url(${props.url})`: ""};
    background-size: cover;
    overflow: hidden;
`

export const After = styled.div`
    width: 50%;
    height: 720px;
    background-color: rgb(250,250,250);
    background-image: ${props => props.url ? `url(${props.url})`: ""};
    background-size: cover;
    overflow: hidden;
    border-right: 1px solid rgba(255,255,255,0.2);
    `

  export const Slider = styled.input`
    position: absolute;
    top: 50%;
    z-index: 2;
    left: -20px;
    -webkit-appearance: none;
    appearance: none;
    width: 1320px;
    height: 14px;
    background: none;
    outline: none;
    opacity: 1;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 7px;

    ::-webkit-slider-thumb {
     -webkit-appearance: none;
     appearance: none;
     width: 40px;
     height: 40px;
     border-radius: 50%;
     /*border: 1px solid white;*/
     background: rgba(255,255,255,0.5);
     background-image: url(https://img.icons8.com/fluent-systems-filled/48/000000/arrow-both-directions-right.png);
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
     cursor: pointer;
     opacity: 1;
   transform: rotate(45deg);
}
`

