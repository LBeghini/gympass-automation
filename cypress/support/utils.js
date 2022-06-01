export let convertTimeToInt = (time) => {
  let splittedTime = time.toString().split('h');

  var hours = splittedTime[0];
  let seconds = !splittedTime[1] ? '00' : splittedTime[1];

  return parseInt(hours + seconds);
};
