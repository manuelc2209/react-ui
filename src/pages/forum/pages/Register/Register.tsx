import React from 'react';
import { Form, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input } from '../../../../components';

import { RegisterFormProps, RegisterProps } from './types';
import { StyledRegisterContainer, StyledRegisterWrapper } from './styles';

export const Register: React.FC<RegisterProps> = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting }
    } = useForm<RegisterFormProps>();
    const onSubmit: SubmitHandler<RegisterFormProps> = (data) => console.log(data);

    return (
        <StyledRegisterWrapper>
            <StyledRegisterContainer>
                <Form onSubmit={() => handleSubmit(onSubmit)} control={control}>
                    <Input {...register('email', { required: true })} />
                    {errors.email && <span>This field is required</span>}
                    <Input {...register('password', { required: true })} />
                    {errors.password && <span>Password must contain unique characters</span>}
                    <Input
                        {...register('confirmPassword', {
                            required: true,
                            validate: () => isSubmitting && watch('confirmPassword') === watch('password')
                        })}
                    />
                    {errors.password && <span>Passwords must match</span>}
                    <Button type="button" />
                </Form>
            </StyledRegisterContainer>
        </StyledRegisterWrapper>
    );
};
