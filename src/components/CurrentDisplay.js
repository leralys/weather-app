import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import dateHelper from '../assets/helpers/dateHelper';

const CurrentDisplay = () => {
    const city = useSelector(state => state.city.city);
    const country = useSelector(state => state.city.country);
    const curr = useSelector(state => state.current.data);
    if (!curr) return null;
    else {
        let date = dateHelper(curr.LocalObservationDateTime);
        return (
            <Card sx={{ minWidth: 225, px: 3, maxWidth: 500 }}>
                <CardContent >
                    <img src={require(`../assets/images/weatherImages/${curr.WeatherIcon}.png`)}
                        alt={curr.WeatherText} />
                    <Typography variant='h5' component='div'>
                        {city}, {country}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        {date[0]} {date[1]}/{date[2]}
                    </Typography>
                    <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography>
                        {Math.round(curr.Temperature.Metric.Value)} °C
                    </Typography>
                    {curr.WeatherText}
                </CardContent>
            </Card>
        );
    }
}

export default CurrentDisplay;