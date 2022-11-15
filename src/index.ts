import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as http from "http";
import * as Logger from "bunyan";
import { v4 as uuid } from 'uuid';

const log = Logger.createLogger({name: "techTest"});
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

interface ITodo {
  id: string;
  value: string;
}

interface IBDD {
  todos: ITodo[];
}

export const BDD: IBDD = {todos: []};

app.use("/health", (req, res) => {
  res.status(200).send({
    service: "technicalTest",
    status: "ok",
  });
});

app.get("/todo", (req, res) => res.status(200).send(BDD.todos));
app.post("/todo", (req, res) => new Promise((resolve) => resolve(true)).then(() => insertTodo({id: uuid(), value: req.body.value})).then(() => log.info("Todo created")).then(() => res.status(200).send({status:"ok"})));


export const insertTodo = (todo: ITodo) => {
  BDD.todos.push(todo);
}

// error handler
app.use((err, _req, res, _next): void => {
  log.error({ err }, "Error in request");
  res.locals.message = err.message;
  res.locals.error = !process.env.STAGE ? err : {};
  res.status(err.status || 500).send(err);
});

const server = http.createServer(app);
server.listen(8000, function () {
  log.info("API listening to: http://localhost:8000/");
});

export function stop() {
  server.close();
}
