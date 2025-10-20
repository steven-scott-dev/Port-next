import "./globals.css";

export const metadata = {
  title: "Clay's Portfolio",
  description: "Full-stack developer portfolio by Steven Clay Scott",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
