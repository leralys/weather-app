import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles/Header.css';

const Header = () => {
    let activeStyle = {
        opacity: '1'
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' className='Header'>
                <Toolbar>
                    <Link id='logo' to={'/'}><Button color='inherit'>Weather App</Button></Link>
                    <nav>
                        <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <Button color='inherit'><HomeIcon fontSize='large' /></Button>
                        </NavLink>
                        <NavLink to='/favorites' style={({ isActive }) => isActive ? activeStyle : undefined}>
                            <Button color='inherit'><FavoriteIcon fontSize='large' /></Button>
                        </NavLink>
                    </nav>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;