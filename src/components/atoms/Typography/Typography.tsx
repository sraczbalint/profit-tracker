import React, {
  FunctionComponent,
  CSSProperties,
  PropsWithChildren,
} from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import classNames from "classnames";

import styles from "./Typography.module.scss";

type Props = {
  className?: string;
  typographyStyle?: CSSProperties;
} & TypographyProps;

export const Typography: FunctionComponent<PropsWithChildren<Props>> = ({
  className,
  typographyStyle,
  children,
  ...props
}) => (
  <MuiTypography
    {...props}
    className={classNames(styles.typography, className)}
    style={typographyStyle}
  >
    {children}
  </MuiTypography>
);

export default Typography;
