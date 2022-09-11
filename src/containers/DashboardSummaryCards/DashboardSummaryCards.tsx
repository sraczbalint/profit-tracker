import React, { ReactNode } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";
import MoneyIcon from "@mui/icons-material/Money";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import SummaryCard from "components/molecules/SummaryCard";
import FlexibleContainer from "components/organism/FlexibleContainer";

type SummaryCardItems = {
  primaryTitle?: string;
  secondaryTitle: string;
  icon: ReactNode;
  iconColor?: string;
  trendPercentage?: number;
  trendInfo?: string;
  progressPercentage?: number;
};

const summaryCardItems: SummaryCardItems[] = [
  {
    primaryTitle: "$24k",
    secondaryTitle: "BUDGET",
    icon: <MoneyIcon />,
    iconColor: "error.main",
    trendPercentage: -12,
    trendInfo: "Since last month",
  },
  {
    primaryTitle: "1,6k",
    secondaryTitle: "TOTAL CUSTOMERS",
    icon: <PeopleIcon />,
    iconColor: "success.main",
    trendPercentage: 16,
    trendInfo: "Since last month",
  },
  {
    primaryTitle: "75.5",
    secondaryTitle: "TASKS PROGRESS",
    icon: <InsertChartIcon />,
    iconColor: "warning.main",
    progressPercentage: 75.5,
  },
  {
    primaryTitle: "$23k",
    secondaryTitle: "TOTAL PROFIT",
    icon: <AttachMoneyIcon />,
    iconColor: "primary.main",
  },
];

const DashboardSummaryCards = () => {
  return (
    <FlexibleContainer>
      {summaryCardItems.map(
        ({
          primaryTitle,
          secondaryTitle,
          icon,
          iconColor,
          trendPercentage,
          trendInfo,
          progressPercentage,
        }) => {
          return (
            <SummaryCard
              key={primaryTitle}
              primaryTitle={primaryTitle}
              secondaryTitle={secondaryTitle}
              icon={icon}
              iconColor={iconColor}
              trendPercentage={trendPercentage}
              trendInfo={trendInfo}
              progressPercentage={progressPercentage}
            />
          );
        }
      )}
    </FlexibleContainer>
  );
};

export default DashboardSummaryCards;
