import SideNav from "@/components/SideNav";

export default function Layout({ children }) {
  return (
    <main className="h-screen flex">
      <SideNav />
      <section className="h-full w-full py-10 px-5">{children}</section>
    </main>
  );
}
