import { createUserWithEmailAndPassword } from "firebase/auth";
import store from "../../store";
import { handleUserRegistration, registerUser } from "./registrationService";

jest.mock('firebase/auth');
jest.mock('../../store');

describe("registrationService", () => {

  const mockToaster = {
    success: jest.fn(),
    error: jest.fn()
  };
  const mockRouter = {
    push: jest.fn()
  };

  describe('handleUserRegistration', () => {
    test('should handle successful registration', async () => {
      createUserWithEmailAndPassword.mockResolvedValue({});

      await handleUserRegistration('user@example.com', 'password123', mockToaster, mockRouter);

      expect(mockToaster.success).toHaveBeenCalledWith('Successfully registered');
      expect(store.commit).toHaveBeenCalledWith('setLoginStatus', true);
      expect(mockRouter.push).toHaveBeenCalledWith('/collections');
    });

    test('should handle registration failure', async () => {
      const mockError = new Error('Registration failed');
      createUserWithEmailAndPassword.mockRejectedValue(mockError);

      await handleUserRegistration('user@example.com', 'password123', mockToaster, mockRouter);

      expect(mockToaster.error).toHaveBeenCalledWith(`Registration failed: ${mockError.message}`);
      expect(store.commit).not.toHaveBeenCalled();
      expect(mockRouter.push).not.toHaveBeenCalled();
    });
  });

  describe('registerUser', () => {
    test('should return a promise on user registration', () => {
      const email = 'user@example.com';
      const password = 'password123';
      createUserWithEmailAndPassword.mockResolvedValue({});

      const registrationPromise = registerUser(email, password);

      expect(registrationPromise).toBeInstanceOf(Promise);
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), email, password);
    });
  });

});