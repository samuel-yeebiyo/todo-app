import { useState } from "react";
import { fetchPaginatedTodos } from "./lib";
import { Todo } from "./components";
import type { TodoType } from "./types";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@mantine/core";

const App = () => {
    const [page, setPage] = useState(1);
    const { status, isFetched, data } = useQuery({
        queryKey: ["todos", page],
        queryFn: () => fetchPaginatedTodos(page),
    });

    return (
        <div className="h-[100vh] bg-[#111827] text-white pt-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold">To-do List App</h1>
            <h2 className="mb-8">Revolutionizing task management!</h2>
            <div className="max-w-[550px] w-[90%] flex flex-col items-center">
                <div>
                    {isFetched &&
                        status == "success" &&
                        data.data.map((todo: TodoType) => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                status={todo.status}
                                title={todo.title}
                            />
                        ))}
                </div>
                <Pagination
                    className="w-fit mt-5"
                    value={data?.current_page}
                    onChange={setPage}
                    total={data?.last_page}
                />
            </div>
        </div>
    );
};

export default App;
