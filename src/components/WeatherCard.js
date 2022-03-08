
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import './styles/WeatherCard.css';
import dateHelpers from '../assets/helpers/dateHelper';
import temp from '../assets/helpers/farToCelHelper';

const WeatherCard = () => {
    const days = useSelector(state => state.forecast.data.DailyForecasts);
    return (
        days.map(day => {
            let dates = dateHelpers(day.Date);
            return <Grid item xs={4} sm={4} md={4} key={day.EpochDate}>
                <Card sx={{ minWidth: 275, maxWidth: 345 }}>
                    <CardContent>
                        <Typography>{dates[0]}</Typography>
                        <Typography>{dates[1]}/{dates[2]}</Typography>
                        <img src={require(`../assets/images/weatherImages/${day.Day.Icon}.png`)}
                            alt={day.Day.IconPhrase} />
                        <Typography>{day.Day.IconPhrase}</Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {temp(day.Temperature.Minimum.Value)} -
                            {temp(day.Temperature.Maximum.Value)}°C
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        })
    );
}

export default WeatherCard;