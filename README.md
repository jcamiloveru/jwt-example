## **JWT Example**

El objetivo principal de este proyecto es proporcionar una API web para la autenticación de usuarios utilizando un enfoque basado en JSON Web Tokens (JWT). La API ofrece dos endpoints clave: uno para generar tokens y otro para verificarlos, garantizando una gestión de autenticación simple y segura.

## Estructura del Proyecto

El proyecto sigue una estructura modular:
- `src/app.js`: Archivo principal de la aplicación.
- `src/routers/index.js`: Define las rutas de la API.
- `src/controllers/`: Contiene la lógica para la creación de tokens.
- `src/middlewares/`: Incluye el middleware de autenticación.
- `src/utils/`: Contiene utilidades para la gestión de JWT.

## Tecnologías Utilizadas

*   **Node.js**: Entorno de ejecución de JavaScript.
*   **Express**: Framework web para Node.js.
*   **JSON Web Tokens (JWT)**: Para la autenticación basada en tokens.
*   **dotenv**: Para la gestión de variables de entorno.
*   **cors**: Middleware para habilitar Cross-Origin Resource Sharing.
*   **pnpm**: Gestor de paquetes rápido y eficiente.

## Configuración y Ejecución Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/jcamiloveru/jwt-example.git
    cd jwt-example
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu clave secreta para JWT:
    ```
    SECRET=tu_clave_secreta_aqui
    PORT=4000
    ```

4.  **Iniciar el servidor en modo desarrollo:**
    ```bash
    pnpm run dev
    ```
    El servidor se ejecutará en `http://localhost:4000`.

## Endpoints de la API

La URL base para probar la API web es `https://jwt-example-01k2.onrender.com`.

**Nota:** La primera solicitud puede tardar más de lo normal, puesto que es un servicio gratuito de Render y el servicio se despierta de un estado inactivo (cold start).

### Endpoint: `/` (Health Check)

Realiza una solicitud `GET` a la raíz para verificar que la API está funcionando.

```curl
curl -X GET https://jwt-example-01k2.onrender.com/
```

Respuesta: `ok`

### Endpoint: `/token/create`

Para generar un token, realiza una solicitud **POST** a `[url-base]/token/create`. El cuerpo de la solicitud debe contener `username` y `userId` en formato JSON.

```curl
curl -X POST https://jwt-example-01k2.onrender.com/token/create \
  -H "Content-Type: application/json" \
  -d '{
    "username": "exampleUser",
    "userId": "12345"
  }'
```

Respuesta (ejemplo):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGVVc2VyIiwidXNlcklkIjoiMTIzNDUiLCJpYXQiOjE2NzgyMzU2NzB9.tu_token_generado_aqui"
}
```
![Ejemplo para crear un token atravez de Postman](https://i.imgur.com/lVzbdpE.png)

### Endpoint: `/token/check`

Para verificar un token, realiza una solicitud **GET** a `[url-base]/token/check`. El encabezado de la solicitud debe contener el token a validar en formato "Bearer eytoDdD8hfSos...".

```curl
curl -X GET https://jwt-example-01k2.onrender.com/token/check \
  -H "Authorization: Bearer <tu_token_aqui>"
```

Respuesta (ejemplo):
```json
{
  "msg": "the token is valid, you userId is: 12345"
}
```
![Ejemplo para verificar un token atravez de Postman](https://i.imgur.com/4HcHtUC.png)

---

Esta es una API web base que se encuentra en construcción. Para mayor información, puedes escribir al correo jcamiloveru@gmail.com
