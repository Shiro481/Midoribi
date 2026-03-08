import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
