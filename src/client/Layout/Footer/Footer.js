import React from 'react'
import styles from './footer.module.css'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        width: 350,
      },
    },
    button: {
      color: 'white',
      background:'green',
      borderRadius: '0 8px 8px 0 !important'

    },
  }));

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

export default function Footer() {
    const classes = useStyles();
    return (
      

        <div className={styles.outercontainer}>
            <div className={styles.container1}>

              <h1 className={styles.footerheadline}>Lorem voluptua vero</h1>
              <p className={styles.subtextheadline}>Lorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet voluptua vero</p>

            </div>
            
            <div className={styles.container2}>
            <p>The wished i the entrance bird nevermore, he hear now and desert in, by dirges what i as minute and Lorem voluptua vero voluptua justo no. Sanctus The stately Lorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet voluptua veroLorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet voluptua vero.</p>

              <div className={styles.icons}>

                <div >
                  <a href = "#" target = "_blank" rel="noopener noreferrer" style={{color:'#ffffff'}}>
                  <Facebook/>
                  </a>
                </div>

                <div>
                  <a href = "#" target = "_blank" rel="noopener noreferrer" style={{color:'#ffffff'}}>
                  <Twitter/>
                  </a>
                </div>
                
                <div>
                  <a href = "#" target = "_blank" rel="noopener noreferrer" style={{color:'#ffffff'}}>
                  <Instagram/>
                  </a>
                </div>

              </div>
            </div>

            <div className={styles.container3}>
                <form className={classes.root} noValidate autoComplete="off">
                    <CssTextField
                        id="outlined-secondary"
                        label="Email Address"
                        variant="outlined"
                        color="primary"
                        borderColor='#248a24'
                        className={classes.margin}
                    />
                </form>

                <Button className={classes.button}>
                Sign In
                </Button>
            </div>

            <div className={styles.container4}>
              <div className={styles.links}>
              
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'green'},{'text-decoration':'none'}}>Home</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>Events</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>Partners</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>Team</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>About</a></strong></div>
               
              </div>

              <div className={styles.text3}>Do you have any question, send us a word!</div>
            </div>
        </div>
        
    )
}
