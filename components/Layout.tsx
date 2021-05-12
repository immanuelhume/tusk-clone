import React from "react";
import styled from "styled-components/native";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.View`
  flex: 1;
`;
