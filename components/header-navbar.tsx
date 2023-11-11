import Container from "./container";
import LoginLogout from "./login-logout";
import MainNav from "./main-nav";
import ShoppingBag from "./shopping-bag";
import Logo from "./ui/logo";
import getCategories from "@/actions/get-categories";

const HeaderNavbar = async () => {
  const categories = await getCategories();

  return (
    <Container>
      <Logo />
      <MainNav data={categories} />
      <div className="ml-auto">
        <ShoppingBag />
      </div>
      <div className="ml-8">
        <LoginLogout />
      </div>
    </Container>
  );
};

export default HeaderNavbar;
