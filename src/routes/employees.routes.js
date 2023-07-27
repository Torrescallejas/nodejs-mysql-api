import {Router} from 'express'
import {getEmployee, getEmployees, createEmployees, updateEmployee, deleteEmployee} from '../controllers/employees.controller.js'

const router = Router()

// OBETENER
router.get('/employees', getEmployees) //Se hace mas facil de leer

// -----------OBTENER UN SOLO EMPLEADO---- HABILITAR EN employees.controller.js
router.get('/employees/:id', getEmployee)

// AGREGAR
router.post('/employees', createEmployees)

// ACTUALIZAR
router.patch('/employees/:id', updateEmployee)

// ELIMINAR
router.delete('/employees/:id', deleteEmployee)

export default router