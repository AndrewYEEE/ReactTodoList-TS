interface Todo {
    text: string;
    complete: boolean;
}

type AddTodo = (text: string) => void;
type ToggleTodo = (index: number) => void;
type DeleteTodo = (index: number) => void;

