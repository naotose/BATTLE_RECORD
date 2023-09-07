const win = document.getElementById('win');
const lose = document.getElementById('lose');
const rate = document.getElementById('rate');
const total = document.getElementById('total');
const killCount = document.getElementById('killCount');
const deathCount = document.getElementById('deathCount');
const killRate = document.getElementById('killRate');

win.addEventListener('input', () => {
  rate.textContent = (Number(win.value) / (Number(win.value) + Number(lose.value)) * 100).toFixed(2) + "%";
});

lose.addEventListener('input', () => { 
  rate.textContent = (Number(win.value) / (Number(win.value) + Number(lose.value)) * 100).toFixed(2) + "%";
});

win.addEventListener('input', () => {
  total.textContent = Number(win.value) + Number(lose.value);
});
lose.addEventListener('input', () => {
  total.textContent = Number(win.value) + Number(lose.value);
});

killCount.addEventListener('input', () => {
  killRate.textContent = (Number(killCount.value) / Number(deathCount.value)).toFixed(2) + "%";
});

deathCount.addEventListener('input', () => {
  killRate.textContent = (Number(killCount.value) / Number(deathCount.value)).toFixed(2) + "%";
});
