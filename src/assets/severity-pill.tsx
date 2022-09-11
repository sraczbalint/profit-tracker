import { FunctionComponent, PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/styles";
import { ITheme } from "theme";

interface SeverityPillRootProps {
  theme?: ITheme;
  ownerState: {
    color: Color;
  };
}

const SeverityPillRoot = styled("span")(
  ({ ownerState }: SeverityPillRootProps) => {
    const theme: ITheme = useTheme();
    const backgroundColor = theme.palette[ownerState.color].main;
    const color = theme.palette[ownerState.color].contrastText;

    return {
      alignItems: "center",
      backgroundColor,
      borderRadius: 12,
      color,
      cursor: "default",
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: "center",
      letterSpacing: 0.5,
      minWidth: 20,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };
  }
);

type Color = "primary" | "secondary" | "error" | "info" | "warning" | "success";

interface Props {
  color: Color;
}

export const SeverityPill: FunctionComponent<PropsWithChildren<Props>> = ({
  color = "primary",
  children,
}) => {
  const ownerState = { color };

  return (
    <SeverityPillRoot ownerState={ownerState}>{children}</SeverityPillRoot>
  );
};
