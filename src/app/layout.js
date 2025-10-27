import "./globals.css";
import Navbar from "./components/Navbar";
import  AnimatedBackground  from "./components/AnimatedBackground";

export const metadata = {
  title: "Asutosh Kumar Shukla | Full Stack Developer",
  description: "Turning complex ideas into elegant digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f11] text-white min-h-screen">
        <AnimatedBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
