import { CSSProperties } from "react";
import { Box } from "@mui/material";

import classNames from "classnames";
import styles from "./Section.module.scss";

interface Props {
  className: string;
  style?: CSSProperties;
  sectionTitle?: string;
}

const Section = ({ className, style, sectionTitle }: Props) => {
  return (
    <Box
      component="main"
      className={classNames(styles.section, className)}
      style={style}
    ></Box>
  );
};

export default Section;
