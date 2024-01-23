import { Grid, Typography, Divider, Box } from '@mui/material';

const SummaryComponent = ({ subtotal, totalTaxAmount, total }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end" p={2}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2">Subtotal:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" align="right">{subtotal}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">Total Tax Amount:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" align="right">{totalTaxAmount}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">Total:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" align="right">{total}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  )
}

export default SummaryComponent