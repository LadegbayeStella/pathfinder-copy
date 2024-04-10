import { Header } from "./layout/header";
import { Navbar } from "./layout/navbar";
// import Footer from './footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      {/* //   <Footer /> */}
    </>
  );
}
