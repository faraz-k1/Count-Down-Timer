const endDate = "28 June 2023 12:00 AM";
const startTime = "1 June 2023 12:00 AM";

document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const start = new Date();
  const diff = end - start;
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / (1000 * 3600 * 24));
  inputs[1].value = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));
  inputs[2].value = Math.floor((diff % (1000 * 3600)) / (1000 * 60));
  inputs[3].value = Math.floor((diff % (1000 * 60)) / 1000);
}

clock();

setInterval(() => {
  clock();
}, 1000);
