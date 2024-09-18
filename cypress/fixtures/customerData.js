import { faker } from '@faker-js/faker';

const customer = {
  name: faker.person.firstName(),
  dob: "2023-06-12",
  address:faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  pin: faker.number.int({min: 100000}),
  mobile: faker.phone.number({ style: 'international' }),
  email: faker.internet.email(),
  password: faker.internet.password()
}

export {customer}
