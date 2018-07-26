
// 449421638199672852


const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
});


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'كيف استطيع مساعدتك ؟',
        'my prefix is "**!.**"',
        ''
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});

/*
client.on('message', message => {
            if (message.content.startsWith('!.help')) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **=-=-=-=-=-=-=** ' ,'***__!.help-ar__*** == **لرسالة المساعدة بالــلغة العربية** ')
.addField('     **=-=-=-=-=-=-=** ' ,'!.***__help-en__*** == **For help message in English** ')
.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley:  شكراً لإستعمالك البوت**') 
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
 */    


client.on("message", message => {
      if (message.content === "!.ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley:  pong!**')
  .addField('** : سرعة الإتصال هي**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});


client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['!.invite','!.help','my prefix is "!."','By Abo Khalil','التحديث غدا ان شاء الله'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/GamerzBot`);
    }, ms);

});

client.on('message', message => {
  if (true) {
if (message.content === '!.invite') {
      message.author.send('**تفضل اخي الرابط , يشرفنا دعوتك للبوت واستعماله**').catch(e => console.log(e.stack));
	  message.author.send('https://goo.gl/ahkV3Z').catch(e => console.log(e.stack));
    }
   }
  });
 

 client.on('message', message => {
            if (message.content.startsWith('!.info-report')) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
  .addField('     **=-=-=-=-=-=-=** ' ,'اهلا وسهلا بك')
  .addField('     **=-=-=-=-=-=-=** ' ,'| اذا كنت تريد ارسال ر سالة لصاحب البوت |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| عليك التوجه لأحد السيرفرات التي يتواجد بها البوت |')
  .addField('     **=-=-=-=-=-=-=** ' ,'| وكتابة الأمر  |')
  .addField('     **!.report** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **كمثال** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **!.report السلام عليكم** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **وبهذه الطريقة سيتم ارسال الرسالة لصاحب البوت** ' ,'| **=-=-=-=-=-=-=**  |')
  .addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
    var prefix = "!.";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
            if(!message.channel.guild) return message.reply('**عزيزي , لا يمكن مسح الشات إلا داخل السيرفرات**');				
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **عزيزي أنت لست مشرفاً**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "حذف الرسائل",
        color: 0x06DF00,
        description: "لقد تم حذف الرسائل بنجاح ",
        footer: {
          text: "By Abo Khalil"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 



 client.on("message", message => {
    if(message.content.startsWith(prefix + "server-info")) {
		if(!message.channel.guild) return message.reply('** عزيزي , هذه الأوامر فقط للسيرفرات **');
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**لا تملك الرتبة الكافية لإستعمال هذا الأمر ❌**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**عدد أعضاء السيرفر 👤 **' , `${message.guild.memberCount}`)
.addField('**صاحب السيرفر 👑**' , `${message.guild.owner.user.username}`)
.addField(`**الرومات في السيرفر :scroll: **`,true)
.addField(`# الرومات الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الرومات الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**جميع الرتب**:briefcase:`,`${message.guild.roles.size}`)
.addField(`📆 تاريخ إنشاء السيرفر`, message.guild.createdAt ,true)
        message.channel.send({embed:embed})
    }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "onsaybyabokhalil") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

  client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '!.botserver') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
  
 client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "!.roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});

client.on('message', message => { 
     var prefix = "!."
    if (message.content.startsWith(prefix + 'emoji')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});




client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!.closeroms") {
                        if(!message.channel.guild) return message.reply(' عزيزي , هذه الأوامر فقط للسيرفرات ');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**عزيزي , انت لست من المشرفين لتستعمل هذه الخاصية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم إقفال شات ✅ , ولا يمكن لأحد التحدث عدا المشرفين**")
           });
             }
if (message.content === "!.openroms") {
    if(!message.channel.guild) return message.reply('**عزيزي , هذه الأوامر فقط للسيرفرات**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('يجب ان تكون مسؤول الرسائل , او ان تكون مشرفاً');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply(" تم فتح الشات ✅, ويمكن للجميع التحدث الآن")
           });
             }



});


