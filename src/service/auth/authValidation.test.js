import { validateRegistrationForm } from './authValidation';

test('returns no errors for valid input', () => {
    const errors = validateRegistrationForm('user@example.com', 'password1234567', 'password1234567');
    expect(errors).toEqual({ email: null, password: null, repeatPassword: null });
});

test('return an error when email is missing', () => {
    const errors = validateRegistrationForm('', 'password1234567', 'password1234567');
    expect(errors.email).toBe("This field must be filled in");
});

test('returns an error when password is missing', () => {
    const errors = validateRegistrationForm("user@example.com", '', 'password1234567');
    expect(errors.password).toBe('This field must be filled in');
});

test('returns an error when passwords do not match', () => {
    const errors = validateRegistrationForm('user@example.com', 'password123', 'differentPassword');
    expect(errors.repeatPassword).toBe('Passwords do not match');
});