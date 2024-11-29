const { validateDonationForm } = require('../donation_tracker.js');

describe('Donation Tracker Form Validation', () => {
    test('Valid form inputs should pass validation', () => {
        const validData = {
            charityName: 'Red Cross',
            donationAmount: 50,
            donationDate: '2024-11-28'
        };
        expect(validateDonationForm(validData)).toEqual([]);
    });

    test('Empty charity name should return an error', () => {
        const invalidData = {
            charityName: '',
            donationAmount: 50,
            donationDate: '2024-11-28'
        };
        expect(validateDonationForm(invalidData)).toContain('Charity name is required.');
    });

    test('Invalid donation amount should return an error', () => {
        const invalidData = {
            charityName: 'Red Cross',
            donationAmount: -10,
            donationDate: '2024-11-28'
        };
        expect(validateDonationForm(invalidData)).toContain('Donation amount must be a positive number.');
    });

    test('Missing donation date should return an error', () => {
        const invalidData = {
            charityName: 'Red Cross',
            donationAmount: 50,
            donationDate: ''
        };
        expect(validateDonationForm(invalidData)).toContain('Donation date is required.');
    });

    test('Multiple invalid inputs should return multiple errors', () => {
        const invalidData = {
            charityName: '',
            donationAmount: 0,
            donationDate: ''
        };
        expect(validateDonationForm(invalidData)).toEqual([
            'Charity name is required.',
            'Donation amount must be a positive number.',
            'Donation date is required.'
        ]);
    });
});
