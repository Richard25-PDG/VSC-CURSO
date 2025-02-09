import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchAccountDetails = async (accountId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/accounts/${accountId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching account details: ' + error.message);
    }
};

export const fetchTransactionHistory = async (accountId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/accounts/${accountId}/transactions`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching transaction history: ' + error.message);
    }
};

// Additional API functions can be added here as needed.