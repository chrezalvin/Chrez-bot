module.exports = {
  name: "time",
  description: "sends the current japanese time",
  execute(message, arguments)
  {

    const time = new Date();
    // get only the hh:mm:ss format
    const japTime = time.toLocaleString('en-US', {timeZone: "Japan"}).split(' ')[1];

    // calculate time left
    const timeLeft = {
      hour: 24 - (time.getUTCHours() + 9) % 24,
      minute: 60 - time.getUTCMinutes()};

    let myText;
    if(timeLeft.minute == 0)
      myText = `${time.hour} hours left`;
    else if (timeLeft.hour == 0)
      myText = `${timeLeft.minute} minutes left`;
    else
      myText = `${timeLeft.hour} hours and ${timeLeft.minute} minutes left`;

    const myEmbed = {
      title: `it's ${japTime} Japanese time`,
      description: `${myText} until midnight`
    }
    return myEmbed;
  }
}