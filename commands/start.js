function command(message, db) {
  db.get(`select * from Main where User=?`, [message.author.id], (err, row) => {
    if (err) { throw err; }
    if (row != null) {
      message.channel.send("You already have money.");
    } else {
      db.run(`insert into Main (User, Money) values (?, 69)`, [user]);
      message.channel.send("You now have 69 pesos");
    }
  });
}

module.exports = { command };
