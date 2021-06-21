import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { ArrowUpwardRounded } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import { green, grey, lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "8px 16px",
  },
  header: {
    marginBottom: "16px",
  },
  itemSpacing: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px",
  },
  tableItem1: {
    backgroundColor: lightGreen["50"],
    padding: "4px 8px",
    margin: "0 8px",
  },
  tableItem2: {
    padding: "4px 8px",
    margin: "0 8px",
  },
  textColorGreen: {
    color: green["800"],
    fontWeight:500
  },
  textColorLight:{
    color: grey["700"]
  },
  textColorGrey:{
    fontWeight:500
  },
  roundIconGreen:{
    color: green["800"],
   
    fontSize:'1rem',
  },
  roundIconGrey:{
   
    fontSize:'1rem',
    color: grey["500"]
  },
}));

const TableItem1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.tableItem1}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography className={classes.textColorLight} align="left" variant="body2">
          Lorem ipsum dolor sit amet
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.textColorGreen} variant="body2">$32,500</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography className={classes.textColorGreen} variant="body2">50%</Typography>
        </Grid>
        <Grid item xs={1}>
          <ArrowUpwardRounded  className={classes.roundIconGreen} fontSize="small" />
        </Grid>
      </Grid>
    </div>
  );
};
const TableItem2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.tableItem2}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography className={classes.textColorLight} align="left" color="textSecondary" variant="body2">
          Lorem ipsum dolor sit amet
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.textColorGrey} color="textSecondary" variant="body2">$32,500</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography className={classes.textColorGrey} color="textSecondary" variant="body2">50%</Typography>
        </Grid>
        <Grid item xs={1}>
          <ArrowUpwardRounded  className={classes.roundIconGrey} fontSize="small" />
        </Grid>
      </Grid>
    </div>
  );
};

const Table = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.header} variant="h6" align="left">
        Expected Revenue Increase
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6} md={6}>
          <TableItem1 />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableItem1 />
        </Grid>

        <Grid item xs={12} md={6}>
          <TableItem2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableItem2 />
        </Grid>

        <Grid item xs={12} md={6}>
          <TableItem1 />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableItem1 />
        </Grid>

        <Grid item xs={12} md={6}>
          <TableItem2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableItem2 />
        </Grid>

        <Grid item xs={12} md={6}>
          <TableItem1 />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableItem1 />
        </Grid>

        <Grid item xs={12} md={6}>
          <TableItem2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <TableItem2 />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Table;
