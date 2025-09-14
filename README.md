# HCC-FRONTEND-ASTRO

🚀 Proyecto frontend de HCC usando **Astro**, **TypeScript**, **TailwindCSS** y buenas prácticas de desarrollo moderno.

---

## 📦 Tecnologías

- [Astro](https://astro.build/) – Framework de frontend para sitios rápidos.
- [TypeScript](https://www.typescriptlang.org/) – Tipado seguro y escalable.
- [TailwindCSS](https://tailwindcss.com/) – Framework de CSS utilitario.
- [ESLint](https://eslint.org/) – Linter para mantener código limpio.
- [Prettier](https://prettier.io/) – Formateador de código automático.
- [Husky](https://typicode.github.io/husky/) – Hooks de Git para calidad antes de commit.
- [eslint-plugin-astro](https://github.com/snowpackjs/eslint-plugin-astro) – Reglas para archivos `.astro`.

---

## 📂 Estructura de carpetas

```
src/
├─ components/   # Componentes reutilizables
├─ layouts/      # Layouts principales
├─ pages/        # Páginas Astro
├─ styles/       # CSS / Tailwind
├─ tests/        # Scripts de prueba / lint
└─ .astro/       # Archivos generados por Astro (ignorados por ESLint)
```

## ⚡ Scripts disponibles

```json
{
  "dev": "astro dev",                       // Levanta servidor de desarrollo
  "build": "astro build",                   // Genera build de producción
  "preview": "astro preview",               // Previsualiza build local
  "format": "prettier --write .",           // Formatea todo el proyecto
  "lint": "eslint src --ext .js,.ts,.astro", // Analiza código con ESLint
  "lint:fix": "eslint src --ext .js,.ts,.astro --fix", // Corrige errores automáticos
  "check": "npm run lint && npm run format", // Revisión rápida de calidad de código
  "prepare": "husky install",              // Instala hooks de Husky
  "astro": "astro",                         // Comando directo de Astro
  "test:lint": "eslint src/tests --ext .js,.ts,.astro" // Lint específico para tests
}
```

---

## 🛠️ Instalación

1. Clonar el repositorio:

```bash
git clone https://tu-repositorio.git
cd HCC-FRONTEND-ASTRO
```

2. Instalar dependencias:

```bash
npm install
```

3. Instalar Husky (para hooks de pre-commit, etc.):
```bash
npm run prepare
```
---

## 💡 Buenas prácticas

- Ejecutar `npm run lint` antes de commitear para mantener la calidad del código.
- Usar `npm run lint:fix` para arreglar errores automáticos.
- Formatear código con `npm run format`.
- Mantener archivos `.d.ts` y `.astro` generados fuera de ESLint (ya configurado).
- Evitar `any` en TypeScript y preferir `const` sobre `let` si la variable no se reasigna.
- Evitar redeclaraciones de variables y shadowing.
- Usar siempre punto y coma y comillas dobles para mantener consistencia.
- Seguir las reglas de estilo y buenas prácticas definidas en ESLint.

---
## 🧪 Pruebas rápidas

Para probar ESLint con tus tests:

```bash
npm run test:lint
```

Para ejecutar lint en todo el proyecto:
```bash
npm run lint
```
Para corregir errores automáticamente:
```bash
npm run lint:fix
```