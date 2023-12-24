import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import store from "../../store";
import { loginUserWithEmailAndPassword } from "./loginService";

jest.mock('firebase/auth');
jest.mock('../../store');

describe('loginUserWithEmailAndPassword', () => {

    test('should set login status on successful login', async () => {
      global.localStorage = { setItem: jest.fn() };
  
    
      signInWithEmailAndPassword.mockResolvedValue({});
  
     
      await loginUserWithEmailAndPassword('test@example.com', 'password1234567');
  
      
      expect(localStorage.setItem).toHaveBeenCalledWith('isLoggedIn', 'true');
      expect(store.commit).toHaveBeenCalledWith('setLoginStatus', true);
    });
  
    test('should handle login failure', async () => {
      global.localStorage = { setItem: jest.fn() };
  
      signInWithEmailAndPassword.mockRejectedValue(new Error('Login failed'));
  
      await expect(loginUserWithEmailAndPassword('test@example.com', 'wrongpassword'))
        .rejects.toThrow('Login failed');
  
      expect(localStorage.setItem).not.toHaveBeenCalled();
      expect(store.commit).not.toHaveBeenCalled();
    });
  });