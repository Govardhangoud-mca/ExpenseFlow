package com.expenseflow.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import com.expenseflow.entity.Expense;
import com.expenseflow.enums.ExpenseStatus;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
	
	
	
	Page<Expense> findByCategoryContainingIgnoreCase(
            String category,
            Pageable pageable
    );

    Page<Expense> findByStatus(
            ExpenseStatus status,
            Pageable pageable
    );

}