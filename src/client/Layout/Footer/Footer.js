import React from 'react'
import styles from './css/footer.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: 'wrap',
      '& > *': {
        width: 200,
        margin: theme.spacing(2),
      },
    },
    button: {
      flexDirection: "row",
      background: 'black',
      marginEnd: '20px',
      ':hover&': {
        background: '#248a24',
      }
    },
  }));

export default function Footer() {
    const classes = useStyles();
    return (

        <div className={styles.outercontainer}>
            <div className={styles.container1}>
            <p className={styles.footerheadline}>Lorem voluptua vero voluptua justo no. Sanctus</p>
            <p className={styles.subtext}>Lorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet</p>
            </div>
            
            <div className={styles.outercontainer2}>
            <p>The wished i the entrance bird nevermore, he hear now and desert in, by dirges what i as minute and Lorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet</p>
            </div>

            <div className={styles.container3}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Email Address"
                    variant="outlined"
                    color="primary"
                    borderColor='#248a24'
                />
            </form>

            <Button color="inherit" classname={classes.button}>
            Sign In
            </Button>

            </div>
        </div>

        


        
    )
}
