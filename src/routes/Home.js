import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import allActions from '../redux/actions/index';
import Search from '../components/Search';
import WeatherCard from '../components/WeatherCard';
import CurrentDisplay from '../components/CurrentDisplay';


const Home = () => {
  const dispatch = useDispatch();
  const days = useSelector(state => state.forecast.data.DailyForecasts);
  const curr = useSelector(state => state.current.data);
  const isCurrLoading = useSelector(state => state.current.loading);
  useEffect(() => {
    dispatch(allActions.requestForecast());
    dispatch(allActions.requestCurrWeather());
  }, [dispatch]);
  let daily;
  if (days) {
    daily =
      <Box sx={{ flexGrow: 1, mt: 3, px: 3 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
          <WeatherCard />
        </Grid>
      </Box>
  } else daily = null;
  return (
    <main className='page'>
      <Search />
      <section style={{
        backgroundColor: '#e3e3e3',
        paddingTop: '1rem',
        borderRadius: '4px',
        minWidth: '275px',
        paddingBottom: '1rem'
      }}>
        {curr
          ? <CurrentDisplay />
          : <>Loading...</>
        }
        {daily}
      </section>
    </main>
  );
}

export default Home;