import {
    Avatar,
    Box,
    Button,
    Chip,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import { useState } from "react";

import type { Expense } from "../types/Expense";

interface Props {
    expenses: Expense[];
    onStatusUpdate: (expenseId: number, status: string) => void;
}

function ExpenseTable({ expenses, onStatusUpdate }: Props) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // ✅ NEW PREMIUM STATUS COLORS
    const getStatusStyles = (status?: string) => {
        switch (status) {

            case "APPROVED":
                return {
                    bg: "linear-gradient(45deg, #22c55e, #16a34a)",
                    color: "#dcfce7"
                };

            case "REJECTED":
                return {
                    bg: "linear-gradient(45deg, #ef4444, #b91c1c)",
                    color: "#fee2e2"
                };

            case "SUBMITTED":
                return {
                    bg: "linear-gradient(45deg, #f59e0b, #d97706)",
                    color: "#fffbeb"
                };

            // ⭐ NEW: Draft looks premium now
            case "DRAFT":
                return {
                    bg: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                    color: "#ede9fe"
                };

            default:
                return {
                    bg: "linear-gradient(45deg, #64748b, #475569)",
                    color: "#e2e8f0"
                };
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                marginTop: 4,
                background: "rgba(15,23,42,0.75)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                overflow: "hidden",
                color: "white",
                boxShadow: "0 10px 40px rgba(99,102,241,0.20)"
            }}
        >
            <Box sx={{ padding: 3, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        background: "linear-gradient(45deg, #6366f1, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Expense Records
                </Typography>

                <Typography sx={{ color: "#94a3b8", mt: 1 }}>
                    Manage and track all expense activities
                </Typography>
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ background: "rgba(255,255,255,0.04)" }}>
                            <TableCell sx={{ color: "#cbd5e1", fontWeight: "bold" }}>
                                Expense
                            </TableCell>
                            <TableCell sx={{ color: "#cbd5e1", fontWeight: "bold" }}>
                                Date
                            </TableCell>
                            <TableCell sx={{ color: "#cbd5e1", fontWeight: "bold" }}>
                                Amount
                            </TableCell>
                            <TableCell sx={{ color: "#cbd5e1", fontWeight: "bold" }}>
                                Status
                            </TableCell>
                            <TableCell sx={{ color: "#cbd5e1", fontWeight: "bold" }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {expenses
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((expense) => {

                                const statusStyle = getStatusStyles(expense.status);

                                return (
                                    <TableRow
                                        key={expense.id}
                                        sx={{
                                            transition: "0.3s",
                                            "&:hover": {
                                                background: "rgba(255,255,255,0.04)"
                                            }
                                        }}
                                    >
                                        <TableCell>
                                            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                                                <Avatar
                                                    sx={{
                                                        background: "linear-gradient(45deg,#6366f1,#8b5cf6)"
                                                    }}
                                                >
                                                    <ReceiptLongIcon />
                                                </Avatar>

                                                <Box>
                                                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                                                        {expense.category}
                                                    </Typography>

                                                    <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                                                        {expense.description}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </TableCell>

                                        <TableCell sx={{ color: "#f8fafc" }}>
                                            {expense.expenseDate}
                                        </TableCell>

                                        <TableCell
                                            sx={{
                                                color: "#a5b4fc",
                                                fontWeight: "bold",
                                                fontSize: "16px"
                                            }}
                                        >
                                            ₹ {expense.amount}
                                        </TableCell>

                                        {/* ⭐ NEW BEAUTIFUL STATUS CHIP */}
                                        <TableCell>
                                            <Chip
                                                label={expense.status}
                                                sx={{
                                                    fontWeight: "bold",
                                                    borderRadius: "10px",
                                                    paddingX: 1,
                                                    background: statusStyle.bg,
                                                    color: statusStyle.color,
                                                    textTransform: "capitalize",
                                                    boxShadow: "0 4px 15px rgba(0,0,0,0.25)"
                                                }}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <Stack direction="row" spacing={1}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<CheckCircleIcon />}
                                                    onClick={() =>
                                                        onStatusUpdate(expense.id!, "APPROVED")
                                                    }
                                                    sx={{
                                                        borderRadius: "12px",
                                                        textTransform: "none",
                                                        background: "linear-gradient(45deg, #22c55e, #16a34a)",
                                                        fontWeight: "bold",
                                                        "&:hover": {
                                                            background: "linear-gradient(45deg, #16a34a, #15803d)"
                                                        }
                                                    }}
                                                >
                                                    Approve
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<CancelIcon />}
                                                    onClick={() =>
                                                        onStatusUpdate(expense.id!, "REJECTED")
                                                    }
                                                    sx={{
                                                        borderRadius: "12px",
                                                        textTransform: "none",
                                                        background: "linear-gradient(45deg, #ef4444, #dc2626)",
                                                        fontWeight: "bold",
                                                        "&:hover": {
                                                            background: "linear-gradient(45deg, #dc2626, #b91c1c)"
                                                        }
                                                    }}
                                                >
                                                    Reject
                                                </Button>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={expenses.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 15]}
                sx={{
                    color: "white",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    ".MuiTablePagination-selectIcon": { color: "white" },
                    ".MuiSvgIcon-root": { color: "white" }
                }}
            />
        </Paper>
    );
}

export default ExpenseTable;