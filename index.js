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

function initialize() {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementsByTagName("body")[0].innerHTML += text)
    );
  fetch("./pages/main.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementsByTagName("body")[0].innerHTML += text)
    );
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then(
      (text) => (document.getElementsByTagName("body")[0].innerHTML += text)
    );

  // let oldHeader = document.getElementById("footer");
  // let newHeader = document.createElement("footer");
  // newHeader.classList =
  //   "h-10 flex justify-between items-center bg-navy-ish p-3";
  // newHeader.innerHTML = `<div class="flex-1"></div>
  //     <div class="">© by LocalLogan.com</div>
  //     <a class="flex-1 text-right" href="./creators.html">Creators</a>`;
  // oldHeader.parentNode.replaceChild(newHeader, oldHeader);

  // is this better to all be in a separate file? or just the inner contents?

  // document.getElementById("footer").parentNode.innerHTML += `
  // <footer
  //     id="footer"
  //     class="h-10 flex justify-between items-center bg-navy-ish p-3"
  //   >
  //     <div class="flex-1"></div>
  //     <div class="">© by LocalLogan.com</div>
  //     <a class="flex-1 text-right" href="./creators.html">Creators</a>
  //   </footer>`;
}
