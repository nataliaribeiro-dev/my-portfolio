import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, Flex } from "@chakra-ui/react";
import { BiHomeAlt2 } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Sidebar.css";
import SidebarMenuItems from "./SidebarMenuItems";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: BiHomeAlt2, label: "Home" },
    { name: "About", icon: RxPerson, label: "Sobre mim" },
    { name: "Resume", icon: LuFileSpreadsheet, label: "Resume" },
    { name: "Projects", icon: MdWorkOutline, label: "Projetos" },
    { name: "Contact", icon: BiMailSend, label: "Contato" },
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const handlePathChange = (item) => {
    const path = item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`;
    navigate(path);

  };

  return (
    <Flex
      as={motion.div}
      className="container-sidebar"
      bg="rgba(32, 32, 32, 0)"
      h="100vh"
      p={[3, 5]}
      left={0}
      position="fixed"
      justify={"center"}
      align={"start"}
      flexDirection="column"
      whileHover={{
        width: 190
      }}
      transition='0.3s linear'
      initial={{ width: 90 }}
      zIndex={2}
    >
      <nav>
        <List spacing={8}>
          {menuItems.map((item, index) => (
            <SidebarMenuItems
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              onClick={handlePathChange}
              onMouseOver={setActiveIndex}
              onMouseOut={() => setActiveIndex(null)}
            />
          ))}
        </List>
      </nav>
    </Flex>
  );
}