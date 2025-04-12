function ClockTime() {
  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: false,
    });
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="clock-time">
      <p className="clock-time-subtext">
        Current Time in Bharat is: {getCurrentDate()} - {getCurrentTime()}
      </p>
    </div>
  );
}

export default ClockTime;
