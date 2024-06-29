import React from "react";
import { CustomRow } from "../../styled-components/table/table";

interface RowProps {
  children: React.ReactNode;
}

const RowComponent: React.FC<RowProps> = ({ children }) => {
  return <CustomRow>{children}</CustomRow>;
};

export default RowComponent;
