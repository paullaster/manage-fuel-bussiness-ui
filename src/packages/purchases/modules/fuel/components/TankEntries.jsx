import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TankEntries = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="h4">
                        Tank Entries
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TankEntries