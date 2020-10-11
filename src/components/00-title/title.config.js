'use strict';

// const faker = require('faker'); // require the faker module
// const memberCount = 10; // how many members we should generate data for
// const memberData = [];
const memberData =  [1,2,3]

// for (var i = 0; i < memberCount; i++) {
//     memberData.push({
//         name: faker.name.findName(), // generate a random name
//         email: faker.internet.email()  // generate a random email address
//     });
// }

module.exports = {
	context: {
		members:  memberData // use our generated list of members as context data for our template.
	}
};