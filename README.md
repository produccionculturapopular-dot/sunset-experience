# Sunset Experience — monorepo

Monorepo pnpm + Turborepo para el ecosistema web de Cinemotora
Producciones. Hoy contiene un solo sitio (la landing de **Sunset
Experience**); está estructurado para que, cuando aparezca un segundo sitio
(el corporativo de Cinemotora, otro evento, etc.), solo haya que agregar
una nueva app en `apps/` y reusar lo que ya vive en `packages/`.

## Estructura

```
apps/
  sunset-experience/     → sitio Astro de la landing (Tailwind v4, estático)
packages/
  design-tokens/         → variables de color/tipografía + preset de Tailwind
  ui/                    → componentes Astro compartidos (Button, DoubleBezel)
  config/                → tsconfig base compartido
```

## Primeros pasos

Requisitos: Node 20+ (ver `.nvmrc`) y `pnpm` (vía `corepack enable` si no lo
tienes, o `npm install -g pnpm`).

```bash
pnpm install
pnpm dev        # levanta apps/sunset-experience en localhost
pnpm build      # build de producción (Turborepo cachea por paquete)
```

Si `@fontsource-variable/bricolage-grotesque` o
`@fontsource/hanken-grotesk` fallan al instalar, revisa el nombre exacto del
paquete en https://fontsource.org — a veces una fuente variable publica un
nombre de paquete ligeramente distinto al que se usó aquí.

## Despliegue

Pensado para Vercel: importa el repo, Vercel detecta Astro
automáticamente (output estático, sin configuración adicional). Cuando el
CTA "Avísame primero" pase de copiar un correo a capturar leads de verdad
(formulario → base de datos o servicio de email), cambiamos `output` a
`"server"` en `astro.config.mjs` y agregamos `@astrojs/vercel` para tener
funciones serverless ahí mismo.

## Decisiones de diseño

- **Un solo tema oscuro, un solo acento** (`--accent: #e8702f`). No agregar
  un segundo color de acento ni una variante clara sin actualizar
  `packages/design-tokens` primero.
- **"Double-bezel"**: el patrón de tarjeta anidada (shell + core) vive una
  sola vez en `packages/ui/src/DoubleBezel.astro`. Las tiles de acceso y la
  tarjeta de contacto lo reusan — no copiar el CSS de nuevo.
- **Sin backend todavía**: el contacto es "copiar correo al portapapeles".
  Es un placeholder intencional hasta que decidamos el mecanismo real de
  captura (ver sección de despliegue).
