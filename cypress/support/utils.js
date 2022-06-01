export let convertTimeToInt = (time) => {
  let splittedTime = time.toString().split('h');

  let hours = splittedTime[0];
  let minutes = !splittedTime[1] ? '00' : splittedTime[1];

  return parseInt(hours + minutes);
};
