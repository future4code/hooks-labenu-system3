import { app } from "./app";
import { getClasses } from "./endpoints/class/getClass";
import { createClasses } from "./endpoints/class/createClass";
import { createNewStudent } from "./endpoints/student/createNewStudent";
import { getStudentByName } from "./endpoints/student/getStudentByName";
import { updateStudentClass } from "./endpoints/student/updateStudentClass";

// Pegar Turmas
app.get("/classes", getClasses);

// Criar  Turma
app.post("/classes", createClasses);

// Pegar estudante pelo nome
app.get("/student/:name", getStudentByName);

// Criar estudante
app.post("/create-user", createNewStudent);

// Trocar estudante de turma
app.put("/student/change-class", updateStudentClass);
