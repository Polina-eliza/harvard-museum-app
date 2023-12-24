import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import store from "../../store";
import { loginUserWithEmailAndPassword, validateLoginForm } from "./loginService"; 

jest.mock('firebase/auth');
jest.mock('../../store');

global.localStorage = { setItem: jest.fn() };

describe('loginService', () => {

  describe('loginUserWithEmailAndPassword', () => {

    test('should set login status on successful login', async () => {
      signInWithEmailAndPassword.mockResolvedValue({});
     
      await loginUserWithEmailAndPassword('test@example.com', 'password1234567');
  
      expect(localStorage.setItem).toHaveBeenCalledWith('isLoggedIn', 'true');
      expect(store.commit).toHaveBeenCalledWith('setLoginStatus', true);
    });
  
    test('should handle login failure', async () => {
      signInWithEmailAndPassword.mockRejectedValue(new Error('Login failed'));
  
      await expect(loginUserWithEmailAndPassword('test@example.com', 'wrongpassword'))
        .rejects.toThrow('Login failed');
  
      expect(localStorage.setItem).not.toHaveBeenCalled();
      expect(store.commit).not.toHaveBeenCalled();
    });
  });

  describe('validateLoginForm', () => {
    test('returns no errors for valid input', () => {
      const errors = validateLoginForm('test@example.com', 'password1234567');
      expect(errors).toEqual({ email: null, password: null });
    });

    test('returns an error for invalid email format', () => {
      const errors = validateLoginForm('invalidemail', 'password1234567');
      expect(errors.email).toBe('Invalid email format');
      expect(errors.password).toBeNull();
    });

    test('returns an error for short password', () => {
      const errors = validateLoginForm('test@example.com', 'pass');
      expect(errors.password).toBe('Password should be at least 6 characters');
      expect(errors.email).toBeNull();
    });

    test('returns errors for both invalid email and short password', () => {
      const errors = validateLoginForm('invalidemail', 'pass');
      expect(errors.email).toBe('Invalid email format');
      expect(errors.password).toBe('Password should be at least 6 characters');
    });
  });
  
});