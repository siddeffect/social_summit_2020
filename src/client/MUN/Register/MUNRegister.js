import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: "3em",
    width: "20rem",
    height: "4rem",
    color: "#fff",
    fontSize: "1.4rem",
    "@media (max-width:780px)": {
      width: "14rem",
      height: "5rem",
      fontSize: "1.3rem"
    }
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function MUNRegister() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Open form dialog
      </Button>
      <Dialog
        fullWidth="true"
        maxWidth="lg"
        open={open}
        scroll="paper"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field col s12 m6">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        required=""
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field col s12 m6">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="number"
                        id="phoneNumber"
                        min="1000000000"
                        max="9999999999"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <label htmlFor="college">College/Institute</label>
                      <input
                        type="text"
                        id="college"
                        required=""
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field col s12 m6">
                      <label htmlFor="college">University</label>
                      <input
                        type="text"
                        id="university"
                        required=""
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m3">
                      <label htmlFor="text">City</label>
                      <input
                        type="text"
                        id="city"
                        required=""
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field col s12 m3">
                      <label htmlFor="text">State</label>
                      <input
                        type="text"
                        id="state"
                        required=""
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field col s12 m3">
                      <label htmlFor="text">Course</label>
                      <input
                        type="text"
                        id="course"
                        required=""
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field col s12 m3">
                      <label htmlFor="text">Date of Birth</label>
                      <input type="text" class="datepicker" />
                    </div>
                  </div>
                  <div className="input-field col s12 m4">
                    <select onChange={handleChange} type="text" id="tshirt">
                      <option disabled value="" selected>
                        T-Shirt Size
                      </option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label>Select T-Shirt Size</label>
                  </div>
                  <div className="input-field col s12 m4">
                    <select onChange={handleChange} type="text" id="tshirt">
                      <option disabled value="" selected>
                        T-Shirt Size
                      </option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label>Select T-Shirt Size</label>
                  </div>
                  <div className="input-field col s12 m4">
                    <select onChange={handleChange} type="text" id="tshirt">
                      <option disabled value="" selected>
                        T-Shirt Size
                      </option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label>Select T-Shirt Size</label>
                  </div>
                  <div class="input-field col s12">
                    <textarea
                      id="textarea2"
                      class="materialize-textarea"
                      data-length="120"
                    ></textarea>
                    <label for="textarea2">Textarea</label>
                  </div>
                  <div class="input-field col s12">
                    <textarea
                      id="textarea2"
                      class="materialize-textarea"
                      data-length="120"
                    ></textarea>
                    <label for="textarea2">Textarea</label>
                  </div>
                  <div class="input-field col s12">
                    <textarea
                      id="textarea2"
                      class="materialize-textarea"
                      data-length="120"
                    ></textarea>
                    <label for="textarea2">Textarea</label>
                  </div>
                  <div class="input-field col s12">
                    <textarea
                      id="textarea2"
                      class="materialize-textarea"
                      data-length="120"
                    ></textarea>
                    <label for="textarea2">Textarea</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
