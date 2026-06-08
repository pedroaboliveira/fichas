const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professor.controller');

router.route('/')
    .get(professorController.getAllTeachers)
    .post(professorController.createTeacher);

router.route('/:id')
    .get(professorController.getTeacherById)
    .put(professorController.updateTeacher)
    .delete(professorController.deleteTeacher);

module.exports = router;