import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CounterNumberUp from './CounterNumberUp'

const useStyles = makeStyles(theme => ({
    root: {
        background: "#272727",
    height: 360,
    width: '100%',
    display: "flex",
    flexDirection: "row",
    
    },

    container1:{
        height:"100%",
        width:"25%",
        fontSize:50,
        display: "flex",
        flexDirection: "column",
        flexGrow:1,
        marginLeft:"10%",
        background:'#272727',
        flexWrap:'wrap',
        alignContent:'center',
        
    },

    events1:{
        marginTop:'20%',
        alignContent:'center',
        textAlign:'center',
        width:"100%",
        flexGrow:1,
        fontSize:55,
        verticalAlign:"center",
        color:"#4aa651",
        fontFamily:"Serif"
        

    },

    events2:{
        flexGrow:1,
        fontSize:70,
        marginBottom:'10%',
        color:"#ffffff",
        fontFamily:"Montserrat",
        textAlign:'center',
       
    },

    container2:{
        height:"100%",
        width:"25%",
        fontSize:50,
        display: "flex",
        flexDirection: "column",
        flexGrow:1,
        background:'#272727',
        flexWrap:'wrap',
        textAlign:'center',
        
    },

    partners1:{
        marginTop:'20%',
        alignContent:'center',
        textAlign:'center',
        width:"100%",
        flexGrow:1,
        fontSize:55,
        verticalAlign:"center",
        color:"#4aa651",
        fontFamily:"Serif"
        
    },

    partners2:{
        flexGrow:1,
        fontSize:70,
        marginBottom:'10%',
        color:"#ffffff",
        fontFamily:"Montserrat",
        textAlign:'center',

    },

    container3:{
        height:"100%",
        width:"25%",
        fontSize:50,
        display: "flex",
        flexDirection: "column",
        flexGrow:1,
        background:'#272727',
        flexWrap:'wrap',
        textAlign:'center',
        alignContent:'center',
        

    },

    footfall1:{
        marginTop:'20%',
        alignContent:'center',
        textAlign:'center',
        width:"100%",
        flexGrow:1,
        fontSize:55,
        verticalAlign:"center",
        color:"#4aa651",
        fontFamily:"Serif",
        
    },

    footfall2:{
        flexGrow:1,
        fontSize:70,
        marginBottom:'10%',
        color:"#ffffff",
        fontFamily:"Montserrat",
        textAlign:'center',
    },

    container4:{
        height:"100%",
        width:"25%",
        fontSize:50,
        display: "flex",
        flexDirection: "column",
        flexGrow:1,
        marginRight:"10%",
        background:'#272727',
        flexWrap:'wrap',
        textAlign:'center',
        // alignContent:'center',
        
    },

    team1:{
        marginTop:'20%',
        alignContent:'center',
        textAlign:'center',
        width:"100%",
        height:"auto",
        flexGrow:1,
        fontSize:55,
        verticalAlign:"center",
        color:"#4aa651",
        fontFamily:"Serif",
        
    },

    team2:{
        flexGrow:1,
        fontSize:70,
        marginBottom:'10%',
        textAlign:'center',
        height:"auto",
        color:"#ffffff",
        fontFamily:"Montserrat",
        // border:"5px solid yellow",
    },
}))    



export default function CounterComponent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container1}>
                <div className={classes.events1}>Events</div>
                <div className={classes.events2}><CounterNumberUp endValue="10" time="100" /></div>
            </div>

            <div className={classes.container2}>
                <div className={classes.partners1}>Partners</div>
                <div className={classes.partners2}><CounterNumberUp endValue="20" time="100" /></div>
            </div>

            <div className={classes.container3}>
                <div className={classes.footfall1}>FootFall</div>
                <div className={classes.footfall2}><CounterNumberUp endValue="1000" time="10" /></div>
            </div>

            <div className={classes.container4}>
                <div className={classes.team1}>Team</div>
                <div className={classes.team2}><CounterNumberUp endValue="50" time="50" /></div>
            </div> 
        </div>
    )
}
