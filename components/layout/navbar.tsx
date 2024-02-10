import { Navbar as RFUINavbar, NavbarItem, NavbarLeft } from "rfui";

export const Navbar = ({ route }: { route: string }) => {
  return (
    <RFUINavbar size="lg">
      <NavbarLeft>
        <NavbarItem href="/" isActive={route === "/"}>Home</NavbarItem>
      </NavbarLeft>
    </RFUINavbar>
  );
};
