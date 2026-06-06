import { useEffect, useState } from "react";

import {
    Box,
    Button,
    MenuItem,
    TextField,
    Typography,
    Paper,
    InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import ExpenseTable from "../components/ExpenseTable";

import {
    getAllExpenses,
    updateExpenseStatus,
    searchExpenses,
    filterExpenses
} from "../services/expenseService";

import type { Expense } from "../types/Expense";

function ExpensesPage() {

    const [expenses, setExpenses] =
        useState<Expense[]>([]);

    const [searchCategory,
        setSearchCategory] =
        useState("");

    const [statusFilter,
        setStatusFilter] =
        useState("");

    const fetchExpenses = async () => {

        try {

            const response =
                await getAllExpenses();

            setExpenses(response.content);

        } catch (error) {

            console.error(error);
        }
    };

    useEffect(() => {

        fetchExpenses();

    }, []);

    const handleSearch = async () => {

        try {

            if (!searchCategory) {

                fetchExpenses();
                return;
            }

            const response =
                await searchExpenses(
                    searchCategory
                );

            setExpenses(response.content);

        } catch (error) {

            console.error(error);
        }
    };

    const handleFilter = async (
        status: string
    ) => {

        try {

            setStatusFilter(status);

            if (!status) {

                fetchExpenses();
                return;
            }

            const response =
                await filterExpenses(
                    status
                );

            setExpenses(response.content);

        } catch (error) {

            console.error(error);
        }
    };

    const handleStatusUpdate = async (
        expenseId: number,
        status: string
    ) => {

        try {

            await updateExpenseStatus(
                expenseId,
                status
            );

            fetchExpenses();

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <Box
            sx={{

                minHeight: "100vh",

                background:
                    "linear-gradient(135deg, #020617, #0f172a, #1e1b4b)",

                padding: {
                    xs: 2,
                    md: 4
                }
            }}
        >

            <Typography
                variant="h3"
                sx={{

                    fontWeight: "bold",

                    marginBottom: 1,

                    textAlign: "center",

                    background:
                        "linear-gradient(45deg, #818cf8, #c084fc)",

                    WebkitBackgroundClip:
                        "text",

                    WebkitTextFillColor:
                        "transparent"
                }}
            >

                Expense Management

            </Typography>

            <Typography
                sx={{
                    textAlign: "center",
                    color: "#94a3b8",
                    marginBottom: 4
                }}
            >

                Track, manage and monitor all company expenses

            </Typography>

            <Paper
                elevation={0}
                sx={{

                    padding: 3,

                    marginBottom: 4,

                    borderRadius: "24px",

                    background:
                        "rgba(255,255,255,0.05)",

                    backdropFilter:
                        "blur(12px)",

                    border:
                        "1px solid rgba(255,255,255,0.08)"
                }}
            >

                <Box
                    sx={{

                        display: "flex",

                        gap: 2,

                        flexWrap: "wrap",

                        alignItems: "center"
                    }}
                >

                    <TextField
                        label="Search Category"
                        value={searchCategory}
                        onChange={(e) =>
                            setSearchCategory(
                                e.target.value
                            )
                        }
                        slotProps={{
                            input: {
                                startAdornment: (

                                    <InputAdornment
                                        position="start"
                                    >

                                        <SearchIcon
                                            sx={{
                                                color:
                                                    "#94a3b8"
                                            }}
                                        />

                                    </InputAdornment>
                                )
                            }
                        }}
                        sx={{

                            minWidth: 260,

                            "& .MuiOutlinedInput-root":
                            {
                                color: "white",

                                borderRadius:
                                    "14px"
                            },

                            "& .MuiOutlinedInput-notchedOutline":
                            {
                                borderColor:
                                    "rgba(255,255,255,0.1)"
                            },

                            "& .MuiInputLabel-root":
                            {
                                color: "#cbd5e1"
                            }
                        }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        sx={{

                            height: "56px",

                            borderRadius:
                                "14px",

                            textTransform:
                                "none",

                            paddingX: 4,

                            fontWeight:
                                "bold",

                            background:
                                "linear-gradient(45deg, #6366f1, #8b5cf6)",

                            "&:hover": {

                                background:
                                    "linear-gradient(45deg, #4f46e5, #7c3aed)"
                            }
                        }}
                    >

                        Search

                    </Button>

                    <TextField
                        select
                        label="Filter Status"
                        value={statusFilter}
                        onChange={(e) =>
                            handleFilter(
                                e.target.value
                            )
                        }
                        slotProps={{
                            input: {
                                startAdornment: (

                                    <InputAdornment
                                        position="start"
                                    >

                                        <FilterListIcon
                                            sx={{
                                                color:
                                                    "#94a3b8"
                                            }}
                                        />

                                    </InputAdornment>
                                )
                            }
                        }}
                        sx={{

                            width: 240,

                            "& .MuiOutlinedInput-root":
                            {
                                color: "white",

                                borderRadius:
                                    "14px"
                            },

                            "& .MuiOutlinedInput-notchedOutline":
                            {
                                borderColor:
                                    "rgba(255,255,255,0.1)"
                            },

                            "& .MuiInputLabel-root":
                            {
                                color: "#cbd5e1"
                            }
                        }}
                    >

                        <MenuItem value="">
                            All
                        </MenuItem>

                        <MenuItem value="DRAFT">
                            Draft
                        </MenuItem>

                        <MenuItem value="SUBMITTED">
                            Submitted
                        </MenuItem>

                        <MenuItem value="APPROVED">
                            Approved
                        </MenuItem>

                        <MenuItem value="REJECTED">
                            Rejected
                        </MenuItem>

                    </TextField>

                </Box>

            </Paper>

            <ExpenseTable
                expenses={expenses}
                onStatusUpdate={
                    handleStatusUpdate
                }
            />

        </Box>
    );
}

export default ExpensesPage;