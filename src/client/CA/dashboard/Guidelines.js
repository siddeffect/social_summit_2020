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
  Button,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "1vh 8vw 2vh 2vw",
    "@media (max-width:600px)": {
      margin: "4vh auto 5vh auto",
      width: "60vw"
    }
  },
  table: {
    minWidth: 600,
    maxWidth: 1000
  },
  tableContainer: {
    margin: "10px auto 10px auto"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function createData(task, signupAward, paymentAward) {
  return { task, signupAward, paymentAward };
}

const rows = [createData("1 Registration using your referral code", 10, 100)];

function Guidelines(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      primary: { 500: "#00a650" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={
          <Icon>
            <MenuBookIcon />
          </Icon>
        }
        onClick={handleClickOpen}
      >
        Guideline
      </Button>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        scroll="paper"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          Refer these Guidelines
        </DialogTitle>
        <DialogContent>
          <h3>Promotional Tasks to do:</h3>
          <p>
            <ol>
              <li>
                Create a list of college clubs along with the contact details of
                their secretaries/leaders.
              </li>
              <li>
                Provide database in form of WhatsApp screenshots/list of college
                students.
              </li>
              <li>
                Bring in participation to various events of National Social
                Summit’20.
              </li>
              <li>
                Share the social media posts of National Social
                Summit’20(Facebook, Instagram, LinkedIn) on your own profiles.
              </li>
              <li>
                Invite students from your college to register for National
                Social Summit’20 through your referral code.
              </li>
              <li>
                Promote the events of National Social Summit’20 and think for an
                event which can be organized at your college in collaboration
                with IIT Roorkee.
              </li>
              <li>
                Inviting your Facebook/Instagram friends/followers to like the
                Facebook/Instagram page of National Social Summit’20.
              </li>
            </ol>
          </p>
          <h3>Perks</h3>
          <p>
            <ol>
              <li>
                If you complete the tenure of internship, a certificate of
                completion would be provided which would clearly state you as a
                Campus Ambassador of National Social Summit’20, IIT Roorkee.
              </li>
              <li>
                Based upon the number of registrations and payments you bring in
                to summit, the top ten people in the Social Attache League
                leaderboards will be provided with special benefits(Annexure-A).
              </li>
              <li>
                Special goodies and swags will be sent to you if you
                successfully complete your internship.
              </li>
              <li>
                Certificate of Appreciation would be provided to you stating
                your valuable contribution in National Social Summit’20 as a
                Social Attache.
              </li>
            </ol>
          </p>
          <h3>
            Social Attache League: (Will be launched in mid-January, 2020)
          </h3>
          <p>
            <ol>
              <li>
                It is a competition for the Social Attache of National Social
                Summit’20 in which they would be promoting the events of the
                summit and receiving points for the same.
              </li>
              <li>
                The point structure of the above league will be as follows:
                <TableContainer
                  component={Paper}
                  className={classes.tableContainer}
                >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Tasks</TableCell>
                        <TableCell align="right">Points Awarded</TableCell>
                        <TableCell align="right">
                          Final Points Awarded per payment made
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.task}>
                          <TableCell component="th" scope="row">
                            {row.task}
                          </TableCell>
                          <TableCell align="right">{row.signupAward}</TableCell>
                          <TableCell align="right">
                            {row.paymentAward}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </li>
              <b>
                Referral Code will be the ‘CA Id’ provided to you on your
                dashboard once you register for the Campus Ambassador(Social
                Attache) of National Social Summit’20.
              </b>
            </ol>
          </p>
          <h3>Terms and Policies:</h3>
          <p>
            <ol>
              <li>
                The database provided by the campus ambassadors won’t be misused
                by National Social Summit’20.
                <ul>
                  <li>Misused: Spamming, molestation or abusive language.</li>
                </ul>
              </li>
              <li>
                The database provided by the Campus Ambassadors will be used for
                promotional purposes.
                <ul>
                  <li>
                    Promotional Purpose: Inviting the call attendee to attend
                    the summit.
                  </li>
                </ul>
              </li>
              <li>
                Campus Ambassadors will be provided with a certificate of
                completion only if they enter the leaderboard of Social Attache
                League. They will enter it by completing specific tasks.
              </li>
            </ol>
          </p>
          <h3>Annexure A:</h3>
          <p>
            <b>Special Benefits:</b>
            <ol type="a">
              <li>
                Special Recognition on the letterhead of National Social Summit,
                IIT Roorkee signed by the faculty advisor of National Social
                Summit, IIT Roorkee.
              </li>
              <li>
                If the campus ambassador attends the summit, the entry ticket
                cost(excluding the accommodation and food amount) will be
                reimbursed by National Social SUmmit’ IIT Roorkee.
              </li>
              <li>
                National Social Summit will forward the resume/portfolios of the
                campus ambassadors to various NGO’s for internship
                opportunities.
              </li>
              <li>
                If the campus ambassador attends the summit, he/she will be
                facilitated by the chief guest on the closing ceremony of the
                summit.
              </li>
              <li>
                A dedicated post mentioning the name and college of the campus
                ambassador will be released from Social Media platforms of
                National Social Summit, IIT Roorkee appreciating his/her
                efforts.
              </li>
            </ol>
          </p>
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

export default Guidelines;
