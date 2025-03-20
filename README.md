## **JWT Example**

El objetivo principal se centra en crear una API web, que permita la autenticación de usuarios usando un efoque basado en tokens. la API permite que por medio de dos endpoints uno para generar un token y otro para verificar un token. Garantizando una gestion de autenticación simple y completa.

## Endpoints ejemplo

Url base para probar la API web https://jwt-example-01k2.onrender.com

**Nota** la primera solicitud puede tardar más de lo normal, puesto que es un servicio gratuito de Render y el servicio se despierta de un estado inactivo (cold start).

### Endpoint: token/create

Para generar un token se hace una solitud **post** a   **[url-base](https://jwt-example-01k2.onrender.com)/token/create** el body de la solicitud debe contener necesariamente dos argumentos "username" y "userId" en formato JSON

```curl
curl -X POST https://jwt-example-01k2.onrender.com/token/create \
  -H "Content-Type: application/json" \
  -d '{
    "username": "exampleUser",
    "userId": "12345"
  }'
```

respuesta
![Ejemplo para crear un token atravez de Postman](https://i.imgur.com/lVzbdpE.png)

### Endpoint: token/check

Para verificar un token se hace una solicitud **get** a **[url-base](https://jwt-example-01k2.onrender.com)/token/check** el encabezado de la solicitud debe contener el token a validar en formato "Bearer eytoDdD8hfSos..."

```curl
curl -X GET https://jwt-example-01k2.onrender.com/token/check \
  -H "Authorization: Bearer <tu_token_aqui>"
```

respuesta
![Ejemplo para verificar un token atravez de Postman](https://i.imgur.com/4HcHtUC.png)

---

Esta es una API web base que se encuentra en construcción. Para mayor información, puedes escribir al correo jcamiloveru@gmail.com
