const auth = require('./controllers/auth');
const User = require('./models/User');

// Mock Express request/response
const mockRequest = {
  body: {
    email: 'test@example.com',
    password: 'test123'
  }
};

const mockResponse = {
  status: function(code) {
    console.log(`Status: ${code}`);
    return this;
  },
  json: function(data) {
    console.log('Response:', data);
  }
};

// Test the register function
auth.register(mockRequest, mockResponse);