client.on('message', message => {
    if (message.content === "!.roms") {
       if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات✅**`)
        .addField('⬇  عدد الرومات في السيرفر✔',`** ${message.guild.channels.size}**`)
        
.addField('⬇اسماء الرومات قائمة رومات السيرفر ✔:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`في امان الله اخي الغالي ..`)
    .addField('اصبح عدد السيرفر :',`**[ ${member.guild.memberCount} ]** عضواً`,true)
    .setColor('RED')
    .setFooter(`البوت اللامع :)`, '')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
})

client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("**قم بعمل منشن للشخص المراد طرده**");

    mention.kick("طردت بواسطة: " + message.author.tag);
    
    message.channel.send("**تم طرد الشخص وتم ادراج رسالة طرد له في الخاص**: " + mention.tag);
};
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = [' اهلا وسهلا بك يا عزيزي','اوامر العامة','اوامر المشرفين','اوامر الميوزك','اوامر القران','إضافة البوت','مراسلة صاحب البوت','شكرً جزيلا لكم']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription([page-1])
	.addField('     **=-=-=-=-=-=-=** ' ,'╔[❖══════════════════════❖]╗')
    .addField('     **=-=-=-=-=-=-=** ' ,'| A للأوامـر الـعامة إخـــتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| B للأوامر المشرفين إختـــر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| C للأوامر الميـوزك إختـــر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| D للأوامر الــقران إخـــتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| E لإضافة البــــوت إخـــتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| F لمراسلة صاحب البوت إختر |')

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
			msg.react('🇩')
			msg.react('🇪')
			msg.react('🇫')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		const bokwardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		const bekwardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		const brkwardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
		const bnkwardsFilter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
		const bokwards = msg.createReactionCollector(bokwardsFilter, { time: 20000});
		const bekwards = msg.createReactionCollector(bekwardsFilter, { time: 20000});
		const brkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		const bnkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		
		
		
        bnkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ التواصل _
╔[❖══════════════════════❖]╗
|  لمراسلة صاحب البوت قم بكتابة الأمر
  | !.info-report | 
  | سيقوم البوت بإعطائك امر وطريقة ارسالها | 
╚[❖══════════════════════❖]╝
** _ التواصل _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    	
		
        brkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**_ الرابط _
╔[❖══════════════════════❖]╗
|  تفضل أخي الغالي رابط البوت
  | https://goo.gl/ahkV3Z | 
╚[❖══════════════════════❖]╝
** _ الرابط _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ أوامر القران الكريم _
╔[❖══════════════════════❖]╗
|  قريباً جداً بإذن الله تعالى   |
╚[❖══════════════════════❖]╝
** _ اوامر القرآن الكريم _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bokwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ اوامر الميوزك _
╔[❖══════════════════════❖]╗
|  قريباً جداً بإذن الله تعالى   |
╚[❖══════════════════════❖]╝
** _ اوامر الميوزك _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    


		backwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**_الأوامر العامة_
╔[❖══════════════════════❖]╗
|  لــمعرفة تفاصيل السيرفر  |
| ----    !.serverinfo    ----|
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمعرفة جميع رومات السيرفر |
| ----    !.roms    ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة  حميع الرتب في السيرفر |
| ----    !.roles   ---- |
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.info    ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.emoji   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة سرعة اتصال البــوت |
| ---    !.ping   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لإنشاء روم مؤقت وتفاصيله |
| ---    !.tem-rom   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لإعادة ارسال صورتك او صورة من تمنشنه |
| ---    !.picture   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة تفاصيل الرتب  |
| ---    !.info-role   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة جميع تفاصيل البوت |
| ---    !.bot-info   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لإضافة البوت في السيــرفرك |
| ---    !.invite   ---- |
╚[❖══════════════════════❖]╝
**_الأوامر العامة_
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
	
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖══════════════════════❖]╗
|  لطرد شخـص مع ارسال السبب |
| ----    !.kick    ----|
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لحظر شخـص مع ارسال السبب |
| ----    !.ban    ---- |
╚[❖══════════════════════❖]╝
=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لإعطاء ميوت مع ارسال السبب |
| ----    !.mute    ---- |
╚[❖══════════════════════❖]╝
=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لإنذار شخـص مع ارسال السبب |
| ----    !.warn    ---- |
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمسح عدد معين من الـرسائل |
| ---    !.clear    ---- |
╚[❖══════════════════════❖]╝
╔[❖════════════════════════❖]╗
| لإغلاق الرومات وجعلها للمشرفين |
| ---    !.closeroms   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| إغلاق الرومات وجعلها للمشرفين |
| ---    !.openroms   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لإنشاء رسالة جماعية خاصة بالسيرفرات |
| ---    !.bromassage   ---- |
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })
        })
    })
    }
});
 client.on('message', async message => {
  if(message.content.startsWith(prefix + "tem-rom")) {
    await message.channel.send("قم بكتابة اسم الروم المراد صنعه").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("**قم بإرسال عدد الدقائق التي يستواجد بها الروم المؤقت من 2-180**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق !قم بإرسال ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("عزيزي , لا يمكن  تجاوز هذا العدد من الدقائق , من 2-180")
  time = co.first().content
co.first().delete()
  e.edit("**text**, **voice** |  قم بكتابة نوع الروم")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("لا يمكن ارسال كلمات , فعدد الاعضاء فقط بالأرقام");
    limit = coll.first().content
coll.first().delete()

  e.edit("يتم عمل الروم .. الرجاء الإنتظار , سيتم عمل الروم بعد لحضات")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("انتهى الوقت المحدد للروم , نتعذر")
    }, Math.floor(time*60000))
    
  })
  e.edit("**لقد تم إنشاء الروم المؤقت , نتمنى لك وقتاً سعيداً**")

})
})
})
})
})

  }
})
 
client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("!.picture")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "info-role")) {
    if(!args) return message.reply('قم بكتابة اسم الرتبة');
    if(!role) return message.reply('لم نتمكن من التعرف على الرتبة , تأكد من صحة إسمها');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === "!.mute") { // حط البرفكس حقت بوتك قبل الامر
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** انت لست من المشرفين , فلا يمكنك إعطاء ميوت **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا توجد رتبة تحت إسم ==> 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'ميوت / فك الميوت')
    .addField('لقد تم فك الميوت عن الشخص:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** البوت لا يملك الرتبة التي تمكنه من إسكات الأعضاء **').catch(console.error);
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }
 
};
 
});

client.on('message', message => {
     if(message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "warn") {

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**ليست لديك صلاحيات لإنذار الأشخاص **");
    let args = message.content.split(" ").slice(1);
                    let reason = message.content.split(" ").slice(2).join(" ");
                if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!reason) return message.reply("**قم بكتابة سبب التحذير ؟**");

        message.channel.sendMessage(args.join("  "))
        message.delete();


    }

});


client.on('message', message => {
    if(message.content === "!.bot-info") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});

client.on('message', message => {
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('**هذه النوعية من الأوامر للسيرفرات فقط**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لا يمكنك حظر الأعضاء , فانت لست مشرفاً**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**لا يمكن اعطاء باند للعضو فالبوت ليس مشرفاً **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**قم بكتابة سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**هذا الشخص يمتلك رتبة أكبر من رتبة البوت البوت , ولا يمكن حظره**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});



client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bromassage') {
  if (!args[1]) {
message.channel.send("**!.bromassage <رسالتك>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField('قام هذا الشخص', `${message.author.username}!${message.author.discriminator}`,true)
		  .addField('__ بإرسال رسالة جماعية__',' =-=-=-=-=-=-=-=-=-=-=-=-')
          .addField('عبر هذا السيرفر', `${message.guild.name}`,true)		  
		  .addField('=-=-=-=-=-=-=-=-=-=-=-=- ',' =-=-=-=-=-=-=-=-=-=-=-=-')
          .addField('**ومضمون رسالته هو :**', args)
		  .addField('=-=-=-=-=-=-=-=-=-=-=-=- ',' =-=-=-=-=-=-=-=-=-=-=-=-')
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| جاري ارسال رسالتك ')
      .addBlankField(true)
      .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
      .addField('📝| الرسالة ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});


client.on('message', function(message) {
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith('-play')) {
		if (!message.member.voiceChannel) return message.reply('** You Are Not In VoiceChannel **');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**قم بوضع الرابط , او  الاسم**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("أضيف إلى قائمة الانتظار", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('Requested By:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(`Added To Queue`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('بطلب من: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
	else if (mess.startsWith('-skip')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':gear: **تم التخطي**').then(() => {
		});
	}
	else if (message.content.startsWith('-vol')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		// console.log(args)
		if (args > 100) return message.reply(':x: **100**');
		if (args < 1) return message.reply(":x: **1**");
	}
	else if (mess.startsWith('-pause')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':gear: **تم الايقاف مؤقت**').then(() => {
		});
	}
	else if (mess.startsWith('-unpause')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':gear: **تم اعاده التشغيل**').then(() => {
		});
	}
	else if (mess.startsWith('-stop')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.reply(':name_badge: **تم الايقاف**');
	}
	else if (mess.startsWith('-join')) {
		if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
		message.member.voiceChannel.join().then(message.react('✅'));
	}
	else if (mess.startsWith('-play')) {
		getID(args, function(id) {
			add_to_queue(id);
			fetchVideoInfo(id, function(err, videoInfo) {
				if (err) throw new Error(err);
				if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
				if (isPlaying == false) return message.reply(':x:');
			});

		});
	}

	function skip_song(message) {
		if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
		dispatcher.end();
	}

client.login(process.env.BOT_TOKEN);
