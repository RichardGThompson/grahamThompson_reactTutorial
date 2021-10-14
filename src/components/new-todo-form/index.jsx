import {useForm} from 'react-hook-form';
import {Input} from '../input-field';

export const NewTodoForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                name="title"
                label="Todo (ex: Do laundry)"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength:{
                            value: 3,
                            message: "Please enter at least 3 characters!"
                        }
                    }
                }
                required>
            </Input>

            <Input
                type="date"
                name="date"
                label="Due Date"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo date is required",
                    }
                }
                required>
            </Input>
            
            <input type="submit" />
        </form>
    )
}