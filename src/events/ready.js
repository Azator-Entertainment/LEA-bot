import { ActionRowBuilder, ActivityType, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export default async function (bot) {
    console.log(`< [DC] >  https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=395539967168&scope=bot%20applications.commands`);

    /*bot.guilds.cache.forEach(async (guild) => {
        const me = await guild.members.fetchMe();
        if (me.nickname !== "SAHP") me.setNickname("SAHP");
    });*/

    bot.user.setPresence({ activities: [{ name: "Sloužit a chránit!", type: ActivityType.Listening }], status: "online", afk: false });

    console.log("< [PS] >  Discord bot operational!");

    /*ORIENTACE V NÁVODU
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Vytvoření složky')
                .setURL('https://discord.com/channels/1139266097921675345/1170795599164080228/1170797004595666984')
                .setStyle(ButtonStyle.Link)
                .setEmoji("📂"),
        )
        .addComponents(
            new ButtonBuilder()
                .setLabel('Zapsání duty')
                .setURL('https://discord.com/channels/1139266097921675345/1170795599164080228/1170798279534071900')
                .setStyle(ButtonStyle.Link)
                .setEmoji("🕑"),
        )
        .addComponents(
            new ButtonBuilder()
                .setLabel('Zápis omluvenky')
                .setURL('https://discord.com/channels/1139266097921675345/1170795599164080228/1170799102120960071')
                .setStyle(ButtonStyle.Link)
                .setEmoji("🙏"),
        );

    const server = await bot.guilds.fetch("1139266097921675345");
    const kanal = await server.channels.fetch("1139311793555116172");
    const vlakno = await kanal.threads.fetch("1170795599164080228");
    console.log(vlakno);
    const member = await server.members.fetch("411436203330502658");
    const navodEmbed = new EmbedBuilder()
        .setAuthor({ name: member.displayName, iconURL: member.displayAvatarURL() })
        .setTitle("Revoluce zápisů")
        .setDescription("Klikni na tlačítko pro přesun na daný návod.")
        .setThumbnail("https://i.imgur.com/xgFoKuX.png")
        .setColor(bot.SAHP.c.master)
        .setFooter({ text: "SAHP", iconURL: bot.user.avatarURL() });
    await vlakno.join();
    await vlakno.send({ embeds: [navodEmbed], components: [row] });*/
}