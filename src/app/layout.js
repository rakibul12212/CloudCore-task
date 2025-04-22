import Header from "@/component/shared/Header";
import "./globals.css";
import { ReduxProvider } from "@/redux/ReduxProvider";
import Container from "@/component/UI/Container";

export const metadata = {
  title: "My Product App",
  description: "Product app with Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          <ReduxProvider>{children}</ReduxProvider>
        </Container>
      </body>
    </html>
  );
}
