import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
    </div>
  );
};
export default PageLayout;
