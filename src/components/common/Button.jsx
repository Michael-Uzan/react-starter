import classNames from "classnames";
import React from "react";

export const Button = ({ className, children, onClick }) => {
  return (
    <div className={classNames("button", className)} onClick={onClick}>
      {children}
    </div>
  );
};
