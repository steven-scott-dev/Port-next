import "./globals.css";

export const metadata = {
  title: "Clay's Portfolio",
  description: "Building smart digital solutions for business and life with Clay Scott, a full-stack developer specializing in web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
