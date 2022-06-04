function toggleLight() {
  // console.log("toggling");
  document.getElementById("light-toggle").className = "checked";
  document.getElementById("dark-toggle").className = "";
}
function toggleDark() {
  document.getElementById("dark-toggle").className = "checked";
  document.getElementById("light-toggle").className = "";
}

function darkModeToggle() {
  let isDark = localStorage.theme === "dark";
  // console.log("HERE", isDark, localStorage.theme);
  if (isDark) {
    // console.log("@");
    // console.log(document.documentElement);
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleLight();
  } else {
    // console.log("1");
    // console.log(document.documentElement);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleDark();
  }
  // Whenever the user explicitly chooses light mode localStorage.theme = 'light'
  // Whenever the user explicitly chooses dark mode localStorage.theme = 'dark'
  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
  // localStorage.setItem("theme", "dark");
}
async function setElementContent(elementId, path) {
  let response = await fetch(path);
  let text = await response.text();
  let div = document.createElement("div");
  div.innerHTML = text; //.trim();
  let newElement = div.firstChild;
  // console.log(div);
  document.getElementById(elementId).replaceWith(newElement);
}

async function setMainContent(path) {
  // console.log(path);
  await setElementContent("main", path);
}
function setFooterContent(path) {
  setElementContent("footer", path);
}
function setHeaderContent(path) {
  setElementContent("header", path);
}

async function initialize() {
  let headerPath = "./components/header.html";
  // let mainPath = "./pages/main.html";
  let footerPath = "./components/footer.html";

  setHeaderContent(headerPath);
  // setMainContent(mainPath);
  setFooterContent(footerPath);

  await route();
  let isDark =
    localStorage.theme === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  // console.log("HERE", isDark, localStorage.theme);
  if (!isDark) {
    // console.log("@");
    // console.log(document.documentElement);
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleLight();
  } else {
    // console.log("1");
    // console.log(document.documentElement);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleDark();
  }
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

async function route() {
  var hash = window.location.hash.substring(1).replace(/\//gi, "/");
  // console.log(window.location);
  // console.log(hash);
  var route = routes[0];
  for (let index = 0; index < routes.length; index++) {
    const potentialRoute = routes[index];
    if (hash == potentialRoute.route) {
      route = potentialRoute;
    }
  }
  // console.log(route);

  await setMainContent(route.filepath);
  if (route.name == "Home") {
    let isDark = localStorage.theme === "dark";
    if (isDark) {
      toggleDark();
    } else {
      toggleLight();
    }
  }
}

window.addEventListener("popstate", route);
