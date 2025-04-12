function ClockTime() {
  const getDateString = () => {
    const date = new Date();
    date.toDateString();
    return date.toDateString();
  };

  const getTimeString = () => {
    const date = new Date();
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return (
    <div className="clock-time">
      <p>
        Current time is: {getTimeString()} and date is {getDateString()}
      </p>
    </div>
  );
}

export default ClockTime;
