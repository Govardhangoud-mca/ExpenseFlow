package com.expenseflow.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.expenseflow.dto.ExpenseRequestDTO;
import com.expenseflow.dto.ExpenseResponseDTO;
import com.expenseflow.entity.Expense;
import com.expenseflow.enums.ExpenseStatus;
import com.expenseflow.exception.ResourceNotFoundException;
import com.expenseflow.repository.ExpenseRepository;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseServiceImpl(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    @Override
    public ExpenseResponseDTO createExpense(
            ExpenseRequestDTO requestDTO) {

        Expense expense = new Expense();

        expense.setExpenseDate(requestDTO.getExpenseDate());
        expense.setCategory(requestDTO.getCategory());
        expense.setAmount(requestDTO.getAmount());
        expense.setDescription(requestDTO.getDescription());

        expense.setStatus(ExpenseStatus.DRAFT);

        Expense savedExpense = expenseRepository.save(expense);

        return mapToResponse(savedExpense);
    }

    @Override
    public Page<ExpenseResponseDTO> getAllExpenses(
            int page,
            int size,
            String sortBy) {

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(sortBy).descending()
        );

        Page<Expense> expensePage =
                expenseRepository.findAll(pageable);

        return expensePage.map(this::mapToResponse);
    }

    @Override
    public Page<ExpenseResponseDTO> searchExpensesByCategory(
            String category,
            int page,
            int size) {

        Pageable pageable = PageRequest.of(page, size);

        Page<Expense> expensePage =
                expenseRepository
                        .findByCategoryContainingIgnoreCase(
                                category,
                                pageable
                        );

        return expensePage.map(this::mapToResponse);
    }

    @Override
    public Page<ExpenseResponseDTO> filterExpensesByStatus(
            ExpenseStatus status,
            int page,
            int size) {

        Pageable pageable = PageRequest.of(page, size);

        Page<Expense> expensePage =
                expenseRepository.findByStatus(
                        status,
                        pageable
                );

        return expensePage.map(this::mapToResponse);
    }

    @Override
    public ExpenseResponseDTO updateExpenseStatus(
            Long expenseId,
            ExpenseStatus status) {

        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Expense not found with ID: "
                                        + expenseId));

        expense.setStatus(status);

        Expense updatedExpense =
                expenseRepository.save(expense);

        return mapToResponse(updatedExpense);
    }

    @Override
    public ExpenseResponseDTO uploadReceipt(
            Long expenseId,
            MultipartFile file) {

        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Expense not found with ID: "
                                        + expenseId));

        try {

            String uploadDir = "uploads/";

            String fileName = System.currentTimeMillis()
                    + "_" + file.getOriginalFilename();

            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);

            Files.copy(
                    file.getInputStream(),
                    filePath,
                    StandardCopyOption.REPLACE_EXISTING
            );

            expense.setReceiptPath(
                    "/uploads/" + fileName
            );

            Expense savedExpense =
                    expenseRepository.save(expense);

            return mapToResponse(savedExpense);

        } catch (IOException ex) {

            throw new RuntimeException(
                    "Failed to upload file"
            );
        }
    }

    private ExpenseResponseDTO mapToResponse(
            Expense expense) {

        ExpenseResponseDTO responseDTO =
                new ExpenseResponseDTO();

        responseDTO.setId(expense.getId());
        responseDTO.setExpenseDate(
                expense.getExpenseDate()
        );
        responseDTO.setCategory(
                expense.getCategory()
        );
        responseDTO.setAmount(
                expense.getAmount()
        );
        responseDTO.setDescription(
                expense.getDescription()
        );
        responseDTO.setReceiptPath(
                expense.getReceiptPath()
        );
        responseDTO.setStatus(
                expense.getStatus()
        );

        return responseDTO;
    }
}