import { Elysia } from "elysia";

const app = new Elysia();

app.get("/api/DO/v1/forbidden/urls", () =>
    JSON.stringify(["/api/DO/v1/forbidden/urls"])
);

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
