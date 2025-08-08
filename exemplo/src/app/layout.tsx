import type { Metadata } from "next";
import "./globals.css";
// import { TopMenuComponent from '../components/top-menu'}
import TopMenuComponent from "@/components/top-menu/index";

export const metadata: Metadata = {
  title: "Primeiro projeto NextJS",
  description: "Este é um projeto com finalidade de aprendizado da biblioteca ReacJS e do framework NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="flex flex-col 
        lg:flex-row justify-between jg:justify-center 
        lg:content-between lg:flex-wrap h-screen"
      >
        <header
          className="w-screen h-18"
        >
          <TopMenuComponent />
        </header>
        <aside
          className="hidden lg:block w-56 h-screen"
        >
          Menu lateral
        </aside>
        <main
          className="w-screen lg:w-max grow flex flex-col justify-center items-center"
        >
          {children}
        </main>
        <footer
          className="w-screen h-18" 
        >
          Rodapé
        </footer>
        </body>
    </html>
  );
}
