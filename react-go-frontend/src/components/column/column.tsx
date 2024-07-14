import React from "react";
import { CustomColumn } from "../../styled-components/table/table";

interface ColumnProps {
  children: React.ReactNode;
}

const ColumnComponent: React.FC<ColumnProps> = ({ children }) => {
  return <CustomColumn>{children}</CustomColumn>;
};

export default ColumnComponent;
