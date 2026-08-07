import type { Metadata } from "next";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Diferenciadores from "@/components/Diferenciadores";
import AlgunosDatos from "@/components/AlgunosDatos";
import { SolucionesGestion, SolucionesOperativas } from "@/components/SolucionesSections";
import AlgunosClientes from "@/components/AlgunosClientes";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "CAM Logistic | Transporte y logística B2B",
  description:
    "CAM Logistic - soluciones logísticas B2B en Chile. Primera y última milla, transporte dedicado y red de transportistas con control operacional.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <Diferenciadores />
      <AlgunosDatos />
      <SolucionesGestion />
      <SolucionesOperativas />
      <AlgunosClientes />
      <CTASection />
    </>
  );
}
