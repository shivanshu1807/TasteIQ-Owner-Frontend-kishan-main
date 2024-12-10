import Navbar from "@/components/header/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:grid grid-cols-12 h-screen">
      <div className="md:col-span-3 lg:col-span-2 w-full hidden md:flex border-r">
        <Sidebar />
      </div>
      <div className="md:col-span-9 lg:col-span-10 w-full">
        <Navbar />
        <div className="relative flex bg-secondary p-4 md:p-6 h-[calc(100vh-4rem)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
