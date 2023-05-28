const DateTimeComponent = ({ serverDateTime }) => {
  if(!serverDateTime) return null;
  const [dateStr, timeStr] = serverDateTime.split(', ');

  const [day, month, year] = dateStr.split('/');
  const [hours, minutes, seconds] = timeStr.split(':');

  const serverDate = new Date(year, month - 1, day, hours, minutes, seconds);
  const currentDate = new Date();

  const isToday =
    serverDate.getDate() === currentDate.getDate() &&
    serverDate.getMonth() === currentDate.getMonth() &&
    serverDate.getFullYear() === currentDate.getFullYear();

  let formattedDate;
  if (isToday) {
    const options = { hour: 'numeric', minute: 'numeric' };
    formattedDate = serverDate.toLocaleTimeString(undefined, options);
  } else {
    formattedDate = serverDate.toLocaleDateString();
  }
  
    return  <span className="contact-menu-date">{formattedDate}</span>;
  };
  
  export default DateTimeComponent;