import {
    Card,
    CardContent,
    Typography,
    Box,
    CircularProgress,
    Divider,
    Avatar
} from "@mui/material";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import {
    ReceiptLong,
    CheckCircle,
    Cancel,
    PendingActions
} from "@mui/icons-material";

import { useEffect, useState } from "react";

import {
    getAllExpenses
} from "../services/expenseService";

import type { Expense } from "../types/Expense";

function Dashboard() {

    const [expenses, setExpenses] =
        useState<Expense[]>([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchExpenses();

    }, []);

    const fetchExpenses = async () => {

        try {

            const response =
                await getAllExpenses();

            setExpenses(
                response.content
            );

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);
        }
    };

    const totalExpenses =
        expenses.length;

    const approvedExpenses =
        expenses.filter(
            (expense) =>
                expense.status ===
                "APPROVED"
        ).length;

    const rejectedExpenses =
        expenses.filter(
            (expense) =>
                expense.status ===
                "REJECTED"
        ).length;

    const draftExpenses =
        expenses.filter(
            (expense) =>
                expense.status ===
                "DRAFT"
        ).length;

    const totalAmount =
        expenses.reduce(
            (sum, expense) =>
                sum + expense.amount,
            0
        );

    const cards = [

        {
            title:
                "Total Expenses",

            value:
                totalExpenses,

            icon:
                <ReceiptLong />,

            gradient:
                "linear-gradient(135deg, #6366f1, #8b5cf6)"
        },

        {
            title:
                "Approved",

            value:
                approvedExpenses,

            icon:
                <CheckCircle />,

            gradient:
                "linear-gradient(135deg, #10b981, #059669)"
        },

        {
            title:
                "Rejected",

            value:
                rejectedExpenses,

            icon:
                <Cancel />,

            gradient:
                "linear-gradient(135deg, #ef4444, #dc2626)"
        },

        {
            title:
                "Draft",

            value:
                draftExpenses,

            icon:
                <PendingActions />,

            gradient:
                "linear-gradient(135deg, #f59e0b, #d97706)"
        }
    ];

    if (loading) {

        return (

            <Box
                sx={{

                    display: "flex",

                    justifyContent:
                        "center",

                    alignItems:
                        "center",

                    height: "80vh"
                }}
            >

                <CircularProgress />

            </Box>
        );
    }

    return (

        <Box
            sx={{

                minHeight:
                    "100vh",

                padding: 4
            }}
        >

            <Typography
                variant="h3"
                sx={{

                    mb: 1,

                    fontWeight:
                        "bold",

                    background:
                        "linear-gradient(45deg, #818cf8, #c084fc)",

                    WebkitBackgroundClip:
                        "text",

                    WebkitTextFillColor:
                        "transparent"
                }}
            >

                Expense Dashboard

            </Typography>

            <Typography
                sx={{
                    color: "#94a3b8",
                    mb: 5
                }}
            >

                Track, manage and monitor all expense activities

            </Typography>

            <Grid
                container
                spacing={3}
            >

                {cards.map(
                    (
                        card,
                        index
                    ) => (

                        <Grid
                            key={index}
                            size={{
                                xs: 12,
                                md: 3
                            }}
                        >

                            <Card
                                sx={{

                                    background:
                                        "rgba(255,255,255,0.06)",

                                    backdropFilter:
                                        "blur(14px)",

                                    border:
                                        "1px solid rgba(255,255,255,0.08)",

                                    borderRadius:
                                        "24px",

                                    color:
                                        "white",

                                    overflow:
                                        "hidden",

                                    transition:
                                        "0.4s",

                                    "&:hover": {

                                        transform:
                                            "translateY(-8px)",

                                        boxShadow:
                                            "0 20px 40px rgba(99,102,241,0.25)"
                                    }
                                }}
                            >

                                <Box
                                    sx={{

                                        height: 8,

                                        background:
                                            card.gradient
                                    }}
                                />

                                <CardContent>

                                    <Stack
                                        direction="row"
                                        sx={{
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}
                                    >

                                        <Box>

                                            <Typography
                                                sx={{
                                                    color:
                                                        "#94a3b8"
                                                }}
                                            >

                                                {
                                                    card.title
                                                }

                                            </Typography>

                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    mt: 2,
                                                    fontWeight:
                                                        "bold"
                                                }}
                                            >

                                                {
                                                    card.value
                                                }

                                            </Typography>

                                        </Box>

                                        <Avatar
                                            sx={{

                                                background:
                                                    card.gradient,

                                                width: 60,

                                                height: 60
                                            }}
                                        >

                                            {
                                                card.icon
                                            }

                                        </Avatar>

                                    </Stack>

                                </CardContent>

                            </Card>

                        </Grid>
                    )
                )}

            </Grid>

            <Grid
                container
                spacing={3}
                sx={{
                    mt: 2
                }}
            >

                <Grid
                    size={{
                        xs: 12,
                        md: 8
                    }}
                >

                    <Card
                        sx={{

                            background:
                                "rgba(255,255,255,0.06)",

                            backdropFilter:
                                "blur(14px)",

                            border:
                                "1px solid rgba(255,255,255,0.08)",

                            borderRadius:
                                "24px",

                            color:
                                "white"
                        }}
                    >

                        <CardContent>

                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    fontWeight:
                                        "bold"
                                }}
                            >

                                Recent Expenses

                            </Typography>

                            {expenses
                                .slice(0, 5)
                                .map((expense) => (

                                    <Box
                                        key={
                                            expense.id
                                        }
                                        sx={{
                                            mb: 2
                                        }}
                                    >

                                        <Stack
                                            direction="row"
                                            sx={{ justifyContent: "space-between" }}
                                        >

                                            <Box>

                                                <Typography
                                                    sx={{
                                                        fontWeight:
                                                            "bold"
                                                    }}
                                                >

                                                    {
                                                        expense.category
                                                    }

                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color:
                                                            "#94a3b8",
                                                        fontSize:
                                                            "14px"
                                                    }}
                                                >

                                                    {
                                                        expense.description
                                                    }

                                                </Typography>

                                            </Box>

                                            <Typography
                                                sx={{
                                                    color:
                                                        "#a5b4fc",
                                                    fontWeight:
                                                        "bold"
                                                }}
                                            >

                                                ₹ {
                                                    expense.amount
                                                }

                                            </Typography>

                                        </Stack>

                                        <Divider
                                            sx={{
                                                mt: 2,
                                                borderColor:
                                                    "rgba(255,255,255,0.08)"
                                            }}
                                        />

                                    </Box>
                                ))}

                        </CardContent>

                    </Card>

                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        md: 4
                    }}
                >

                    <Card
                        sx={{

                            background:
                                "rgba(255,255,255,0.06)",

                            backdropFilter:
                                "blur(14px)",

                            border:
                                "1px solid rgba(255,255,255,0.08)",

                            borderRadius:
                                "24px",

                            color:
                                "white",

                            height:
                                "100%"
                        }}
                    >

                        <CardContent>

                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    fontWeight:
                                        "bold"
                                }}
                            >

                                Expense Summary

                            </Typography>

                            <Typography
                                sx={{
                                    color:
                                        "#94a3b8"
                                }}
                            >

                                Total Amount Spent

                            </Typography>

                            <Typography
                                variant="h2"
                                sx={{

                                    mt: 2,

                                    fontWeight:
                                        "bold",

                                    background:
                                        "linear-gradient(45deg, #6366f1, #a855f7)",

                                    WebkitBackgroundClip:
                                        "text",

                                    WebkitTextFillColor:
                                        "transparent"
                                }}
                            >

                                ₹ {totalAmount}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </Box>
    );
}

export default Dashboard;