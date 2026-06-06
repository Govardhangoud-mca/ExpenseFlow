import {
    Box,
    Typography
} from "@mui/material";

import ExpenseForm from "../components/ExpenseForm";

function CreateExpensePage() {

    return (

        <Box
            sx={{

                minHeight: "100vh",

                background:
                    "linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)",

                padding: 4
            }}
        >

            <Typography
                variant="h3"
                sx={{

                    color: "white",

                    fontWeight: "bold",

                    marginBottom: 3,

                    textAlign: "center",

                    background:
                        "linear-gradient(45deg, #818cf8, #c084fc)",

                    WebkitBackgroundClip:
                        "text",

                    WebkitTextFillColor:
                        "transparent"
                }}
            >

                Create New Expense

            </Typography>

            <ExpenseForm />

        </Box>
    );
}

export default CreateExpensePage;