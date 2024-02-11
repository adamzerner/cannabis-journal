import {
  Navbar as RFUINavbar,
  NavbarItem,
  NavbarLeft,
  NavbarRight,
} from "rfui";

export const Navbar = ({ route }: { route: string }) => {
  return (
    <RFUINavbar size="lg">
      <NavbarLeft>
        <NavbarItem href="/" isActive={route === "/"}>Home</NavbarItem>
      </NavbarLeft>
      <NavbarRight>
        <NavbarItem href="/sign-in" isActive={route === "/sign-in"}>
          Sign in
        </NavbarItem>
        <NavbarItem href="/register" isActive={route === "/register"}>
          Register
        </NavbarItem>
      </NavbarRight>
    </RFUINavbar>
  );
};
