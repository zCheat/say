client.on("message", msg => {
    let args = msg.content.substring().split(" ");
    switch(args[0]){
        case "!say":
        let msgArgs = args.slice(1).join(" ");
        if(args[1]){
            msg.channel.send(msgArgs).then(msg.author.lastMessage.delete())
         }
     }
})     
