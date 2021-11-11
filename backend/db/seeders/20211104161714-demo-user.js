'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908475882253983754/hpvlrvffjtdq6fcxroyc.png',
      },
      {
        email: faker.internet.email(),
        username: 'Lacey',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908477929552506940/actor-headshots-1283.png',
      },
      {
        email: faker.internet.email(),
        username: 'Ford',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908473140269707304/janel-lee_photography_cincinnati_ohio_professional_headshots_personal_branding_bryen_pinkard.png?width=1029&height=686',
      },
      {
        email: faker.internet.email(),
        username: 'Stephanie',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908470689625964574/Female_Portrait_1296x728-header-1296x729.png',
      },
      {
        email: faker.internet.email(),
        username: 'Larissa',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472113571192842/professional_woman_headshot.png',
      },
      {
        email: faker.internet.email(),
        username: 'Zeyu',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908470650782502982/portrait-of-handsome-latino-african-man-picture-id1007763808.png',
      },
      {
        email: faker.internet.email(),
        username: 'Zach',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908471992171262002/Headshot00006.png',
      },
      {
        email: faker.internet.email(),
        username: 'Mason',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908473090206470194/ian-johns-photography-professional-headshots-22.png?width=857&height=686',
      },
      {
        email: faker.internet.email(),
        username: 'Andrea',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472158597050398/Professional-Headshot-Poses-Blog-Post-3.png?width=1029&height=686',
      },
      {
        email: faker.internet.email(),
        username: 'Sonia',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472184094212106/360_F_317513493_jZccvnt4pDqSsQbESat201rgVKpSRUH0.png',
      },
      {
        email: faker.internet.email(),
        username: 'Jason',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908471873392758784/splento-headshot-3.png',
      },
      {
        email: faker.internet.email(),
        username: 'Ryann',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908470553059397692/photo-1438761681033-6461ffad8d80.png',
      },
      {
        email: faker.internet.email(),
        username: 'Aysha',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472427317719050/smile-4662474__480.png',
      },
      {
        email: faker.internet.email(),
        username: 'Todd',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472591709274162/6_20200320132509_17431638_xlarge.png?width=1029&height=686',
      },
      {
        email: faker.internet.email(),
        username: 'Shirley',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908471235602694234/Business-Headshot-Women-011.png?width=1029&height=686',
      },
      {
        email: faker.internet.email(),
        username: 'Shanna',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908471354758660116/cindy_ramirez-115r.png?width=1029&height=686',
      },
      {
        email: faker.internet.email(),
        username: 'Daylen',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472662219702302/afro.png',
      },
      {
        email: faker.internet.email(),
        username: 'Liam',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908472541784457306/headshots_IMG_8722.png',
      },
      {
        email: faker.internet.email(),
        username: 'Joseph',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908470726468714526/MORRIS_CHESTNUT-e1621262142971.png',
      },
      {
        email: faker.internet.email(),
        username: 'Harshad',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908471634149670973/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476.png',
      },
      {
        email: faker.internet.email(),
        username: 'Kumar',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        photoUrl: 'https://media.discordapp.net/attachments/908470164138360893/908471512099606528/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745.png',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};