import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ToogleTheme from "./ToogleTheme";
import { toggleTheme } from '../store/slices/theme';

import logo from "../assets/logo/logo_cl.png";

import { toast } from 'sonner';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Link} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHoldingCircle } from "@fortawesome/free-solid-svg-icons";

import SearchInput from "./SearchInput";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const theme = useSelector((state) => state.theme.theme);
  

  const menuItemsNav = [
    { name: "Trends", path: "/trends" },
    { name: "Collections", path: "/collections" },
    { name: "Tips & Guides", path: "/tips-and-guides" }
  ];

  const menuItemsBNav = [
    { name: "Find a Store", path: "/find-a-store" },
    { name: "Contact us", path: "/contact-us" },
  ];

  const menuItems = [
    { name: "Trends", path: "/trends" },
    { name: "Collections", path: "/collections" },
    { name: "Tips & Guides", path: "/tips-and-guides" },
    { name: "Find a Store", path: "/find-a-store" },
    { name: "Contact us", path: "/contact-us" },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        <NavbarContent justify="start">
          <Link color="foreground" href={"/home"}>
            <img src={logo} Link to={'/home'}  alt="aseguradora Logo" className="h-10 w-auto rounded-xl"/>
          </Link>
          {/* <p className="font-bold text-black dark:text-white pl-2">
            Concepts Life
          </p> */}
          {menuItemsNav.map((item) => (
            <NavbarItem key={item.name} isActive={location.pathname === item.path} className="hidden lg:flex gap-4">
              <Link color="foreground" href={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>
        
      <NavbarContent justify="end" className="gap-3">   
        {menuItemsBNav.map((item) => (
            <NavbarItem key={item.name} isActive={location.pathname === item.path} className="hidden md:flex gap-4">
              <Link color="foreground" href={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        <ToogleTheme 
          theme={theme} 
          switchTheme={() => dispatch(toggleTheme())}
        />
        <div className="hidden sm:flex">
          <SearchInput />
        </div>
      </NavbarContent>
      
      <NavbarMenu>
        <SearchInput />
        {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item.name}-${index}`} isActive={location.pathname === item.path}>
            <Link
            color={"foreground"}
            isActive={location.pathname === item.path}
            className="w-full"
            href={item.path}
            size="lg"
            >
            {item.name}
            </Link>
        </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
 export default Nav;