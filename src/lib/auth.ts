const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://backend.test/api';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  business_name: string;
  brand_name: string;
  plan_id: number;
}

interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  async register(data: RegisterData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    return response.json();
  },

  async login(data: LoginData) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const result = await response.json();
    
    // Store token in localStorage
    if (result.token) {
      localStorage.setItem('auth_token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('vendor', JSON.stringify(result.vendor));
    }

    return result;
  },

  async logout() {
    const token = localStorage.getItem('auth_token');
    
    if (token) {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    }

    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    localStorage.removeItem('vendor');
  },

  getToken() {
    return localStorage.getItem('auth_token');
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getVendor() {
    const vendor = localStorage.getItem('vendor');
    return vendor ? JSON.parse(vendor) : null;
  },

  isAuthenticated() {
    return !!this.getToken();
  },
};
