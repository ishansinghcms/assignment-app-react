import { useEffect } from "react";
import "./App.css";
import MainContent from "./components/maincontent";
import Sidebar from "./components/sidebar";
import { DataProvider } from "./DataContext";

function App() {
  useEffect(() => {
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);

    const cdnLinks = [
      "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css",
      "https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
    ];

    const linkElements = cdnLinks.map((cdnLink) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cdnLink;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      linkElements.forEach((link) => {
        document.head.removeChild(link);
      });
    };
  }, []);
  return (
    <DataProvider>
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </DataProvider>
  );
}

export default App;
