import React,{Component} from 'react';
import moment from 'moment';
import './Countdown.css'
import Fade from "react-reveal/Fade";

class Countdown extends Component {
        state = {
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined,
            width:window.innerWidth
        };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        },1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (   
            <div className="countdownContainer">
             <Fade bottom>
                <div className="countdown-wrapper">
                    {days && (
                        <div className="countdown-item">
                          {this.state.width < 768? <SVGCircle1 radius={daysRadius} /> :<SVGCircle2 radius={daysRadius} />}  
                            {days}
                            <span className="countdown-span">days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                          {this.state.width < 768 ? <SVGCircle1 radius={hoursRadius} />:<SVGCircle2 radius={hoursRadius} /> }  
                            {hours}
                            <span className="countdown-span">hours</span>
                        </div>
                    )}
                    </div>
                     <div className="countdown-wrapper">
                    {minutes && (
                        <div className="countdown-item">
                         {this.state.width < 768 ?<SVGCircle1 radius={minutesRadius} />:<SVGCircle2 radius={minutesRadius} />}   
                            {minutes}
                            <span className="countdown-span">minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                          {this.state.width < 768 ?<SVGCircle1 radius={secondsRadius} />:<SVGCircle2 radius={secondsRadius} />}  
                            {seconds}
                            <span className="countdown-span">seconds</span>
                        </div>
                    )}
                </div>
                </Fade>
            </div>
      
        );
    }
}

const SVGCircle1 = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const SVGCircle2 = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(145, 145, 75, 0, radius)}   
        />
    </svg>
);

        

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

export default Countdown;