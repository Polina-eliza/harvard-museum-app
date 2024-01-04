import { getAuth, signOut } from "firebase/auth";
import { handleSignOut } from './authStateService';

jest.mock('firebase/auth');

describe('handleSignOut', () => {
  const mockStore = { commit: jest.fn() };
  const mockRouter = { push: jest.fn() };
  const mockToaster = {
    success: jest.fn(),
    error: jest.fn()
  };

  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(), 
  };
  
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  test('successfully signs out', async () => {
    signOut.mockResolvedValue(); 

    await handleSignOut(mockStore, mockRouter, mockToaster);

    expect(localStorageMock.removeItem).toHaveBeenCalledWith("isLoggedIn");
    expect(mockStore.commit).toHaveBeenCalledWith("setLoginStatus", false);
    expect(mockRouter.push).toHaveBeenCalledWith("/home");
    expect(mockToaster.success).toHaveBeenCalledWith("Successfully logged out");
  });

  test('handles sign out failure', async () => {
    const mockError = new Error('Sign out failed');
    signOut.mockRejectedValue(mockError); 

    await handleSignOut(mockStore, mockRouter, mockToaster);

    expect(mockToaster.error).toHaveBeenCalledWith(`Sign out error: ${mockError}`);
  });
});