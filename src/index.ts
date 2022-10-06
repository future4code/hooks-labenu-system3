import { app } from "./app";
import { getClasses } from "./endpoints/class/getClass";
import { createClasses } from "./endpoints/class/createClass";
import { createNewStudent } from "./endpoints/student/createNewStudent";
import { getStudentByName } from "./endpoints/student/getStudentByName";
import { updateStudentClass } from "./endpoints/student/updateStudentClass";
import { createTeacher } from "./endpoints/teacher/createTeacher";
import { getAllTeacher } from "./endpoints/teacher/getAllTeacher";
import { updateTeacherClass } from "./endpoints/teacher/updateTeacherClass";

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

// Criar docente
app.post ("/create-teacher", createTeacher);

// Pegar todos os docentes
app.get("/teacher",getAllTeacher )

// Docente troca de turma
app.put("/teacher/change-class", updateTeacherClass)