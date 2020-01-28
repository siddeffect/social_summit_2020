import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Button,
  InputAdornment,
  Snackbar,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  button: {
    width: "20rem",
    height: "4rem",
    color: "#fff",
    fontSize: "1.4rem",
    "@media(min-width:1030px) and (max-width:1600px)": {
      marginTop: "1.2em",
      width: "18rem",
      height: "3.4rem",
      color: "#fff",
      fontSize: "1.3rem"
    },
    "@media (max-width:640px)": {
      marginTop: "1rem",
      width: "13rem",
      height: "auto",
      fontSize: "1rem",
      fontWeight: "600"
    }
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function MUNRegister(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [values, setValues] = useState({
    collegeName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    accomodationRequired: "Y"
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const data = {
    ...values
  };

  const handleSubmit = e => {
    e.preventDefault();
    // props.munRegister(data);
    console.log(data);
    setOpen(false);
    setSnackOpen(true);
  };

  const theme = createMuiTheme({
    palette: {
      primary: { 500: "#00a650" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Register Here
      </Button>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert onClose={handleSnackClose} severity="success">
          Registered Successfully
        </Alert>
      </Snackbar>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        scroll="paper"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ textAlign: "center" }}
      >
        <DialogTitle id="form-dialog-title">Register for CSR</DialogTitle>
        <DialogContent>
          <Grid container justify="center">
            <Grid item xs={12} alignContent="center" container justify="center">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="fullName"
                      label="Full Name"
                      type="text"
                      fullWidth
                      value={values.fullName}
                      onChange={handleChange("fullName")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="collegeName"
                      label="College Name"
                      type="text"
                      fullWidth
                      value={values.collegeName}
                      onChange={handleChange("collegeName")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      type="number"
                      inputProps={{ maxLength: 10, minLength: 10 }}
                      label="Enter Phone Number"
                      id="phoneNumber"
                      variant="outlined"
                      fullWidth
                      value={values.phoneNumber}
                      onChange={handleChange("phoneNumber")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      variant="outlined"
                      id="city"
                      label="City"
                      type="text"
                      fullWidth
                      value={values.visitorsDetails}
                      onChange={handleChange("visitorsDetails")}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Accomodation Required
                      </FormLabel>
                      <RadioGroup
                        aria-label="accomodation"
                        name="accomodation"
                        value={values.accomodationRequired}
                        onChange={handleChange("accomodationRequired")}
                        row
                      >
                        <FormControlLabel
                          value="Y"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="N"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid container justify="center">
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default MUNRegister;
