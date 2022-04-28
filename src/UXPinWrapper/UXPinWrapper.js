
import '@elastic/eui/dist/eui_theme_light.css';


export default function UXPinWrapper({ children }) {


  if (!document.getElementById("mui-merge-font")) {
    let lato = document.createElement("link");
    lato.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Lato:300,400,700"
    );
    lato.setAttribute("rel", "stylesheet");
    lato.setAttribute("id", "mui-merge-font");
    document.head.appendChild(lato);
  }

  if (!document.getElementById("mui-merge-icons")) {
    let icons = document.createElement("link");
    icons.setAttribute(
      "href",
      "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined&display=swap"
    );
    icons.setAttribute("rel", "stylesheet");
    icons.setAttribute("id", "mui-merge-icons");
    document.head.appendChild(icons);
  }
  
  return children
}
