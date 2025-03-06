import request from 'supertest';
import app from '../app';
import db from '../config/db';

describe('API Endpoints', () => {
  beforeAll(async () => {
    // Run migrations before tests
    await db.migrate.latest();
  });

  afterAll(async () => {
    // Close database connection after tests
    // await db('users').del();
    await db.destroy();
  });

  let userId: number;
  let postId: number;

  // User Endpoints
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Test User', email: 'test@example.com' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data).toHaveProperty('id');
    userId = res.body.data.id;
  });

  it('should get paginated users', async () => {
    const res = await request(app)
      .get('/users?pageNumber=0&pageSize=10');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });

  it('should get a user by id', async () => {
    const res = await request(app)
      .get(`/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toHaveProperty('id', userId);
  });

  // Address Endpoints
  it('should create an address for the user', async () => {
    const res = await request(app)
      .post('/addresses')
      .send({ userId, street: '123 Test St', city: 'Testville', state: 'TS', zip: '12345' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data).toHaveProperty('id');
  });

  it('should get the address for the user', async () => {
    const res = await request(app)
      .get(`/addresses/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toHaveProperty('userId', userId);
  });

  it('should update the address for the user', async () => {
    const res = await request(app)
      .patch(`/addresses/${userId}`)
      .send({ street: '456 Updated St', city: 'Updatedville', state: 'UP', zip: '67890' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Address updated successfully');
  });

  // Post Endpoints
  it('should create a post for the user', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ userId, title: 'Test Post', body: 'This is a test post.' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data).toHaveProperty('id');
    postId = res.body.data.id;
  });

  it('should get posts for the user', async () => {
    const res = await request(app)
      .get(`/posts?userId=${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });

  it('should delete the post', async () => {
    const res = await request(app)
      .delete(`/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Post deleted successfully');
  });
});
