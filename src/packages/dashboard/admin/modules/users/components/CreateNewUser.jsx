import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const CreateNewUser = () => {
    return (
        <section>
            <Box>
                <FormControl>
                    <Grid spcing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={4}>
                            <TextField
                                id="email"
                                label="Email"
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="first_name"
                                label="First name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                id="last_name"
                                label="Last name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                id="password"
                                label="Password"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                id="phone_number"
                                label="Phone number"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                id="station_name"
                                label="Station name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                id="station_email"
                                label="Station email"
                            />
                        </Grid>
                    </Grid>
                </FormControl>
            </Box>
        </section>
    )
};