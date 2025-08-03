import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <SidebarProvider className="w-full">
      <AppSidebar />
      <main className="w-full  max-w-[86rem] bg-[#F3F3F7]  flex flex-col">
        <Header title={title} />
        <div
          id="content"
          className="  w-full xl:w-8/10 mx-auto max-xl:p-3.5 flex flex-col gap-6"
        >
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
