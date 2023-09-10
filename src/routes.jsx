import { Home, Profile, Invoice, Receipts, Aboutus, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Clinic",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Invoice",
    path: "/invoice",
    element: <Invoice />,
  },
  {
    name: "Receipts",
    path: "/receipts",
    element: <Receipts />,
  },
  {
    name: "About US",
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
