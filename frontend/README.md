# Gestor de Canciones con React y Tailwind CSS

Una aplicación web simple y responsiva construida con React que permite al usuario alternar entre un formulario para añadir canciones y una vista para listar las canciones existentes. La interfaz está diseñada con Tailwind CSS, asegurando que sea funcional y atractiva tanto en dispositivos de escritorio como móviles.

## 📋 Características

- **Navegación Reactiva:** Barra de navegación que cambia entre dos vistas principales sin recargar la página.
- **Diseño Responsivo:** Interfaz completamente adaptable a móviles, tablets y escritorio gracias a Tailwind CSS.
- **Componentes Modulares:** Estructura basada en componentes de React para una mejor organización y mantenibilidad.
- **Estado Centralizado:** Manejo del estado a nivel del componente principal para controlar la vista activa.

---

## 🛠️ Tecnologías Utilizadas

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## ⚙️ Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (que incluye npm).

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Anacordoba10/solicitudes-de-canciones?tab=readme-ov-file#solicitudes-de-canciones](https://github.com/Anacordoba10/solicitudes-de-canciones?tab=readme-ov-file#solicitudes-de-canciones)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd [solicitudes-de-canciones]
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Inicia la aplicación en modo de desarrollo:**
    ```bash
    npm start
    ```

¡Listo! Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

---

## 📄 Descripción del Flujo

El flujo de la aplicación es sencillo e intuitivo:

1.  Al cargar la aplicación, se muestra una vista por defecto (por ejemplo, el **Formulario**).
2.  En la parte superior, una barra de navegación estática presenta dos opciones: **"Formulario"** y **"Lista de Canciones"**. El botón de la vista activa se muestra con un estilo diferente para indicar la selección actual.
3.  El usuario puede hacer clic en cualquiera de los dos botones para cambiar el contenido que se muestra debajo de la barra de navegación, alternando entre el componente del formulario y el de la lista.

