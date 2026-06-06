package com.expenseflow.dto;

import java.time.LocalDate;

import com.expenseflow.enums.ExpenseStatus;

public class ExpenseResponseDTO {

    private Long id;

    private LocalDate expenseDate;

    private String category;

    private Double amount;

    private String description;

    private String receiptPath;

    private ExpenseStatus status;

    public ExpenseResponseDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getExpenseDate() {
        return expenseDate;
    }

    public void setExpenseDate(LocalDate expenseDate) {
        this.expenseDate = expenseDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getReceiptPath() {
        return receiptPath;
    }

    public void setReceiptPath(String receiptPath) {
        this.receiptPath = receiptPath;
    }

    public ExpenseStatus getStatus() {
        return status;
    }

    public void setStatus(ExpenseStatus status) {
        this.status = status;
    }
}