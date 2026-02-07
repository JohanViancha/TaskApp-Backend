
---

# 📄 README – Backend (Node.js + Express + Cloud Functions)

```markdown
# TaskApp - Backend

## Descripción

Backend serverless desarrollado con **Node.js**, **Express**, **TypeScript** y **Cloud Functions**, conectado a **Firebase Firestore**.  

Permite manejar usuarios y tareas con endpoints seguros usando **JWT**.

---

## Tecnologías

- Node.js
- Express.js
- TypeScript
- Firebase Cloud Functions
- Firebase Firestore
- UUID
- CORS

---

## Estructura de Carpetas


---

# 📄 README – Backend (Node.js + Express + Cloud Functions)

```markdown
# TaskApp - Backend

## Descripción

Backend serverless desarrollado con **Node.js**, **Express**, **TypeScript** y **Cloud Functions**, conectado a **Firebase Firestore**.  

Permite manejar usuarios y tareas con endpoints seguros usando **JWT en cookies httpOnly**.

---

## Tecnologías

- Node.js
- Express.js
- TypeScript
- Firebase Cloud Functions
- Firebase Firestore
- UUID
- CORS

---

## Estructura de Carpetas

functions/
├── src/
│ ├── domain/
│ │ ├── entities/ # Entities: User, Task
│ │ └── repositories/ # Interfaces de repositorios
│ ├── application/
│ │ └── dto 
│ │ └── use-cases/ # Casos de uso (CreateTask, UpdateTask, etc.)
│ ├── infrastructure/
│ │ ├── services/ # Servicios de JWT, Firestore, etc.
│ │ └── repositories/ # Implementaciones de repositorios
│ ├── interfaces/
│ │ └── controllers/ # Controllers de Express
│ │ └── routes.ts # Rutas de Express
│ ├── main.ts # Inicialización de Cloud Functions
│ 



---

## Endpoints

| Método | Ruta                 | Descripción |
|--------|--------------------|-------------|
| GET    | /tasks              | Obtener todas las tareas del usuario |
| POST   | /tasks              | Crear nueva tarea |
| PUT    | /tasks/:id          | Actualizar tarea existente |
| DELETE | /tasks/:id          | Eliminar tarea |
| POST   | /users              | Crear usuario |
| GET    | /users/:email       | Obtener usuario por email |

---

## Uso

### 1. Instalar dependencias


cd functions
npm install




### 2. Ejecutar localmente

npm run serve

### 3. Desplegar en Firebase

firebase deploy --only functions


```bash