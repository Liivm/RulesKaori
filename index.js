const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === '!rules') {
    const row1 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('information')
          .setLabel('Information')
          .setEmoji('1097550197581684797')
          .setStyle('DANGER'),
        new Discord.MessageButton()
          .setCustomId('assistance')
          .setLabel('Assistance')
          .setEmoji('1090353726595805336')
          .setStyle('DANGER'),
        new Discord.MessageButton()
          .setCustomId('guide')
          .setEmoji('1097550971242041435')
          .setLabel('Guide Communautaire')
          .setStyle('DANGER')
      );
    
    const row2 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Sélectionnez une option à voir')
          .addOptions([
            {
              label: 'Règlement',
              value: 'reglement',
              description: 'Règlement de la communauté',
            },
            {
              label: 'Nous Soutenir',
              value: 'soutiens',
              description: 'Soutenez la communauté',
            }
          ])
      );

    const embed = new Discord.MessageEmbed()
      .setColor('#2b2d31')
      .setTitle('Bienvenue sur Kaori Café')
      .setDescription(`Bienvenue sur Kaori Café, un serveur amical et accueillant pour tous ! Nous sommes fiers de créer une communauté active et inclusive où chacun est respecté et valorisé, quelle que soit sa race, son sexe, son orientation sexuelle, son identité de genre, sa religion ou ses croyances.

<:3_dot_orange:1089244188660486174> Date de création : <t:1582620060:R>
<:4_dot_yellow:1089244218033193022> Mis à jour : <t:1682433840:R>`)
    const image = new Discord.MessageEmbed()
       .setColor('#2b2d31')
       .setImage('https://i.imgur.com/62CFolF.jpg')

    message.channel.send({ embeds: [image, embed], components: [row1, row2] });
  }
});

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    let embed;

    if (interaction.customId === 'information') {
      embed = new Discord.MessageEmbed()
        .setTitle('Information de la communauté.')
        .addField('Créatrice :', '<@499447456678019072>\n<@933429923572482108>\n<@832913780970094612>\n<@594574555494875173>\n<@929372382135746600>', true)
        .addField('Soutenus par :', '<@683464613790220288>\n<@695212940596609075>\n<@729279395629367318>\n<@946223102382186556>\n<@251022026872061952>', true)
        .addField('Liens Utiles', '[Site Officiel](https://kaoricafe.fr/)\n[Faire un don](https://ko-fi.com/kaorifr)\n[Inviter Kaori](https://discord.com/api/oauth2/authorize?client_id=855107430693077033&permissions=4398046511095&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fkaori&response_type=code&scope=bot%20applications.commands%20guilds.join)\n[Contacter Discord](https://dis.gd/contact)', true)
        .setColor('#2b2d31')
        .setDescription('Bienvenue sur Kaori Café, un serveur amical et accueillant pour tous ! Nous sommes fiers de créer une communauté active et inclusive où chacun est respecté et valorisé, quelle que soit sa race, son sexe, son orientation sexuelle, son identité de genre, sa religion ou ses croyances.');
    } else if (interaction.customId === 'assistance') {
      embed = new Discord.MessageEmbed()
        .setTitle('Assistance')
        .setColor('#2b2d31')
        .setDescription('Si vous avez besoin de contacter le staff de Kaori Café pour obtenir de l\'aide ou poser des questions, vous pouvez le faire en utilisant le salon <#945871224519663657>. Ce salon est destiné à recevoir les messages des membres souhaitant contacter le staff. Vous pouvez y poster votre message et l\'un de nos membres du staff vous répondra dès que possible. Nous sommes là pour vous aider, alors n\'hésitez pas à nous contacter si vous avez besoin de quoi que ce soit !')
    } else if (interaction.customId === 'guide') {
      embed = new Discord.MessageEmbed()
        .setTitle('Guide Communautaire')
        .setColor('#2b2d31')
        .setDescription(`Bienvenue sur Kaori Café, une communauté amicale et inclusive où nous valorisons et respectons tous nos membres. Pour garantir une expérience agréable pour tous, nous avons quelques règles et directives que nous vous demandons de suivre :

<:2_0:1061549588739280956> Soyez respectueux envers tous les membres de la communauté, sans distinction de race, de sexe, d'orientation sexuelle, d'identité de genre, de religion ou de croyances. Nous ne tolérons pas la discrimination ou la haine sous quelque forme que ce soit.
<:2_1:1061552712115830824> Évitez le spam, le trolling et toute autre forme de comportement inapproprié. Nous voulons que notre communauté reste amicale et respectueuse pour tous.
<:2_2:1061552713348952115> Évitez de partager des contenus inappropriés ou offensants. Nous voulons créer un environnement sûr et confortable pour tous les membres, alors veillez à respecter les limites de chacun.
<:2_3:1061552714686935040> Respectez les décisions de notre équipe de modération. Si un modérateur vous demande de cesser une activité, veuillez les écouter et suivre leurs instructions.
<:2_4:1061552715647430687> Utilisez les canaux de discussion pour les sujets appropriés. Nous avons une grande variété de canaux pour différents sujets, alors veuillez utiliser le canal approprié pour chaque discussion.

En suivant ces règles simples, nous pouvons tous contribuer à créer une communauté agréable et inclusive pour tous les membres de Kaori Café. Si vous avez des questions ou des préoccupations, n'hésitez pas à contacter notre équipe de modération en utilisant le salon <#945908859552292934>. Merci de faire partie de notre communauté et de respecter nos règles pour garantir une expérience agréable pour tous !`)
    }

    await interaction.reply({ embeds: [embed], ephemeral: true });
  } else if (interaction.isSelectMenu()) {
    let embed;

    if (interaction.values[0] === 'reglement') {
      embed = new Discord.MessageEmbed()
        .setColor('#2b2d31')
        .setTitle('Règlement de la Communauté')
        .setDescription(`Bienvenue sur Kaori Café, une communauté amicale et inclusive où nous valorisons et respectons tous nos membres. Pour garantir une expérience agréable pour tous, nous avons quelques règles et directives que nous vous demandons de suivre :

<:2_0:1061549588739280956> Soyez courtois et respectueux dans vos interactions avec les autres membres. Les insultes, les propos discriminatoires ou haineux ne sont pas tolérés.
<:2_1:1061552712115830824> Ne partagez pas de contenus violents, explicites ou illégaux. Nous voulons créer un environnement sûr et confortable pour tous les membres.
<:2_2:1061552713348952115> Évitez les débats politiques ou religieux, qui peuvent souvent mener à des conflits et diviser la communauté.
<:2_3:1061552714686935040> Évitez de spammer ou de publier du contenu répétitif. Nous voulons que notre communauté reste intéressante et dynamique.
<:2_4:1061552715647430687> Respectez les décisions de l'équipe de modération. Si un modérateur vous demande de cesser une activité, veuillez les écouter et suivre leurs instructions.

En suivant ces règles simples, nous pouvons tous contribuer à créer une communauté agréable et inclusive pour tous les membres de Kaori Café. Si vous avez des questions ou des préoccupations, n'hésitez pas à contacter notre équipe de modération en utilisant le salon #contact-staff. Merci de faire partie de notre communauté et de respecter nos règles pour garantir une expérience agréable pour tous !`);
    } else if (interaction.values[0] === 'soutiens') {
      embed = new Discord.MessageEmbed()
        .setColor('#2b2d31')
        .setTitle('Soutenir la Communauté')
        .setDescription(`En boostant notre serveur Discord Kaori Café, vous contribuez à maintenir une communauté active, dynamique et inclusive pour tous les membres. Votre soutien nous permet d'investir dans des fonctionnalités premium, telles que des salons vocaux de haute qualité, des émojis personnalisés et des options de personnalisation avancées pour notre serveur. De plus, en boostant notre serveur, vous aurez accès à des avantages exclusifs tels que des rôles personnalisés et des accès privilégiés à certains salons.

Si vous préférez faire un don plutôt que de booster, cela nous permettra de financer les coûts d'hébergement et de maintenance de nos bots. Cela nous permettra également d'organiser des événements spéciaux pour notre communauté et d'offrir des récompenses à nos membres les plus actifs et engagés.

Enfin, si vous souhaitez soutenir notre communauté sur une base régulière, vous pouvez vous abonner à notre abonnement. Les abonnements nous permettent d'offrir des choses aux Membres qui ne peuvent pas en avoir et de maintenir un niveau de qualité constant pour tous les membres. En tant qu'abonné, vous aurez accès à des avantages exclusifs tels que des rôles spéciaux, des salons privés et des événements réservés aux abonnés.

En somme, que vous choisissiez de booster notre serveur, de faire un don ou de vous abonner à notre abonnement, votre soutien nous permettra de maintenir une communauté dynamique, inclusive et agréable pour tous les membres. Nous vous remercions pour votre soutien et nous sommes impatients de vous voir dans notre communauté, plus d'informations sur notre [Site Officiel](https://kaoricafe.fr/).`);
    }

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
});

client.login(process.env.TOKEN);
