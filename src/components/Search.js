import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
import allActions from '../redux/actions/index';
import { InputBase } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import './styles/Search.css';

const Search = () => {
    const loading = useSelector(state => state.city.loading);
    const text = useSelector(state => state.city.searchText);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(allActions.changeSearchText(e.target.value))
    }
    const handleClick = () => {
        dispatch(allActions.requestCityKey(text));
    }
    const handleKeyPress = (e) => {
        if (e.code === 'Enter') {
            dispatch(allActions.requestCityKey(text));
        }
    }
    return (
        <div className='Search-input'>
            <InputBase onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={text}
                autoComplete='off'
                placeholder='Search City'
                style={{ width: '100%' }}
            />
            <LoadingButton onClick={handleClick}
                startIcon={<SearchIcon />}
                sx={{ p: '1rem' }}
                aria-label='search'
                loading={loading}
                loadingPosition='start'
                variant='text'
            />

        </div>
    );
}

export default Search;