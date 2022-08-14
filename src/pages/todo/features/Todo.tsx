import { useAppSelector } from '@/app/hooks';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTodo } from './useAddTodo';
import { selectTodo } from './todoSlice';

type FormValue = {
  todo: string;
};

export const Todo: FC = () => {
  const todo = useAppSelector(selectTodo);
  const { addTodo } = useAddTodo();
  const { register, handleSubmit } = useForm<FormValue>();
  const onSubmit = async (data: FormValue) => {
    await addTodo(data.todo);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('todo')} />
        <input type="submit" />
      </form>
      <span>{todo.todo}</span>
    </>
  );
};
