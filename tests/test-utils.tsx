import React, { FC, ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders: FC = ({ children }: { children?: ReactNode }) => {
  return children as unknown as JSX.Element;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
