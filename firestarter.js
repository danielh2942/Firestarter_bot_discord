const Discord = require('discord-js');
const client = new Discord.client();

//	Firestarter Bot
//	Requires discord-js, ffmpeg, and node-opus all are on npm!

const token = "your api token goes here";

function startfire(connection) {
	let dispatcher = connection.playFile('path-to-firestarter');
	dispatcher.on("end", () => {
		return startfire(connection);
	});
}

client.on('message', message => {
	if (message.content === 'firestarter') {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					// Connection is an instance of VoiceConnection
					startfire(connection);
				})
				.catch(console.log);
		}
	}
});

client.login(token);