// Calendar.jsx
import { InlineWidget } from 'react-calendly';

const Calendar = () => {
  return (
    <InlineWidget
      url="https://calendly.com/starfallcodeworks-info/starfall-codeworks-consultation"
      styles={{
        width: '100%',
        minWidth: '0',   // <— prevents overflow on small screens with page padding
        height: '500px', // keep whatever height you prefer; width is the issue
      }}
    />
  );
};

export default Calendar;
