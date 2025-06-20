const ApiHelpers = require('../../utils/apiHelpers');

describe('Create Token', () => {
  it('should create a token with default credentials', async () => {
    const response = await ApiHelpers.createToken();
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('token');
  });

  it('should not create a token with invalid credentials', async () => {
    const response = await ApiHelpers.createToken('admin', 'password');
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('reason');
    expect(response.data.reason).toBe('Bad credentials');
  });
});