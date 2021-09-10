function update(message) {
    if (message.author.id == '354943770464354306') {
        //TODO: perform "git pull"
        message.channel.send('Updated!');
    } else {
        message.channel.send('Only qweriop#0416 can update this bot.');
    }

}

module.exports = { update };