export interface Expense {

    id?: number;

    expenseDate: string;

    category: string;

    amount: number;

    description: string;

    receiptPath?: string;

    status?: string;
}

