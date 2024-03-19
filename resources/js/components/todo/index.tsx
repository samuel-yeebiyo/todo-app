import type { TodoType } from "../../types";
import { toggleTodoStatus } from "../../lib";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const Todo = ({ id, title, status }: TodoType) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => toggleTodoStatus(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    return (
        <div className="2 rounded-lg mb-2 bg-[#1e2636] flex gap-5 p-5">
            <input
                type="checkbox"
                checked={status == "done"}
                onChange={() => mutation.mutate()}
            />
            <p className={`${status == "done" && "line-through"}`}>{title}</p>
        </div>
    );
};

export default Todo;
