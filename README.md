# Bootcamps Web App – React + TypeScript + Vite

Aplicación web desarrollada con **React**, **TypeScript** y **Vite**, que implementa autenticación de usuarios y manejo de datos usando **Firebase** o **Supabase** como backend.  
El objetivo es permitir el registro, inicio de sesión y visualización de un dashboard protegido con información sobre bootcamps disponibles.

---

## 🚀 Funcionalidades

- **Autenticación de usuarios** con Firebase Auth.
- **Manejo automático de tokens de sesión** provisto por la plataforma elegida.  
- **Persistencia de sesión** para mantener a los usuarios logueados.  
- **Página de inicio (Landing Page)** con información de bootcamps desde **Firestore**.  
- **Registro de nuevos usuarios** mediante formulario validado.  
- **Inicio de sesión seguro** usando el sistema de autenticación.  
- **Dashboard protegido** accesible únicamente para usuarios autenticados.  

---

## 🛠️ Tecnologías utilizadas

- **React + Vite + TypeScript**  
- **React Router** para manejo de rutas  
- **React Hook Form** para validación de formularios  
- **Firebase** para backend  
- **React Hooks**: `useState`, `useEffect`, `useContext`  
- **HTML5 + CSS3** con diseño responsive  

---

## 📂 Estructura del proyecto

```plaintext
src/
 ├── components/     # Componentes reutilizables
 ├── pages/          # Páginas principales (Landing, Login, Register, Dashboard)
 ├── context/        # Contextos para manejo de estado global
 ├── services/       # Configuración Firebase o Supabase
 ├── App.tsx         # Configuración principal de rutas
 └── main.tsx        # Punto de entrada

## ⚙️ Instalación y configuración

---

### 1️⃣ Clonar el repositorio
Ejecuta el siguiente comando en tu terminal:
```bash
git clone https://github.com/SofCardona/kodigo-api-frontend-react
cd nombre-repo
npm install
---

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales necesarias para **Firebase**.

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

## Enlace al proyecto en Netlify

Puedes ver la aplicación en vivo aquí: [Animated Naiad](https://animated-naiad-8ea781.netlify.app/)
