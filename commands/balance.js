function command(user, message, db) {
  db.get(`seLECt * fRoM Main wheRE User=?`, [user], (err, row) => {
    if (err) { throw err; }
    if (row == null) {
      message.channel.send("Gebruik eerst 'Mex start'");
      return;
    } else {
      message.channel.send(`Je hebt ${row.Money} pesos.`);
    }
  });
}

module.exports = { command };
