import PropTypes from "prop-types";

import { ListItem, ListIcon, Box } from "@chakra-ui/react";

export default function SidebarMenuItems({ item, index, activeIndex, onClick, onMouseOver, onMouseOut }) {
  const isActive = index === activeIndex;

  return (
    <Box
      bg={"#f2c744"}
      borderRadius={"50%"}
      w={["40px", "40px", "50px"]}
      h={["40px", "40px", "50px"]}
      display={"flex"}
      alignItems={"center"}
      cursor={"pointer"}
      transition={"all 0.3s ease"}
      _hover={{
        transform: "scale(1.3)",
        backgroundColor: "gray.400",
      }}
      onClick={() => onClick(item)}
      onMouseOver={() => onMouseOver(index)}
      onMouseOut={() => onMouseOut()}
    >
      <ListItem key={index}
        display={"flex"}
        alignItems={"center"}
        cursor={"pointer"}
        transition={"all 0.3s ease"}
        color={"white"}
        fontWeight={"bold"}
      >
        <ListIcon
          as={item.icon} color="black" fontSize={["16px", "16px", "20px"]}
          display={"flex"}
          alignItems={"center"}
          mx={["12px", "12px", "15px"]}
          cursor={"pointer"}
          transition={"all 0.3s ease"}
        />
        <div className={`sidebar-item ${isActive ? "name-visible" : "name-hidden"}`}>{item.label}</div>
      </ListItem>
    </Box>
  );
}

SidebarMenuItems.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};