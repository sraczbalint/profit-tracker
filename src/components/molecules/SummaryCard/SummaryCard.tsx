import { CSSProperties, FunctionComponent, ReactNode } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";

import classNames from "classnames";
import styles from "./SummaryCard.module.scss";

interface Props {
  className?: string;
  style?: CSSProperties;
  primaryTitle?: string;
  secondaryTitle: string;
  icon: ReactNode;
  iconColor?: string;
  trendPercentage?: number;
  trendInfo?: string;
  progressPercentage?: number;
}

const SummaryCard: FunctionComponent<Props> = ({
  className,
  style,
  primaryTitle,
  secondaryTitle,
  icon,
  iconColor = "grey",
  trendPercentage,
  trendInfo,
  progressPercentage,
}: Props) => {
  return (
    <Card className={classNames(styles.summaryCard, className)} style={style}>
      <CardContent className={styles.cardContent}>
        <div
          className={styles.topSection}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className={styles.titleContainer}>
            <Typography color="textSecondary" variant="overline">
              {secondaryTitle}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {primaryTitle}
            </Typography>
          </div>
          <div>
            <Avatar
              sx={{
                backgroundColor: iconColor,
                height: 56,
                width: 56,
              }}
            >
              {icon}
            </Avatar>
          </div>
        </div>
        {trendPercentage && (
          <Box className={styles.trendContainer}>
            {trendPercentage <= 0 ? (
              <ArrowDownwardIcon color="error" />
            ) : (
              <ArrowUpwardIcon color="success" />
            )}
            <Typography
              color={trendPercentage <= 0 ? "error" : "success"}
              className={styles.trendPercentage}
              variant="body2"
            >
              {trendPercentage}%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {trendInfo}
            </Typography>
          </Box>
        )}
        {progressPercentage && (
          <Box className={styles.progressContainer}>
            <LinearProgress value={75.5} variant="determinate" />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
