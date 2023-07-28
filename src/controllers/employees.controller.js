import {pool} from '../db.js'

export const getEmployees = async (req, res) => {
    try {
        //Consulta
        const [result] = await pool.query('SELECT * FROM employee')
        res.json(result)
    }catch(err) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

// ----------OBETENER UN SOLO EMPLEADO -------
export const getEmployee = async (req, res) => {
    try {
        //Consulta
        const [result] = await pool.query('SELECT * FROM employee WHERE id=?', [req.params.id])
        //Verificación de cambio        
        if(result.length <= 0) return res.status(404).json({ message: 'Employee Not Found'})
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

// ---------CREA UN NNUEVO EMPLEADO--------------
export const createEmployees = async (req, res) => {
    const {name, salary} = req.body
    try {
        //Consulta
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
        //res.send({ rows }) //-----Se coloca entre llaves para que lo devuelva en formato JSON
        res.send({
        id: rows.insertId,
        name,
        salary
        })
    } catch (error) {
       return res.status(500).json({message: 'Something goes wrong'})
    }
}

// ----------ACTUALIZA UN EMPLEADO----------
export const updateEmployee = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body

    try {
        //Consulta
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]) 
        //Verificación de cambio
        if(result.affectedRows <= 0) return res.status(404).json({ message: 'Employee Not Found' })  
        //imprime los cambios
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
}


// -------------ELIMINA UN EMPLEADO----------
export const deleteEmployee = async (req, res) => {
    try {
        //Consulta
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        //Verificación de cambio
        if(result.affectedRows <= 0) return res.status(404).json({ message: 'Employee Not Found' }) 
        //imprime los cambios
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
} 