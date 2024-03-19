import { axiosClient } from "../utils/axios";

import type { TodoType } from "../types";

export const fetchPaginatedTodos = async (page = 1) => {
    return await axiosClient
        .get(`/todos?page=${page}`)
        .then((data) => data.data);
};

export const toggleTodoStatus = async (
    id: number
): Promise<TodoType | null> => {
    try {
        const { data } = await axiosClient.post(`/todos/${id}`);
        return data;
    } catch (e) {
        console.log("Encountered error while toggling todo");
        console.log({ e });
        return null;
    }
};
