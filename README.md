<h1>Technologies:</h1>
<h2>Frontend:</h2>

<p>React: A library for creating user interfaces.</p>
<p>React Router Dom: For page-to-page transitions within the application.</p>
<p>Tailwind CSS: Fast and flexible style system.</p>
<p>Axios: To send requests to the server.</p>
<p>React-hook-form: Makes it easier to create forms with validation.</p>
<p>Tanstack/react-query</p>

<h2>Backend:</h2>

<p>Express: Framework for creating servers on Node.js.</p>
<p>Prisma ORM: For working with databases.</p>
<p>PostgreSQL: Popular database for storing information.</p>
<p>Cloudinary: Service for storing and processing images.</p>
<p>Express-formidable: For handling uploaded files.</p>
<p>Concurrently: Runs multiple commands simultaneously.</p>

<h2>Path</h2>
<p>"yarn run server" and "yarn run client": These are the commands that are executed concurrently. This is useful for developing both the frontend and backend simultaneously.</p>

```
 "scripts": {
    "server": "cd ./server && yarn dev",
    "client": "cd ./client && yarn dev",
    "dev": "concurrently \"yarn run server\" \"yarn run client\""
  },
```

</br>

<p>The application is configured to handle CORS requests only from a specific domain (specified in the BASE_URL environment variable). The allowed HTTP methods are GET, POST, PATCH, and DELETE, and the allowed header is Content-Type.</p>

```
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
```

</br>

<p>Prisma model</p>

```
model Superhero {
  id                Int    @id @default(autoincrement())
  nickname          String @unique
  realName          String @map("real_name")
  originDescription String @map("origin_description")
  superpowers       String
  catchPhrase       String @map("catch_phrase")
  images            String
}
```

</br>

<h3>TanStack Query is a powerful library for managing asynchronous data in React applications. It allows you to</h3>
<p>
Separate business logic from components: By using TanStack Query, data fetching and updating logic is moved out of components, making code cleaner and more maintainable.

Optimize queries: TanStack Query makes it easy to implement complex queries such as parallel queries, dependent queries, and infinite scrolling.

</p>

<h2>How to Clone</h2>
<code>git clone https://github.com/kenn2k/heroes</code>

<h2>How to Start</h2>

<h3>yarn (recommends cuz <code>concurrently</code>  is configured for yarn)</h3>

```
cd heroes

yarn install - install dependence

yarn dev - start the project
```

<h3>npm</h3>

```
cd heroes

npm install - install dependence

npm run dev - start the project
```

<h3>pnpm</h3>

```
cd heroes

pnpm install - install dependence

pnpm dev - start the project
```
