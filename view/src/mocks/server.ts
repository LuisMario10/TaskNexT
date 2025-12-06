import { createServer, Model } from "miragejs"

createServer({
    models: {
        todos: Model
    },  
    routes() {
        this.namespace = "api";

        this.get("/todos", (schema) => {
            return schema.all('todos');
        });

        this.post("/todos", (schema, request) => {
            const dataParse = JSON.parse(request.requestBody);

            return schema.create('todos', dataParse);
        });

        this.put('/todos/:id', (schema, request) => {
            const id = request.params.id;

            const dataParse = JSON.parse(request.requestBody);

            const todo = schema.find('todos', id);

            todo?.update(dataParse);

            return { }
        });

        this.delete("/todos/:id", (schema, request) => {
            const id = request.params.id;

            const todo = schema.find("todos", id);

            todo?.destroy();

            return {}
        })
    }

})

export {}