import api from "../api/axiosConfig";

import type { Expense } from "../types/Expense";

export const createExpense = async (
    expense: Expense
) => {

    const response = await api.post(
        "/expenses",
        expense
    );

    return response.data;
};

export const getAllExpenses = async (
    page = 0,
    size = 10,
    sortBy = "expenseDate"
) => {

    const response = await api.get(
        `/expenses?page=${page}&size=${size}&sortBy=${sortBy}`
    );

    return response.data;
};

export const searchExpenses = async (
    category: string,
    page = 0,
    size = 10
) => {

    const response = await api.get(
        `/expenses/search?category=${category}&page=${page}&size=${size}`
    );

    return response.data;
};

export const filterExpenses = async (
    status: string,
    page = 0,
    size = 10
) => {

    const response = await api.get(
        `/expenses/filter?status=${status}&page=${page}&size=${size}`
    );

    return response.data;
};

export const updateExpenseStatus = async (
    expenseId: number,
    status: string
) => {

    const response = await api.patch(
        `/expenses/${expenseId}/status?status=${status}`
    );

    return response.data;
};

export const uploadReceipt = async (
    expenseId: number,
    file: File
) => {

    const formData = new FormData();

    formData.append(
        "file",
        file
    );

    const response = await api.post(
        `/expenses/${expenseId}/upload`,
        formData,
        {
            headers: {
                "Content-Type":
                    "multipart/form-data"
            }
        }
    );

    return response.data;
};