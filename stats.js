// https://discord.com/developers/applications/944966344254816266/information

let client = new (require('discord-rpc-revamp').Client)();
client.connect({ clientId: '944966344254816266' }).catch(console.error);

client.on('ready', _ => {
    client.setActivity({
        details: "Look at dis dood",
        state: "Playing with ya mum",
        startTimestamp: Date.now(),
        largeImageKey: "dick_smith",
        largeImageText: "Dick Smith",
        smallImageKey: "dedi_galer",
        smallImageText: "dedy komputer",
        partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        partySize: 6,
        partyMax: 9,
        // joinSecret: "MTI4NzM0OjFpMmhuZToxMjMxMjM= ",
        instance: true,
        buttons: [
        {
            label: "Yutub Lebih Dari TV 🤯",
            url: "https://www.youtube.com/@ud1n",
        },
        {
            label: "The Hub 👩‍💻",
            url: "https://github.com/get543",
        },
        ],
    }).then(_ => console.log('Ready! Look at your status now :)')).catch(console.error);

    client.subscribe('ACTIVITY_JOIN');
    client.subscribe('ACTIVITY_JOIN_REQUEST');

    client.on('ACTIVITY_JOIN', data => {
        console.log('ACTIVITY_JOIN', data);
    });
});