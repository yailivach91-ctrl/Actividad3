# Modal Reutilizable

## Portada
**Nadya Yahuilí Avendaño Chávez**
**Modal Reutilizable** 
**Desarrollo Web** 
**Actividad 3 - Componente Visual con JS**

### Problema que resuelve

Este componente permite mostrar información en una ventana emergente sin tener que crear un modal diferente para cada mensaje.

El título y el contenido pueden cambiar mediante parámetros, por lo que el componente puede reutilizarse en diferentes partes de una página.


## Características

- Modal interactivo.
- Botón para abrir el modal.
- Botón para cerrar el modal.
- Botón X para cerrar.
- Cierre al hacer clic fuera del modal.
- Animación de aparición.
- Contenido dinámico.
- Reutilizable con diferentes títulos y mensajes.
- Creado únicamente con HTML, CSS y JavaScript.
- No utiliza frameworks.

# Instalación

Descarga o clona el repositorio y agrega los siguientes archivos a tu proyecto:

css/componente.css
js/componente.js

En el archivo HTML se deben incluir:

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```

# Uso

Para utilizar el componente se llama a la función:

```javascript
abrirModal("Título", "Contenido del modal");
```

Por ejemplo:

```html
<button onclick="abrirModal(
    'Bienvenida',
    '¡Hola! Bienvenido a mi página.'
)">
    Mostrar bienvenida
</button>
```

También se puede utilizar con otro contenido:

```html
<button onclick="abrirModal(
    'Información',
    'Este componente puede utilizarse con diferentes mensajes.'
)">
    Mostrar información
</button>
```

Otro ejemplo:

```html
<button onclick="abrirModal(
    'Gracias',
    'Gracias por visitar nuestra página.'
)">
    Mostrar mensaje
</button>
```

El mismo componente se utiliza para todos los mensajes, solamente cambian los parámetros.

---


# Funciones principales

### abrirModal(titulo, texto)

Abre el modal y recibe dos parámetros:

* `titulo`: título que aparecerá en la ventana.
* `texto`: contenido que aparecerá en la ventana.

### cerrarModal()

Cierra el modal.

---

# Ejemplo completo

```html
<button onclick="abrirModal(
    'Aviso',
    'Este es un ejemplo de un modal reutilizable.'
)">
    Abrir modal
</button>
```

```javascript
function abrirModal(titulo, texto) {

    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalTexto = document.getElementById("modalTexto");

    modalTitulo.textContent = titulo;
    modalTexto.textContent = texto;

    modal.style.display = "flex";
}
```

---

# Capturas de pantalla

![Pagina principal](image.png)
### Modal de bienvenida
![Modal Uno](image-3.png)
### Modal con información diferente
![Modal dos](image-2.png)
![Modal tres](image-1.png)
---

# Video
