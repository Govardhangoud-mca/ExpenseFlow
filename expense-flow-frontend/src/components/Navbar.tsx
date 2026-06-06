import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box
} from "@mui/material";

import {
    Link,
    useLocation
} from "react-router-dom";

function Navbar() {

    const location =
        useLocation();

    const navButtonStyle = (
        path: string
    ) => ({

        color:
            location.pathname === path
                ? "#ffffff"
                : "#94a3b8",

        background:
            location.pathname === path
                ? "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))"
                : "transparent",

        border:
            location.pathname === path
                ? "1px solid rgba(255,255,255,0.15)"
                : "1px solid transparent",

        borderRadius: "12px",

        px: 2,

        py: 1,

        transition: "0.3s",

        textTransform: "none",

        fontWeight: 600,

        "&:hover": {

            background:
                "rgba(255,255,255,0.08)",

            color: "#fff",

            transform:
                "translateY(-2px)"
        }
    });

    return (

        <AppBar
            position="sticky"
            elevation={0}
            sx={{

                background:
                    "rgba(3,0,20,0.7)",

                backdropFilter:
                    "blur(12px)",

                borderBottom:
                    "1px solid rgba(255,255,255,0.08)"
            }}
        >

            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent:
                        "space-between"
                }}
            >

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        background:
                            "linear-gradient(45deg, #6366f1, #a855f7)",

                        WebkitBackgroundClip:
                            "text",

                        WebkitTextFillColor:
                            "transparent"
                    }}
                >

                    ExpenseFlow

                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 2
                    }}
                >

                    <Button
                        component={Link}
                        to="/"
                        sx={
                            navButtonStyle("/")
                        }
                    >

                        Dashboard

                    </Button>

                    <Button
                        component={Link}
                        to="/expenses"
                        sx={
                            navButtonStyle(
                                "/expenses"
                            )
                        }
                    >

                        Expenses

                    </Button>

                    <Button
                        component={Link}
                        to="/create-expense"
                        sx={
                            navButtonStyle(
                                "/create-expense"
                            )
                        }
                    >

                        Create Expense

                    </Button>

                </Box>

            </Toolbar>

        </AppBar>
    );
}

export default Navbar;