import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  itemSpacing: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px",
  },
  textColorGreen: {
    color: green["700"],
  },
}));

const Summary = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        {/* heading */}
        <Grid item xs={12} container alignItems="center">
          <Grid item xs={6}>
            <Typography
              style={{ paddingLeft: "16px" }}
              align="left"
              variant="h6"
            >
              Summary
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{ paddingRight: "16px" }}
              align="right"
              variant="subtitle2"
            >
              Total Profit Impact: 
              <span className={classes.textColorGreen}> $84,906 / 142%+</span>
            </Typography>
          </Grid>
        </Grid>

        {/* data */}
        <Grid item xs={12} container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className={classes.itemSpacing}>
              <Typography variant="body2">Current Revenue</Typography>
              <Typography variant="subtitle2">$65,000</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.itemSpacing}>
              <Typography variant="body2">Current Profit</Typography>
              <Typography variant="subtitle2">$59,800</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.itemSpacing}>
              <Typography variant="body2">
                Expected Increase in Revenue
              </Typography>
              <Typography variant="subtitle2">$89,375</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.itemSpacing}>
              <Typography variant="body2">New Annual Profit</Typography>
              <Typography variant="subtitle2">$144,706</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.itemSpacing}>
              <Typography variant="body2">
                New Annual Gross Revenue
              </Typography>
              <Typography variant="subtitle2">$154,375</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.itemSpacing}>
              <Typography variant="body2">5 Year Profit Impact</Typography>
              <Typography variant="subtitle2">$424,530</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Summary;
