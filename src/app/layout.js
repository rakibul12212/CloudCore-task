import Header from "@/component/shared/Header";
import "./globals.css";
import { ReduxProvider } from "@/redux/ReduxProvider";
import Container from "@/component/UI/Container";

export const metadata = {
  title: "CloudCore",
  description: "CloudCore app with Redux Toolkit,Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Container>
            <Header />
            {children}
          </Container>
        </ReduxProvider>
      </body>
    </html>
  );
}
