const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplina.controller');

router.route('/')
    .get(disciplinaController.getAllSubjects)
    .post(disciplinaController.createSubject);

router.route('/:id')
    .get(disciplinaController.getSubjectById)
    .put(disciplinaController.updateSubject)
    .delete(disciplinaController.deleteSubject);

module.exports = router;