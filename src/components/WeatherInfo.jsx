import styled from "styled-components";


const WeatherInfo = ({data}) => {
    return (
        data?
        <CTA>
            <CTAone>
                <CTAsubOne>
                    <WeatherText>{`${Math.floor(data.main.temp)}°C`}</WeatherText>
                    <CityName>{`${data.name},${data.sys.country}`}</CityName>
                </CTAsubOne>
                <WeatherIcon src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
            </CTAone>
            <CTAtwo>
                <CTAsubTwo>
                    <SubIcon src="/images/humidity.png" />
                    <Text>Humadity: <span>{`${data.main.humidity}%`}</span></Text>
                </CTAsubTwo>
                <CTAsubTwo>
                    <SubIcon src="/images/sun-rise.png" />
                    <Text>Sun Rise: <span>{`${new Date(data.sys.sunrise).toLocaleTimeString()} AM`}</span></Text>
                </CTAsubTwo>
                <CTAsubTwo>
                    <SubIcon src="/images/sun-set.png" />
                    <Text>Sun Set: <span>{`${new Date(data.sys.sunset).toLocaleTimeString()} PM`}</span></Text>
                </CTAsubTwo>

                <CTAsubTwo>
                    <SubIcon src="/images/condition.png" />
                    <Text>Condition: <span>{`${data.weather[0].main}`}</span></Text>
                </CTAsubTwo>

                <CTAsubTwo>
                    <SubIcon src="/images/cloud.png" />
                    <Text>Clouds: <span>{`${data.clouds.all}%`}</span></Text>
                </CTAsubTwo>
            </CTAtwo>
        </CTA> :""
    );
};


const CTA = styled.div`
background-color:rgba(255,255,255,0.5);
width:100%;
max-width:450px;
height:100%;
max-height:400px;
padding:20px 40px;
flex-wrap:wrap;
text-align:center;
margin-top:0;
margin-right:auto;
margin-left:auto;
margin-bottom:2vw;
border-radius:10px;
`;


const CTAone = styled.div`
display:flex;
justify-content:space-between;
padding-bottom:10px;
border-bottom: 2px solid #686868;
`;

const CTAsubOne = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;

`;

const WeatherText = styled.span`
font-size:70px;


@media (max-width:490px){
    font-size:50px
}

`;

const CityName = styled.p`
font-size:18px;
letter-spacing:1.04px;
font-weight:bold;
`;



const WeatherIcon = styled.img`
height: 100px;
      min-width: 100px;
      width: 100px;

@media (max-width:490px){
    min-width:80px;
    height:80px;
    width:80px;
}

`;

const CTAtwo = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin-top:40px;
`;

const CTAsubTwo = styled.div`
display:flex;
flex-wrap:nowrap;
`;

const SubIcon = styled.img`
height:20px;
min-width:20px;
width:20px;
`;

const Text = styled.h2`
font-size:18px;
margin-bottom:20px;
font-weight:normal;
margin-left:7px;

span{
    font-weight:bold;
}
@media (max-width:397px){
    font-size:15px
}

`;

export default WeatherInfo;