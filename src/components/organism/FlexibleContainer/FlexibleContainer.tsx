import React, { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./FlexibleContainer.module.scss";

interface Props {
  className?: string;
}

const FlexibleContainer: FunctionComponent<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(styles.flexibleContainer, className)}>
      {children}
    </div>
  );
};

export default FlexibleContainer;
