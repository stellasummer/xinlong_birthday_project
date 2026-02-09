// Set birthday here
const birthday = {
  month: 3, // March
  day: 11
};

function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, birthday.month - 1, birthday.day);

  const countdownEl = document.getElementById("countdown");

  // If birthday has passed this year, still show post-birthday text
  const diff = target - now;

  if (
    now.getMonth() === birthday.month - 1 &&
    now.getDate() === birthday.day
  ) {
    countdownEl.innerText =
      `Today is March ${birthday.day}. May our love never fade.`;
    return;
  }

  if (diff > 0) {
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    countdownEl.innerText =
      `${days} days until March ${birthday.day}`;
  } else {
    countdownEl.innerText =
      `Walking further with you...`;
  }
}

updateCountdown();
setInterval(updateCountdown, 60 * 1000);
