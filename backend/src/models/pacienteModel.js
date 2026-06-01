import db from '../database.js'

export const PacienteModel = {

  listarTodos() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM pacientes ORDER BY criado_em ASC', [], (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
      })
    })
  },

  criar({ nome, prioridade }) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO pacientes (nome, prioridade) VALUES (?, ?)`,
        [nome, prioridade],
        function (err) {
          if (err) reject(err)
          else {
            db.get('SELECT * FROM pacientes WHERE id = ?', [this.lastID], (err, row) => {
              if (err) reject(err)
              else resolve(row)
            })
          }
        }
      )
    })
  },

  atualizarStatus(id, status) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE pacientes SET status = ? WHERE id = ?`,
        [status, id],
        function (err) {
          if (err) reject(err)
          else if (this.changes === 0) resolve(null)
          else {
            db.get('SELECT * FROM pacientes WHERE id = ?', [id], (err, row) => {
              if (err) reject(err)
              else resolve(row)
            })
          }
        }
      )
    })
  },

  remover(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM pacientes WHERE id = ?`, [id], function (err) {
        if (err) reject(err)
        else resolve(this.changes > 0)
      })
    })
  }
}