import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home";
import { SignInPage } from "./pages/sign-in/sign-in";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePage,
    title: "home",
  },
  // Auth
  {
    path: "sign-in",
    pathMatch: "full",
    component: SignInPage,
    title: "sign-in",
  },
];
