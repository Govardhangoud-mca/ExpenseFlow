import {
    Alert,
    Box,
    Button,
    Paper,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";

import { useState } from "react";

import {
    createExpense,
    uploadReceipt
} from "../services/expenseService";

function ExpenseForm() {

    const [expenseDate, setExpenseDate] =
        useState("");

    const [category, setCategory] =
        useState("");

    const [amount, setAmount] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [file, setFile] =
        useState<File | null>(null);

    const [loading, setLoading] =
        useState(false);

    const [openSnackbar,
        setOpenSnackbar] =
        useState(false);

    const [snackbarMessage,
        setSnackbarMessage] =
        useState("");

    const [snackbarSeverity,
        setSnackbarSeverity] =
        useState<"success" | "error">(
            "success"
        );

    const handleSubmit = async (
        event: React.FormEvent
    ) => {

        event.preventDefault();

        setLoading(true);

        try {

            const expenseData = {

                expenseDate,
                category,
                amount: Number(amount),
                description
            };

            const response =
                await createExpense(
                    expenseData
                );

            if (file) {

                await uploadReceipt(
                    response.id,
                    file
                );
            }

            setSnackbarMessage(
                "Expense Created Successfully"
            );

            setSnackbarSeverity(
                "success"
            );

            setOpenSnackbar(true);

            setExpenseDate("");
            setCategory("");
            setAmount("");
            setDescription("");
            setFile(null);

        } catch (error) {

            console.error(error);

            setSnackbarMessage(
                "Failed to create expense"
            );

            setSnackbarSeverity(
                "error"
            );

            setOpenSnackbar(true);

        } finally {

            setLoading(false);
        }
    };

    return (

        <>

            <Paper
                elevation={0}
                sx={{

                    maxWidth: 650,

                    margin: "40px auto",

                    padding: 5,

                    background:
                        "rgba(255,255,255,0.05)",

                    backdropFilter:
                        "blur(14px)",

                    border:
                        "1px solid rgba(255,255,255,0.08)",

                    borderRadius: "24px",

                    color: "white",

                    boxShadow:
                        "0 10px 40px rgba(99,102,241,0.15)"
                }}
            >

                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{

                        fontWeight: "bold",

                        mb: 4,

                        background:
                            "linear-gradient(45deg, #6366f1, #a855f7)",

                        WebkitBackgroundClip:
                            "text",

                        WebkitTextFillColor:
                            "transparent"
                    }}
                >

                    Create Expense

                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{

                        display: "flex",

                        flexDirection: "column",

                        gap: 3
                    }}
                >

                    <TextField
                        label="Expense Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={expenseDate}
                        onChange={(e) =>
                            setExpenseDate(
                                e.target.value
                            )
                        }
                        required
                        sx={{
                            input: {
                                color: "white"
                            },

                            label: {
                                color: "#94a3b8"
                            },

                            "& .MuiOutlinedInput-root": {

                                borderRadius:
                                    "14px",

                                background:
                                    "rgba(255,255,255,0.03)",

                                "& fieldset": {

                                    borderColor:
                                        "rgba(255,255,255,0.1)"
                                },

                                "&:hover fieldset": {

                                    borderColor:
                                        "#6366f1"
                                }
                            }
                        }}
                    />

                    <TextField
                        label="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(
                                e.target.value
                            )
                        }
                        required
                        sx={{
                            input: {
                                color: "white"
                            },

                            label: {
                                color: "#94a3b8"
                            },

                            "& .MuiOutlinedInput-root": {

                                borderRadius:
                                    "14px",

                                background:
                                    "rgba(255,255,255,0.03)",

                                "& fieldset": {

                                    borderColor:
                                        "rgba(255,255,255,0.1)"
                                },

                                "&:hover fieldset": {

                                    borderColor:
                                        "#6366f1"
                                }
                            }
                        }}
                    />

                    <TextField
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e) =>
                            setAmount(
                                e.target.value
                            )
                        }
                        required
                        sx={{
                            input: {
                                color: "white"
                            },

                            label: {
                                color: "#94a3b8"
                            },

                            "& .MuiOutlinedInput-root": {

                                borderRadius:
                                    "14px",

                                background:
                                    "rgba(255,255,255,0.03)",

                                "& fieldset": {

                                    borderColor:
                                        "rgba(255,255,255,0.1)"
                                },

                                "&:hover fieldset": {

                                    borderColor:
                                        "#6366f1"
                                }
                            }
                        }}
                    />

                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }
                        sx={{

                            textarea: {
                                color: "white"
                            },

                            label: {
                                color: "#94a3b8"
                            },

                            "& .MuiOutlinedInput-root": {

                                borderRadius:
                                    "14px",

                                background:
                                    "rgba(255,255,255,0.03)",

                                "& fieldset": {

                                    borderColor:
                                        "rgba(255,255,255,0.1)"
                                },

                                "&:hover fieldset": {

                                    borderColor:
                                        "#6366f1"
                                }
                            }
                        }}
                    />

                    <Button
                        variant="outlined"
                        component="label"
                        sx={{

                            borderRadius: "14px",

                            borderColor:
                                "rgba(255,255,255,0.15)",

                            color: "#c4b5fd",

                            py: 1.5,

                            textTransform: "none",

                            fontWeight: 600,

                            "&:hover": {

                                borderColor:
                                    "#6366f1",

                                background:
                                    "rgba(99,102,241,0.1)"
                            }
                        }}
                    >

                        Upload Receipt

                        <input
                            type="file"
                            hidden
                            onChange={(e) => {

                                if (
                                    e.target.files
                                ) {

                                    setFile(
                                        e.target.files[0]
                                    );
                                }
                            }}
                        />

                    </Button>

                    {file && (

                        <Typography
                            variant="body2"
                            sx={{
                                color: "#cbd5e1"
                            }}
                        >

                            Selected File:
                            {" "}
                            {file.name}

                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{

                            py: 1.5,

                            borderRadius:
                                "14px",

                            textTransform:
                                "none",

                            fontSize: "16px",

                            fontWeight:
                                "bold",

                            background:
                                "linear-gradient(45deg, #6366f1, #a855f7)",

                            boxShadow:
                                "0 10px 25px rgba(99,102,241,0.35)",

                            "&:hover": {

                                transform:
                                    "translateY(-2px)",

                                background:
                                    "linear-gradient(45deg, #4f46e5, #9333ea)"
                            }
                        }}
                    >

                        {loading
                            ? "Submitting..."
                            : "Submit Expense"}

                    </Button>

                </Box>

            </Paper>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() =>
                    setOpenSnackbar(false)
                }
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >

                <Alert
                    severity={
                        snackbarSeverity
                    }
                    variant="filled"
                    onClose={() =>
                        setOpenSnackbar(false)
                    }
                >

                    {snackbarMessage}

                </Alert>

            </Snackbar>

        </>
    );
}

export default ExpenseForm;