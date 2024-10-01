import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const metadata = {
  title: "Tronix Ecommerce Website",
  description: "Created by next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
