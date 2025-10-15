
🎧 **PRUEBA TÉCNICA – APP DE SOLICITUD DE CANCIONES**

### 🎯 **Objetivo general**

Desarrollar una pequeña aplicación web donde los usuarios puedan **enviar solicitudes de canciones a un DJ** y visualizar las canciones solicitadas por otros asistentes.

---

### 🧠 **Descripción funcional**

El pasante debe construir una interfaz con las siguientes secciones:

#### 1. **Formulario de solicitud**

* Campos:

  * Nombre del usuario
  * Nombre de la canción
  * Artista (opcional)
* Botón “Enviar solicitud”

Al presionar “Enviar”, la solicitud debe agregarse a una lista visible en pantalla.

---

#### 2. **Lista de solicitudes**

* Mostrar todas las canciones solicitadas con el nombre del usuario.
* Cada elemento debe incluir:

  * 🎵 Título de la canción
  * 👤 Usuario que la solicitó
  * ❤️ Botón “Me gusta” o “Votar” (contador de votos)
* Las canciones deben ordenarse **por cantidad de votos** (más votadas arriba).

---

#### 3. **Persistencia**

* Las solicitudes y votos deben guardarse en **localStorage** para que no se pierdan al recargar la página.

---

#### 4. **Requisitos técnicos**

* React con **componentes funcionales**.
* Uso de **Hooks** (`useState`, `useEffect`).
* Sin librerías externas de estado (no Redux, no Zustand).
* Uso de Eslint / prettier.
* Puede usar CSS o Tailwind.
* No se requiere backend (todo local).

---

### ⚙️ **Estructura sugerida**

```
/src
  ├── components/
  │     ├── SongForm.jsx
  │     ├── SongList.jsx
  │     └── SongItem.jsx
  ├── App.jsx
  ├── index.js
  ├── App.css
```

---

### 💡 **Funcionalidades**

* 🎤 Filtro o búsqueda de canciones por nombre o usuario.
* 🌈 Modo oscuro / claro.
* 🎶 Animación o transición suave al agregar una nueva canción.
* 🔥 Simular un “ranking en vivo” (auto-actualización cada 10s usando `setInterval`).

---

### 🧾 **Entrega**

* Subir el código a un repositorio GitHub.
* Incluir un **README.md** con:

  * Instrucciones de instalación y ejecución.
  * Descripción breve del flujo.
  * Captura o GIF del resultado final.


### ⚡ **Mini test teórico (opcional, 10 min)**

1. ¿Qué hace el hook `useEffect` y cómo evitar que se ejecute infinitamente?
2. ¿Qué diferencia hay entre props y state?
3. Si quieres actualizar un estado en función del valor anterior, ¿cómo lo harías correctamente con `setState`?

---
