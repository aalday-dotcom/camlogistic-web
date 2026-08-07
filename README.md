# CAM Logistic — Sitio Web Corporativo (V1)

Nueva versión del sitio corporativo de CAM Logistic, construida como partner
logístico B2B (primera y última milla, transporte dedicado, operaciones
especiales). Next.js 16 + React 19 + TypeScript + Tailwind CSS v4.

Posicionamiento: **CAM Logistic no vende camiones. CAM Logistic administra
operaciones logísticas.**

---

## 1. Estructura del proyecto

```
camlogistic-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raíz: fuentes, TopBar, Navbar, Footer, SEO/schema
│   │   ├── page.tsx          # Inicio
│   │   ├── globals.css       # Tokens de diseño (colores, tipografía, animaciones)
│   │   ├── sitemap.ts        # /sitemap.xml
│   │   ├── robots.ts         # /robots.txt
│   │   ├── nosotros/page.tsx
│   │   ├── servicios/page.tsx
│   │   ├── empresas/page.tsx
│   │   ├── transportistas/page.tsx
│   │   └── contacto/page.tsx
│   └── components/
│       ├── TopBar.tsx        # Barra superior delgada
│       ├── Navbar.tsx        # Navegación sticky + menú móvil
│       ├── Footer.tsx        # Footer de 4 columnas
│       ├── Hero.tsx          # Hero principal (home)
│       ├── RoutePanel.tsx    # Visual de firma: panel de ruta monitoreada (SVG animado)
│       ├── ServiceCards.tsx  # Sección "Qué resolvemos"
│       ├── OperationalModel.tsx # Sección "Modelo CAM" (fondo navy)
│       ├── PartnerSection.tsx   # Indicadores B2B / RM+ / 360°
│       ├── Industries.tsx    # Sectores atendidos
│       ├── Testimonials.tsx  # Testimonios reales (parafraseados)
│       ├── CTASection.tsx    # CTA reutilizable
│       ├── ContactForm.tsx   # Formulario de cotización B2B
│       ├── SectionHeader.tsx # Eyebrow + título reutilizable
│       └── Reveal.tsx        # Animación de aparición al hacer scroll
└── public/                   # Reservado para imágenes reales (ver sección 6)
```

## 2. Ejecutar en local

Requiere Node.js 20+.

```bash
cd camlogistic-web
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para probar la build de producción localmente:

```bash
npm run build
npm run start
```

## 3. Subir a GitHub

```bash
cd camlogistic-web
git init
git add .
git commit -m "CAM Logistic — sitio corporativo V1"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/camlogistic-web.git
git push -u origin main
```

> El `.gitignore` generado por Next.js ya excluye `node_modules/` y `.next/`.

## 4. Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) → **Add New… → Project**.
2. Importa el repositorio `camlogistic-web` desde GitHub.
3. Framework Preset: Vercel detecta **Next.js** automáticamente. No requiere
   variables de entorno para esta V1 (el formulario aún no está conectado a
   un backend, ver sección 6).
4. Deploy. Vercel entrega una URL de preview tipo
   `camlogistic-web.vercel.app` para revisar antes de conectar el dominio
   final.

### Conectar el dominio `camlogistic.cl`

**No se ha tocado el DNS ni el sitio productivo actual.** Cuando el diseño
esté aprobado:

1. En el proyecto de Vercel → **Settings → Domains** → agrega `camlogistic.cl`.
2. Vercel indicará los registros DNS a apuntar (A/CNAME) en el proveedor
   donde está administrado el dominio actualmente.
3. Recomendado: probar primero con un subdominio (p. ej.
   `beta.camlogistic.cl`) antes de mover el dominio raíz.

## 5. Qué se implementó del brief

- Identidad visual: azul `#11559A`, dorado `#DCB256`, navy `#071B2E`,
  tipografías Manrope (display), Inter (cuerpo) y JetBrains Mono
  (eyebrows/labels, refuerza el lenguaje "control operacional").
- TopBar + Navbar sticky con menú hamburguesa en móvil.
- Hero con panel de "ruta monitoreada" (elemento de firma visual): SVG
  animado con trazo de ruta, waypoints y badge "Operación monitoreada".
- 6 páginas: Inicio, Nosotros, Servicios, Empresas, Transportistas, Contacto.
- Sección "Modelo CAM" en navy oscuro con 4 capacidades.
- Sección "Partner logístico" con indicadores grandes (B2B / RM+ / 360°).
- Sección de industrias (Retail, Courier, Consumo masivo, Industria).
- Testimonios reales de clientes (Euroluxe, Asirep), parafraseados desde el
  sitio actual — no se inventaron cifras corporativas.
- Formulario de cotización B2B en `/contacto` con todos los campos pedidos.
- Formulario de postulación de transportistas en `/transportistas`.
- SEO: metadata por página, Open Graph, `sitemap.xml`, `robots.txt`, schema
  `Organization` (JSON-LD).
- Scroll reveals discretos, hover en cards, estados focus visibles,
  `prefers-reduced-motion` respetado, responsive completo.

## 6. Pendientes antes de producción

1. **Fotografías reales.** Todo el sitio usa gradientes/paneles abstractos en
   vez de fotografía (no se usó stock genérico para no comprometer el
   look premium). Reemplazar:
   - Hero: opcionalmente una fotografía real de operación superpuesta al
     panel de ruta, o mantener el panel abstracto (funciona bien solo).
   - Sección Industrias: 4 fotografías (retail, courier, consumo masivo,
     industria) para los overlays de las cards.
   - Página Nosotros / Empresas: fotografías de bodega, conductores,
     centro de distribución.
2. **Formulario de contacto y de transportistas**: hoy solo simulan el envío
   en el navegador (`onSubmit` con estado local). Falta conectar a un
   backend real: API Route de Next.js + email (Resend/SendGrid) o un CRM.
3. **CAM HUB**: la página de Transportistas está preparada para conectar el
   formulario a CAM HUB o a un formulario externo, según se indicó en el
   brief.
4. **Logos de clientes reales** en la sección Industrias (hay una nota
   placeholder: "Espacio reservado para logos de clientes por industria").
5. **Favicon e íconos**: actualmente se usa el favicon por defecto de Next.js;
   reemplazar por el isotipo de CAM Logistic.
6. **Contenido legal**: falta política de privacidad y términos si el
   formulario va a recolectar datos personales (Ley 19.628 en Chile).
7. **Analítica**: no se incluyó Google Analytics / Meta Pixel; agregar según
   se defina la estrategia de medición.

## 7. Notas de diseño

- El elemento de firma visual (`RoutePanel.tsx`) traduce literalmente el
  concepto "operación bajo control" del brief: una ruta trazada con
  waypoints, un badge de monitoreo y un panel de métricas, en vez de un
  ícono de camión genérico.
- Se evitaron animaciones excesivas: solo el trazo de ruta en el hero, un
  pulso sutil en el punto de entrega, y reveals de scroll discretos.
- Los "10 pasos" de la página Empresas y los "4 pasos" de Nosotros/Servicios
  sí están numerados porque representan una secuencia real de trabajo, no
  una lista decorativa.
