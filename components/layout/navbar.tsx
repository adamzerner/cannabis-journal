import {
  Navbar as RFUINavbar,
  NavbarItem,
  NavbarLeft,
  NavbarRight,
} from "rfui";

export const Navbar = (
  { route, isLoggedIn }: { route: string; isLoggedIn: boolean },
) => {
  return (
    <RFUINavbar size="lg">
      <NavbarLeft>
        <NavbarItem href="/" isActive={route === "/"}>Home</NavbarItem>
      </NavbarLeft>
      <NavbarRight>
        {isLoggedIn
          ? (
            <>
              <NavbarItem href="/profile" isActive={route === "/profile"}>
                Profile
              </NavbarItem>
            </>
          )
          : (
            <>
              <NavbarItem href="/sign-in" isActive={route === "/sign-in"}>
                Sign in
              </NavbarItem>
              <NavbarItem href="/register" isActive={route === "/register"}>
                Register
              </NavbarItem>
            </>
          )}
      </NavbarRight>
    </RFUINavbar>
  );
};
