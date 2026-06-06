package com.expenseflow.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.expenseflow.dto.ExpenseRequestDTO;
import com.expenseflow.dto.ExpenseResponseDTO;
import com.expenseflow.enums.ExpenseStatus;
import com.expenseflow.service.ExpenseService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin("*")
@Validated
@Tag(
        name = "Expense Management APIs",
        description = "APIs for managing expenses"
)
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(
            ExpenseService expenseService) {

        this.expenseService = expenseService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Create a new expense")
    public ExpenseResponseDTO createExpense(
            @Valid
            @RequestBody
            ExpenseRequestDTO requestDTO) {

        return expenseService.createExpense(
                requestDTO
        );
    }

    @GetMapping
    @Operation(
            summary =
                    "Get all expenses with pagination"
    )
    public Page<ExpenseResponseDTO> getAllExpenses(

            @RequestParam(name = "page",
                    defaultValue = "0")
            int page,

            @RequestParam(name = "size",
                    defaultValue = "5")
            int size,

            @RequestParam(name = "sortBy",
                    defaultValue = "expenseDate")
            String sortBy) {

        return expenseService.getAllExpenses(
                page,
                size,
                sortBy
        );
    }

    @GetMapping("/search")
    @Operation(
            summary = "Search expenses by category"
    )
    public Page<ExpenseResponseDTO> searchExpenses(

            @RequestParam(name = "category")
            String category,

            @RequestParam(name = "page",
                    defaultValue = "0")
            int page,

            @RequestParam(name = "size",
                    defaultValue = "5")
            int size) {

        return expenseService
                .searchExpensesByCategory(
                        category,
                        page,
                        size
                );
    }

    @GetMapping("/filter")
    @Operation(
            summary = "Filter expenses by status"
    )
    public Page<ExpenseResponseDTO> filterExpenses(

            @RequestParam(name = "status")
            ExpenseStatus status,

            @RequestParam(name = "page",
                    defaultValue = "0")
            int page,

            @RequestParam(name = "size",
                    defaultValue = "5")
            int size) {

        return expenseService
                .filterExpensesByStatus(
                        status,
                        page,
                        size
                );
    }

    @PatchMapping("/{expenseId}/status")
    @Operation(summary = "Update expense status")
    public ExpenseResponseDTO updateExpenseStatus(

            @PathVariable("expenseId")
            Long expenseId,

            @RequestParam("status")
            ExpenseStatus status) {

        return expenseService.updateExpenseStatus(
                expenseId,
                status
        );
    }

    @PostMapping("/{expenseId}/upload")
    @Operation(summary = "Upload expense receipt")
    public ExpenseResponseDTO uploadReceipt(

            @PathVariable("expenseId")
            Long expenseId,

            @RequestParam("file")
            MultipartFile file) {

        return expenseService.uploadReceipt(
                expenseId,
                file
        );
    }
}