import { Link } from "@chakra-ui/react";
import Proptypes from "prop-types";

const ExternalLink = ({ icon, href, ...rest }) => (
  <Link
    m={1}
    fontSize={["20px", "20px", "24px"]}
    fontWeight={500}
    fontFamily="heading"
    color="#ffbb2c"
    href={href}
    isExternal
    {...rest}
  >
    {icon}
  </Link>
);

ExternalLink.propTypes = {
  icon: Proptypes.node.isRequired,
  href: Proptypes.string.isRequired,
};

export default ExternalLink;