import request from 'supertest';

import app from '../src/app';

describe('GET /', () => {
  it('should return 200 OK with the sample data', async () => {
    const response = await request(app).get('/').send();

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      list: [
        {
          id: '0',
          name: 'This is a sample JSON file',
        },
        {
          id: '1',
          name: 'This is a sample JSON file as well',
        },
      ],
    });
  });
});

describe('POST /', () => {
  it('should return 200 OK with a proper body', async () => {
    const response = await request(app).post('/').send({
      valid: true,
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      message: 'Received data: {\n  "valid": true\n}',
    });
  });
});
