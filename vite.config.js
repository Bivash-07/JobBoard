import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Call dotenv and it will return an object with a parsed key
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
