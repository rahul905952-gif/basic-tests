const { request, expect } = require('@playwright/test');

class UserApi {
  constructor(baseURL, apiKey) {
    this.baseURL = process.env.API_URL || baseURL;
    this.apiKey = apiKey;
  }

  async createContext() {
    const headers = {};
    if (this.apiKey) {
      headers['x-api-key'] = this.apiKey;
    }

    this.apiContext = await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: headers,
    });
  }

  async login(email, password) {
    const response = await this.apiContext.post('/api/login', {
      json: { email, password },
    });
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async createUser(payload) {
    const response = await this.apiContext.post('/api/users', {
      json: payload,
    });
    expect(response.status()).toBe(201);
    return await response.json();
  }

  async getUser(userId) {
    const response = await this.apiContext.get(`/api/users/${userId}`);
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async invalidUser(userId) {
    const response = await this.apiContext.get(`/api/users/${userId}`);
    expect(response.status()).toBe(404);
  }
}

module.exports = { UserApi }; 
