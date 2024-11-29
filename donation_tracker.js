// Add event listener to the form
document.getElementById('donation-form').addEventListener('submit', handleFormSubmission);

/**
 * Handles form submission: validates inputs and stores data temporarily.
 * @param {Event} event - The form submit event.
 */
function handleFormSubmission(event) {
    event.preventDefault();

    // Retrieve form inputs
    const charityName = document.getElementById('charity-name').value.trim();
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    const donationDate = document.getElementById('donation-date').value;
    const donorComment = document.getElementById('donor-comment').value.trim();

    // Validate form inputs
    const errors = validateDonationForm({ charityName, donationAmount, donationDate });
    if (errors.length > 0) {
        alert(`Please fix the following errors:\n${errors.join('\n')}`);
        return;
    }

    // Store the data in a temporary object
    const donationData = {
        charityName,
        donationAmount,
        donationDate,
        donorComment
    };

    console.log('Donation submitted:', donationData);
    alert('Thank you for your donation!');
}

/**
 * Validates the donation form inputs.
 * @param {Object} data - Form data to validate.
 * @param {string} data.charityName - Name of the charity.
 * @param {number} data.donationAmount - Amount donated.
 * @param {string} data.donationDate - Date of the donation.
 * @returns {string[]} - Array of error messages, empty if valid.
 */
function validateDonationForm({ charityName, donationAmount, donationDate }) {
    const errors = [];

    if (!charityName) errors.push('Charity name is required.');
    if (!donationAmount || donationAmount <= 0) errors.push('Donation amount must be a positive number.');
    if (!donationDate) errors.push('Donation date is required.');

    return errors;
}

// Export functions for testing
module.exports = { validateDonationForm };
