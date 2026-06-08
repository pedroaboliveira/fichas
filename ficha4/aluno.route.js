const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/aluno.controller');


router.route('/')
    .get(alunoController.getAllStudents)
    .post(alunoController.createStudent);


router.route('/:id')
    .get(alunoController.getStudentById) 
    .put(alunoController.updateStudent)
    .delete(alunoController.deleteStudent);

module.exports = router;