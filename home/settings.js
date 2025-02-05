document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("waveToggle");
    const ocean = document.getElementById("ocean");
    
    function updateVisibility() {
        if (localStorage.getItem("wavesDisabled") === "true") {
            ocean.style.display = "none";
            toggle.checked = true;
        } else {
            ocean.style.display = "block";
            toggle.checked = false;
        }
    }
    
    toggle.addEventListener("change", function() {
        localStorage.setItem("wavesDisabled", toggle.checked);
        updateVisibility();
    });
    
    updateVisibility();
});

function settingsModal() {
    document.getElementById("settingsModal").style.display = "block";
}
function closeModal() {
    document.getElementById("settingsModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
   const toggle = document.getElementById("particlesToggle");
   const particles = document.getElementById("particles-js");
   function updateVisibility() {
      if (localStorage.getItem("particlesDisabled") === "true") {
            particles.style.display = "none";
            toggle.checked = true;
      } else {
            particles.style.display = "block";
            toggle.checked = false;
      }
   }
   toggle.addEventListener("change", function() {
      localStorage.setItem("particlesDisabled", toggle.checked);
      updateVisibility();
   });
   updateVisibility();
});
function settingsModal() {
   document.getElementById("settingsModal").style.display = "block";
}
function closeModal() {
   document.getElementById("settingsModal").style.display = "none";
}

// Define some varibles for later
const origin = localStorage.getItem('instance');
const cdn = localStorage.getItem('cdn');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const onLoadData = urlParams.get('onload');

const base = document.createElement('base');
base.href = location.origin + path.replace(path.split('\\').pop().split('/').pop(), '');
document.head.appendChild(base);

// If we do not have the origin var, we make it
if (!origin) {
  localStorage.setItem('instance', base.href);
  location.reload();
}



const instance = encodeURIComponent(origin.replace(location.origin, ''));

// If we have onLoadData, we run it now
window.onload = () => {
  if (onLoadData) {
    eval(onLoadData);
  }
};

// If we have any errors, we will log it
window.onerror = (e) => {
  throw new Error(e);
};

// Collect Tab Cloak data from local storage
var tab = localStorage.getItem('tab');
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

// Set the Tab icon if the Tab cloak data is there
if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}

var tab = localStorage.getItem("tab");

if (tab) {
  try {
    var tabData = JSON.parse(tab);
    if (tabData.theme) {
      var styleTag = document.getElementById("theme-style");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "theme-style";
        document.body.appendChild(styleTag);
      }
      switch (tabData.theme) {
        case "dark":
          styleTag.innerHTML = "body { background-color: #121212; color: #e0e0e0; }";
          break;
        case "light":
          styleTag.innerHTML = "body { background-color: #ffffff; color: #000000; }";
          break;
        default:
          styleTag.innerHTML = "";
      }


    }
  } catch {
    // Handle or ignore parsing error
  }
}

var tab = localStorage.getItem("tab");

if (tab) {
try {
  var tabData = JSON.parse(tab);
} catch {
  var tabData = {};
}
} else {
var tabData = {};
}

var settingsDefaultTab = {
  title: "Study.com",
  icon: "/images/app-logo-transgender.png",
  scriptSrc: "/app.js"
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak() {
  var cloak = document.getElementById("premadecloaks").value;
  switch (cloak) {
    case "defaultsettings":
    setTitle("AJH's Vault V6");
    setFavicon("/home/icon.png");
    localStorage.setItem("tab", JSON.stringify({}));
    location.reload();
    break;
    case "search":
      setTitle("Google");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/google.ico");
      location.reload();
      break;
    case "drive":
      setTitle("My Drive - Google Drive");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/google-drive-ico.ico");
      location.reload();
      break;
    case "classroom":
      setTitle("Google Classroom");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/google-classroom.ico");
      location.reload();
      break;
    case "gmail":
      setTitle("Gmail");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/gmail.ico");
      location.reload();
      break;
    case "word":
      setTitle("Document.docx");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/word.ico");
      location.reload();
      break;
    case "powerpoint":
      setTitle("Presentation.pptx");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/powerpoint.ico");
      location.reload();
      break;
    case "youtube": 
      setTitle("YouTube");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/youtube.ico");
      location.reload();
      break;
    case "calendar":
      setTitle("Google Calendar");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/google-calender.ico");
      location.reload();
      break;
    case "meets":
      setTitle("Google Meet");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/google-meet.ico");
      location.reload();
      break;
    case "canvas":
      setTitle("Canvas");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/canvas.ico");
      location.reload();
      break;
    case "zoom":
      setTitle("Zoom");
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/zoom.ico");
      location.reload();
      break;
    case "khan":
      setTitle("Khan Academy"); 
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/khan-academy.ico");
      location.reload();
      break;
    case "fakesearch":
      setTitle("calculator - Google Search"); 
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/google.ico");
      location.reload();
      break;
    case "brunysex":
      setTitle("BrunysIXL"); 
      setFavicon("/images/sillypartners/brunysixl.png");
      location.reload();
      break;
    case "sizzlecentral":
      setTitle("Szvy Central"); 
      setFavicon("/images/sillypartners/szvy.png");
      location.reload();
      break;
    case "meximath":
      setTitle("MexiMath"); 
      setFavicon("/images/sillypartners/meximath.png");
      location.reload();
      break;
    case "pablocp":
      setTitle("PabloCP"); 
      setFavicon("https://frogieeshouldgeta.massivelowtaperfa.de/assets/img/favicons/pablo.png");
      location.reload();
      break;
  }
}

function resetTab() {
  setTitle("Study.com");
  setFavicon("/images/app-logo-transgender.png");
   var tab = localStorage.getItem("tab");

   if (tab) {
     try {
       var tabData = JSON.parse(tab);
       var theme = tabData.theme
       var mobiledata
     } catch {
       var tabData = {};
     }
   } else {
     var tabData = {};
   }
 
   if (theme) {
     const consttheme = tabData.theme;
     localStorage.setItem("tab", JSON.stringify({}));
     setTheme(consttheme);
   } 
   else if (mobiledata){
    const constmobiledata = tabData.mobilescreen;
    localStorage.setItem("tab", JSON.stringify({}));
    var tabData = JSON.parse(localStorage.getItem("tab")) || {};
    tabData.mobilescreen = constmobiledata;
    localStorage.setItem("tab", JSON.stringify(tabData));
   }
   else {
    localStorage.setItem("tab", JSON.stringify({}));
   }
  location.reload();
}

window.onload = () => {
  if (onLoadData) {
    eval(onLoadData);
  }
};

window.onerror = (e) => {
  throw new Error(e);
};

var tab = localStorage.getItem('tab');
if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}