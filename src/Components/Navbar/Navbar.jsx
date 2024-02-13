import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
} from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function MyNavbar() {
  const items = useSelector((state) => state.cart.cart);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  function pressEnterKey(e) {
    if (e.key === "Enter") {
      navigate(`/storeitems?search=${encodeURIComponent(searchTerm)}`);
    }
  }
  const menuItems = ["Men", "Women", "Youth", "Contact Us"];
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="border-b border-gray-300"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <RouterLink to="/">
                <p className="font-bold text-slate-900 text-2xl pr-[3.7rem] lg:pr-36 ">
                  InfiniteMart
                </p>
              </RouterLink>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className="hidden sm:flex gap-[3.5rem] md:gap-4 mr-36"
            justify="center"
          >
            <NavbarItem>
              <RouterLink
                to="/storeitems"
                color="foreground"
                className="text-xl"
              >
                Men
              </RouterLink>
            </NavbarItem>
            <NavbarItem>
              <RouterLink
                to="/storeitems"
                color="foreground"
                className="text-xl"
              >
                Women
              </RouterLink>
            </NavbarItem>
            <NavbarItem>
              <RouterLink
                color="foreground"
                href="#"
                className="text-xl"
                to="/storeitems"
              >
                Youth
              </RouterLink>
            </NavbarItem>
            <NavbarItem>
              <RouterLink color="foreground" href="#" className="text-xl">
                Contact Us
              </RouterLink>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className=" flex justify-between gap-[3.3rem] md:gap-3">
            <NavbarItem>
              <div className="relative" id="input-field">
                <input
                  onKeyDown={pressEnterKey}
                  onChange={(e) => setsearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className="rounded-full p-2 pl-12 border focus:outline-none focus:ring focus:border-black transition-all duration-300 flex-grow placeholder-gray-500 focus:placeholder-gray-300 bg-gray-100 hover:bg-gray-200 hidden lg:flex"
                />
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hidden lg:flex" />
              </div>
            </NavbarItem>
            <NavbarItem>
              <div className="flex items-center gap-12 md:gap-4">
                <div className="flex items-center gap-3">
                  <RouterLink to="/purchaseditems">
                    <Badge
                      color="danger"
                      content={totalQuantity}
                      shape="circle"
                    >
                      <ShoppingCartIcon style={{ fontSize: 30 }} />
                    </Badge>
                  </RouterLink>
                </div>
              </div>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <RouterLink
                  to={
                    item.toLowerCase() === "men"
                      ? "/storeitems"
                      : `/${item.toLowerCase()}`
                  }
                  className="w-full text-black"
                  onClick={closeMenu}
                >
                  {item}
                </RouterLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </motion.div>
    </>
  );
}
