
import RootLayer from "./components/RootLayer";
import "./globals.css";


export const metadata = {
  title: "Bakare John",
  description: "Actionprenuer",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      
      <body >
           <RootLayer >
            {children}
            </RootLayer>
      </body>
      
    </html>
  );
}
