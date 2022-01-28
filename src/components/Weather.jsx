import { useEffect, useState } from "react";
import { getData } from "../service/api";
import WeatherInfo from './WeatherInfo';
import styled from 'styled-components';


const Weather = () => {

    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('');
    const [click, handleClick] = useState(false);

    useEffect(() => {
        const getWather = async () => {
            await getData(city).then(Response => {
                getWeatherData(Response.data)
                console.log(Response.data);
            })
        };
        getWather();
        handleClick(false);
    }, [click]);

    const handleCityChange = (value) => {
        setCity(value);
    }


    return (
        <Container>
            <Contant>
                <Search>
                    <SearchCity onChange={(e) => handleCityChange(e.target.value)} type="text" placeholder="City.." />
                    <Submit onClick={() => handleClick(true)}>GET WEATHER</Submit>
                </Search>
                <WeatherInfo data={data} />
            </Contant>
        </Container>
    );

};



const Container = styled.section`
display:flex;
flex-direction:column;
text-align:center;
height:100vh
`;

const Contant = styled.div`
background:url("/images/bg.jpg");
background-position:center;
background-size:cover;
background-repeat:no-repeat;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
min-height:100vh;
box-sizing:border-box;
position:relative;
width:100%;
padding:80px 40px;
height:100%;
margin-bottom:10px;
`;

const Search = styled.div`
width:100%;
max-width:450px;
height:100%;
max-height:50px;
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
margin-bottom:20px;

@media (max-width:490px){
flex-direction:column;
}
`;

const SearchCity = styled.input`
background:transparent;
border:none;
outline:none;
font-size:16px;
border-bottom: 2px solid #686868;
padding-bottom:5px;

@media (max-width:490px){
    width:100%;
}
`;

const Submit = styled.button`
padding:10px 20px;
border:none;
outline:none;
font-weight:bold;
letter-spacing:1px;
background-color:#2f2f2f;
color:#f9f9f9;
margin-left:20px;
border-radius:5px;
cursor:pointer;
transition:all 0.2s ease-out;

&:hover{
    opacity:0.8;
}

@media (max-width:490px){
    margin-left:0;
    width:100%;
    margin-top:10px;
}
`;



export default Weather;