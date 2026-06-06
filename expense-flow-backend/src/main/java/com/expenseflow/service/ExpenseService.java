package com.expenseflow.service;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import com.expenseflow.dto.ExpenseRequestDTO;
import com.expenseflow.dto.ExpenseResponseDTO;
import com.expenseflow.enums.ExpenseStatus;

public interface ExpenseService {

    ExpenseResponseDTO createExpense(ExpenseRequestDTO requestDTO);

    Page<ExpenseResponseDTO> getAllExpenses(
            int page,
            int size,
            String sortBy
    );

    Page<ExpenseResponseDTO> searchExpensesByCategory(
            String category,
            int page,
            int size
    );

    Page<ExpenseResponseDTO> filterExpensesByStatus(
            ExpenseStatus status,
            int page,
            int size
    );

    ExpenseResponseDTO updateExpenseStatus(
            Long expenseId,
            ExpenseStatus status
    );

    ExpenseResponseDTO uploadReceipt(
            Long expenseId,
            MultipartFile file
    );
}