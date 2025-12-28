import { Footer } from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import TopBar from "@/Components/Shared/TopBar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
