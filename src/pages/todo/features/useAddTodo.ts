import { useAppDispatch } from '@/app/hooks';
import { add, incrementAsync } from './todoSlice';

export const useAddTodo = () => {
  const dispatch = useAppDispatch();
  const addTodo = async (todo: string) => {
    try {
      await dispatch(incrementAsync(todo));
    } catch (err) {
      console.log('err');
    }
  };
  return {
    addTodo,
  };
};
