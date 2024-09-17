import { AddNewCusPage } from "../support/pages/AddNewCusPage.cy"
import { faker } from '@faker-js/faker';

describe('Home Page', () => {
    it('addNewCustomer', () => {
        const addNewCustomer = new AddNewCusPage
        let info = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
        }
        addNewCustomer.addNewCus(info)
    })
})
