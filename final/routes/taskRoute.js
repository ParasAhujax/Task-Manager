const express = require('express');
const router = express.Router();
const {createTask,readTask,updateTask,deleteTask} = require('../controllers/taskController');

router.get('/',readTask);
router.post('/create',createTask);
router.put('/update',updateTask);
router.delete('/delete',deleteTask);

module.exports = router;