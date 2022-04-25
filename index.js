let isDark =
  localStorage.theme === "dark" ||
  window.matchMedia("(prefers-color-scheme: dark)").matches;
// console.log("HERE", isDark, localStorage.theme);
if (!isDark) {
  // console.log("@");
  // console.log(document.documentElement);
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
} else {
  // console.log("1");
  // console.log(document.documentElement);
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

function darkModeToggle() {
  let isDark = localStorage.theme === "dark";
  console.log("HERE", isDark, localStorage.theme);
  if (isDark) {
    // console.log("@");
    // console.log(document.documentElement);
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    // console.log("1");
    // console.log(document.documentElement);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  // Whenever the user explicitly chooses light mode localStorage.theme = 'light'
  // Whenever the user explicitly chooses dark mode localStorage.theme = 'dark'
  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
  // localStorage.setItem("theme", "dark");
}
