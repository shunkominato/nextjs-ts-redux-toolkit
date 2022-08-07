import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { FC } from 'react';
import { useForm } from "react-hook-form";
import { useAddTodo } from '../hooks/useAddTodo';
import { add, selectTodo } from '../slices/todoSlice';


type FormValue = {
  todo: string,
}

export const Todo: FC = () => {
  const todo = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => { 
    dispatch(add({
      todo: data.todo
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("todo")} />
        <input type="submit" />
      </form>
      <span>{ todo.todo }</span>
    </>
  )
}