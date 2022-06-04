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
function setElementContent(elementId, path) {
  fetch(path)
    .then((response) => response.text())
    .then((text) => document.getElementById(elementId).replaceWith(text));
}

function setMainContent(path) {
  setElementContent("main", path);
}
function setFooterContent(path) {
  setElementContent("footer", path);
}
function setHeaderContent(path) {
  setElementContent("header", path);
}

function initialize() {
  let headerPath = "./components/header.html";
  let mainPath = "./pages/main.html";
  let footerPath = "./components/footer.html";

  setHeaderContent(headerPath);
  setMainContent("main", mainPath);
  setElementContent("footer", footerPath);

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

class Route {
  constructor(name, route, filepath) {
    this.name = name;
    this.route = route;
    this.filepath = filepath;
  }
}

var routes = [
  new Route("Home", "", "./pages/creators.html"),
  new Route("Creators", "creators", "./pages/creators.html"),
  new Route(
    "Restaurant Picker",
    "restaurant-picker",
    "./restaurant-picker/restaurant-picker.html"
  ),
  // new Route("Creators", "/creators", "./"),
];

function route() {
  var hash = window.location.hash.substring(1).replace(/\//gi, "/");

  var route = routes[0];
  for (let index = 0; index < routes.length; index++) {
    const potentialRoute = routes[index];
    if (hash == potentialRoute.route) {
      route = potentialRoute;
    }
  }
  setMainContent(route.filepath);
}
window.addEventListener("popstate", route);
route();
