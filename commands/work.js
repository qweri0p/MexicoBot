function command(message, db) {
  db.get(`SELECT * FROM Main WHERE User=?`, [message.author.id], (err, row) => {
    if (err) { console.log(err); return; }
    if (row == null) {
    message.channel.send("Use 'Mex start' first.");
    } else {
      let nextMoney = row.Money + 5;
      db.run(`UPDATE Main SET Money = ? WHERE User = ?`, [nextMoney, message.author.id], function(err) {
        if (err) { throw err; }
      });
      message.channel.send(`You have ${nextMoney} pesos.`);
    }
  });
}

module.exports = { command };
