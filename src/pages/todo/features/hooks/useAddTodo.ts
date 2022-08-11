import { useAppDispatch } from '@/app/hooks';
import { add } from '../slices/todoSlice';

export const useAddTodo = () => {
  const dispatch = useAppDispatch();
  const addTodo = (todo: string) => {
    dispatch(
      add({
        todo,
      })
    );
  };
  return {
    addTodo,
  };
};
