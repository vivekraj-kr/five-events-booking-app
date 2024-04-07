import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "Five events app",
  description: "Five events app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
