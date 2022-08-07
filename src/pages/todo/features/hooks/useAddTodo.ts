import { useAppDispatch } from "@/app/hooks";
import { add } from "../slices/todoSlice";


export const useAddTodo = (todo: string) => {
  const dispatch = useAppDispatch();
  const addTodo = () => {
    dispatch(add({
      todo
    }))
  }
  return {
    addTodo
  }
}
