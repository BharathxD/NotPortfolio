"use client";

import { ThemeProvider as TP } from "next-themes";

interface Props extends React.PropsWithChildren {}

const ThemeProvider = ({ children }: Props) => <TP attribute="class">{children}</TP>;

export default ThemeProvider;
