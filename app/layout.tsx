
import type { Metadata } from "next";
import Layout from "../components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viaje+ | Portal de Viagens",
  description: "Descubra destinos incríveis para sua próxima viagem."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
