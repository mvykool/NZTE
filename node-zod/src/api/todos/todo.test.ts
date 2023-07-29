import request from 'supertest';
import { Todos } from './todo.model';
import app from '../../app';

beforeAll((done) => {
  Todos.drop()
    .then(() => done())
    .catch((error) => done(error));
});

describe('GET /api/v1/todos', () => {
  it('responds with an array of todos', async () => { 
    const response = await request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveProperty('length');
    expect(response.body.length).toBe(0);
  });
});