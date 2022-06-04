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
    .then((response) => {
      // console.log(response);
      return response.text();
    })
    .then((text) => {
      // console.log(text);
      var div = document.createElement("div");
      div.innerHTML = text; //.trim();
      let newElement = div.firstChild;
      // console.log(div);
      document.getElementById(elementId).replaceWith(newElement);
      // console.log(newElement);
    });
}

function setMainContent(path) {
  console.log(path);
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
  // let mainPath = "./pages/main.html";
  let footerPath = "./components/footer.html";

  setHeaderContent(headerPath);
  // setMainContent(mainPath);
  setFooterContent(footerPath);
}

class Route {
  constructor(name, route, filepath) {
    this.name = name;
    this.route = route;
    this.filepath = filepath;
  }
}

var routes = [
  new Route("Home", "/", "./pages/main.html"),
  new Route("Creators", "/creators", "./pages/creators.html"),
  new Route(
    "Restaurant Picker",
    "/restaurant-picker",
    "./RestaurantPicker/restaurantPicker.html"
  ),
  // new Route("Creators", "/creators", "./"),
];

function route() {
  var hash = window.location.hash.substring(1).replace(/\//gi, "/");
  // console.log(window.location);
  console.log(hash);
  var route = routes[0];
  for (let index = 0; index < routes.length; index++) {
    const potentialRoute = routes[index];
    if (hash == potentialRoute.route) {
      route = potentialRoute;
    }
  }
  console.log(route);
  setMainContent(route.filepath);
}

window.addEventListener("popstate", route);
route();
