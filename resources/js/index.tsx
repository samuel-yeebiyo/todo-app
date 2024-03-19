import "./bootstrap";

import "../css/app.css";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <MantineProvider>
            <App />
        </MantineProvider>
    </QueryClientProvider>
);
