import { faker } from '@faker-js/faker';

const customer = {
  name: faker.person.fullName(),
  dob: faker.date.birthdate(),
  address:faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  pin: faker.number.int({min: 100000}),
  mobile: faker.phone.number(),
  email: faker.internet.email(),
  password: faker.internet.password()
}

export {customer}
