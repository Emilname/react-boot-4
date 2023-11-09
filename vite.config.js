import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://emilname.github.io/react-boot-4/",
  plugins: [react()],
});
