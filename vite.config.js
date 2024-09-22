// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   plugins: [
//     react(),
//     svgr({
//       svgrOptions: {
//         exportType: "default",
//         ref: true,
//         svgo: false,
//         titleProp: true,
//       },
//       include: "**/*.svg",
//     }),
//   ],
// });

// vite.config.js
// import legacy from '@vitejs/plugin-legacy'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [
//     legacy({
//       targets: ['defaults', 'not IE 11']
//     })
//   ]
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})