import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import {
  useLoginAdminMutation,
  LoginAdminInput,
} from '../../../graphql/generated/graphql';
import { InputField } from '../../../components/Form';
import { InputFieldErrorText } from '../../../components/Form';
import { Button } from '../../../components/Elements';
import { Heading } from '../../../components/Elements';
import { Label } from '../../../components/Elements/Label';
import { FormErrorMessage } from '../../../components/Form';
import storage from '../../../utils/storage';

export interface LoginFormProps {
  onSuccess: () => void;
}

interface FormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, errors, reset } = useForm<FormData>();

  const [login, { error }] = useLoginAdminMutation();

  const loginAdmin = useCallback(
    async ({ email, password }: LoginAdminInput) => {
      const result = await login({
        variables: {
          email,
          password,
        },
      });
      if (result.data?.loginAdmin.access_token) {
        storage.setToken(result.data.loginAdmin.access_token);
        return onSuccess();
      }
    },
    [login, onSuccess],
  );

  const handleOnSubmit = useCallback(
    async (data: FormData) => {
      const { email, password } = data;
      try {
        await loginAdmin({ email, password });
      } catch (err) {
        console.log(err);
        reset();
      }
    },
    [loginAdmin, reset],
  );

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Container>
        <HeadingWrap>
          <Heading variants="h1" fontSize="2.4rem">
            Login to Dashboard
          </Heading>
        </HeadingWrap>
        {error ? (
          <FormErrorMessage
            message="Incorrect username or password"
            width="40rem"
          />
        ) : null}
        <Inner>
          <Label htmlFor="email">User ID</Label>
          <InputField
            margin="2rem 0 0 0"
            name="email"
            type="email"
            id="email"
            className={errors.email ? 'is-invalid' : ''}
            inputRef={register({
              required: true,
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: 'Entered value does not match email format',
              },
            })}
          />
          {errors.email ? (
            <InputFieldErrorText margin="1.2rem 0 0 0">
              {errors.email.message || 'This field is required'}
            </InputFieldErrorText>
          ) : null}
          <Label margin="2rem 0 0 0" htmlFor="password">
            Password
          </Label>
          <InputField
            margin="2rem 0 0 0"
            name="password"
            id="password"
            type="password"
            className={errors.password ? 'is-invalid' : ''}
            inputRef={register({ required: true })}
          />
          {errors.password ? (
            <InputFieldErrorText margin="1.2rem 0 0 0">
              {errors.password.message || 'This field is required'}
            </InputFieldErrorText>
          ) : null}
          <Button
            margin="3.5rem 0 0 0"
            type="submit"
            variants="primary"
            border="0"
          >
            Login
          </Button>
        </Inner>
      </Container>
    </form>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
  flex-direction: column;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
  border: ${({ theme }) => `solid 0.5px ${theme.border}`};
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.5rem;
  max-width: 40rem;
`;

const HeadingWrap = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`;
