import { InlineWidget } from 'react-calendly';

const Calendar = ({ style }) => {
    return <InlineWidget url="https://calendly.com/starfallcodeworks-info/starfall-codeworks-consultation" 
     styles={style}   />;
};

export default Calendar;
