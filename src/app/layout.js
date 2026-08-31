import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sham Prakash K | Backend Engineer",
  description: "Backend Engineer with 4 years of experience in Java, Spring Boot, microservices, and cloud-native systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
