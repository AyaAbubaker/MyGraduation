// التعديل هنا: 11 تعني الساعة الحادية عشرة صباحاً
const graduationDate = new Date('2026-10-04T10:45:00');
function updateCountdown() {
  const now = new Date();
  const diff = graduationDate - now;

  if (diff <= 0) {
    setAll("00", "00", "00", "00");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  setAll(days, hours, mins, secs);

  // تحديث كل ثانية
  setTimeout(updateCountdown, 1000);
}

function setAll(d, h, m, s) {
  document.getElementById("cd-days").textContent = String(d).padStart(2, "0");
  document.getElementById("cd-hours").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-mins").textContent = String(m).padStart(2, "0");
  document.getElementById("cd-secs").textContent = String(s).padStart(2, "0");
}

window.addEventListener("load", () => {
  updateCountdown();
});