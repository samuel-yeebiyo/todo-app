import { useState } from "react";
import { fetchPaginatedTodos } from "./lib";
import { Todo } from "./components";
import type { TodoType } from "./types";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@mantine/core";

const App = () => {
    const [page, setPage] = useState(1);
    const { status, error, isFetching, data } = useQuery({
        queryKey: ["todos", page],
        queryFn: () => fetchPaginatedTodos(page),
    });

    return (
        <div className="h-full text-white my-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold">To-do List App</h1>
            <h2 className="mb-8">Revolutionizing task management!</h2>
            <div className="max-w-[550px] w-[90%] flex flex-col items-center">
                <div className="w-full">
                    {isFetching ? (
                        !data ? (
                            <div className="w-full text-lg grid place-content-center bg-[#1e2636] h-96 rounded-lg">
                                Fetching...
                            </div>
                        ) : (
                            data.data.map((todo: TodoType) => (
                                <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    status={todo.status}
                                    title={todo.title}
                                />
                            ))
                        )
                    ) : status == "success" ? (
                        data.data.length == 0 ? (
                            <div className="w-full text-lg grid place-content-center bg-[#1e2636] h-96 rounded-lg">
                                No tasks to-do..yet
                            </div>
                        ) : (
                            data.data.map((todo: TodoType) => (
                                <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    status={todo.status}
                                    title={todo.title}
                                />
                            ))
                        )
                    ) : (
                        <div className="w-full text-lg grid place-content-center bg-[#1e2636] h-96 rounded-lg">
                            {error?.message}
                        </div>
                    )}
                </div>
                {status == "success" && data.data.length != 0 && (
                    <Pagination
                        className="w-fit mt-5"
                        value={status == "success" ? data?.current_page : 0}
                        onChange={setPage}
                        total={status == "success" ? data?.last_page : 0}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
