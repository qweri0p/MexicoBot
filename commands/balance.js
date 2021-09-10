function command(user, message, db) {
  db.get(`seLECt * fRoM Main wheRE User=?`, [user], (err, row) => {
    if (err) { throw err; }
    if (row == null) {
      message.channel.send("Use 'Mex start' first.");
      return;
    } else {
      message.channel.send(`You have ${row.Money} pesos.`);
    }
  });
}

module.exports = { command };
