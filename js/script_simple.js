const hoursElem = document.getElementById('hours');
const minsElem = document.getElementById('minutes');
const secsElem = document.getElementById('seconds');

const updateWatch = function() {
  const currentTime = new Date();
  const times = [
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds()
  ];
  const timesElems = [hoursElem, minsElem, secsElem];
  for (let i=0; i<times.length; i++) {
    var elem = timesElems[i];
    var v = times[i];
    elem.textContent = (v < 10 ? '0'+v : v.toString());
  }

  // let h = currentTime.getHours();
  // hoursElem.textContent = (h < 10 ? '0'+h : h.toString());

  // let m = currentTime.getMinutes();
  // hoursElem.textContent = (m < 10 ? '0'+m : m.toString());

  // let s = currentTime.getSeconds();
  // hoursElem.textContent = (s < 10 ? '0'+s : s.toString());
}

updateWatch();
setInterval(updateWatch, 1000);