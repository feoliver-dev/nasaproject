const request = require('supertest');

const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

describe('Test POST /launch', () => {
    test('It should respond with 200 created', async () => {
        const response = await request(app)
        .post('/launches')
        .send({
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            target: 'Kepler-186 f',
            launchDate: 'January 4, 2028',
        })
        .expect('Content-Type', /json/)
        .expect(201);

        const requestDate = new Date('January 4, 2028').valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);

        expect(response.body).toMatchObject({launchDataWithoutDate: {}});
    });

    test('It should catch missing required properties', async () => {

    });
    
    test('It should catch invalid dates', async () => {});
});