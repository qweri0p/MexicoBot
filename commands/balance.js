function command(message, db) {
  db.get(`seLECt * fRoM Main wheRE User=?`, [message.author.id], (err, row) => {
    if (err) { throw err; return;}
    if (row == null) {
      message.channel.send("Use 'Mex start' first.");
      return;
    } else {
      message.channel.send(`You have ${row.Money} pesos.`);
    }
  });
}

module.exports = { command };
