import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type AdminWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int'];
};

export type CreateManyLicenseInput = {
  qty: Scalars['Float'];
  role: Role;
};

export type CreateManyLicenseResponse = {
  __typename?: 'CreateManyLicenseResponse';
  count: Scalars['Float'];
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type License = {
  __typename?: 'License';
  expirationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isActivated: Scalars['Boolean'];
  licenseKey: Scalars['String'];
  role: Role;
  user?: Maybe<User>;
};

export type LicenseCreateInput = {
  role: Role;
  user?: InputMaybe<UserCreateNestedOneWithoutLicenseInput>;
};

export type LicenseOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type LicenseRelationFilter = {
  is?: InputMaybe<LicenseWhereInput>;
  isNot?: InputMaybe<LicenseWhereInput>;
};

export enum LicenseScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpirationDate = 'expirationDate',
  Id = 'id',
  IsActivated = 'isActivated',
  LicenseKey = 'licenseKey',
  Role = 'role',
}

export type LicenseWhereInput = {
  AND?: InputMaybe<Array<LicenseWhereInput>>;
  NOT?: InputMaybe<Array<LicenseWhereInput>>;
  OR?: InputMaybe<Array<LicenseWhereInput>>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type LicenseWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginAdminInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginAdminResponse = {
  __typename?: 'LoginAdminResponse';
  access_token: Scalars['String'];
};

export type LoginUserInput = {
  licenseKey: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLicense: License;
  createManyLicense: CreateManyLicenseResponse;
  deleteManyLicense: AffectedRows;
  loginAdmin: LoginAdminResponse;
  loginUser: User;
};

export type MutationCreateLicenseArgs = {
  data: LicenseCreateInput;
};

export type MutationCreateManyLicenseArgs = {
  data: CreateManyLicenseInput;
};

export type MutationDeleteManyLicenseArgs = {
  where?: InputMaybe<LicenseWhereInput>;
};

export type MutationLoginAdminArgs = {
  loginAdminInput: LoginAdminInput;
};

export type MutationLoginUserArgs = {
  loginUserInput: LoginUserInput;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  admin: Admin;
  licenses: Array<License>;
  totalLicenses: Scalars['Float'];
  user: User;
};

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};

export type QueryLicensesArgs = {
  cursor?: InputMaybe<LicenseWhereUniqueInput>;
  distinct?: InputMaybe<Array<LicenseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LicenseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LicenseWhereInput>;
};

export enum Role {
  Familyandfriends = 'FAMILYANDFRIENDS',
  Lifetime = 'LIFETIME',
  Renewal = 'RENEWAL',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  discordAvatarId: Scalars['String'];
  discordId: Scalars['String'];
  id: Scalars['ID'];
  license: License;
  licenseKey: Scalars['String'];
  userName: Scalars['String'];
};

export type UserCreateNestedOneWithoutLicenseInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLicenseInput>;
  create?: InputMaybe<UserCreateWithoutLicenseInput>;
};

export type UserCreateOrConnectWithoutLicenseInput = {
  create: UserCreateWithoutLicenseInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutLicenseInput = {
  discordAvatarId: Scalars['String'];
  discordId: Scalars['String'];
  userName: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  discordAvatarId?: InputMaybe<SortOrder>;
  discordId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  license?: InputMaybe<LicenseOrderByWithRelationInput>;
  userName?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  discordAvatarId?: InputMaybe<StringFilter>;
  discordId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  license?: InputMaybe<LicenseRelationFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateManyLicenseMutationVariables = Exact<{
  data: CreateManyLicenseInput;
}>;

export type CreateManyLicenseMutation = {
  __typename?: 'Mutation';
  createManyLicense: {
    __typename?: 'CreateManyLicenseResponse';
    count: number;
  };
};

export type DeleteManyLicenseMutationVariables = Exact<{
  where: LicenseWhereInput;
}>;

export type DeleteManyLicenseMutation = {
  __typename?: 'Mutation';
  deleteManyLicense: { __typename?: 'AffectedRows'; count: number };
};

export type LicensesQueryVariables = Exact<{
  skip: Scalars['Int'];
  take: Scalars['Int'];
}>;

export type LicensesQuery = {
  __typename?: 'Query';
  licenses: Array<{
    __typename?: 'License';
    id: string;
    licenseKey: string;
    expirationDate?: any | null;
    role: Role;
    isActivated: boolean;
  }>;
};

export type LoginAdminMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginAdminMutation = {
  __typename?: 'Mutation';
  loginAdmin: { __typename?: 'LoginAdminResponse'; access_token: string };
};

export type TotalLicensesQueryVariables = Exact<{ [key: string]: never }>;

export type TotalLicensesQuery = {
  __typename?: 'Query';
  totalLicenses: number;
};

export const CreateManyLicenseDocument = gql`
  mutation CreateManyLicense($data: CreateManyLicenseInput!) {
    createManyLicense(data: $data) {
      count
    }
  }
`;
export type CreateManyLicenseMutationFn = Apollo.MutationFunction<
  CreateManyLicenseMutation,
  CreateManyLicenseMutationVariables
>;

/**
 * __useCreateManyLicenseMutation__
 *
 * To run a mutation, you first call `useCreateManyLicenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManyLicenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManyLicenseMutation, { data, loading, error }] = useCreateManyLicenseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateManyLicenseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateManyLicenseMutation,
    CreateManyLicenseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateManyLicenseMutation,
    CreateManyLicenseMutationVariables
  >(CreateManyLicenseDocument, options);
}
export type CreateManyLicenseMutationHookResult = ReturnType<
  typeof useCreateManyLicenseMutation
>;
export type CreateManyLicenseMutationResult =
  Apollo.MutationResult<CreateManyLicenseMutation>;
export type CreateManyLicenseMutationOptions = Apollo.BaseMutationOptions<
  CreateManyLicenseMutation,
  CreateManyLicenseMutationVariables
>;
export const DeleteManyLicenseDocument = gql`
  mutation DeleteManyLicense($where: LicenseWhereInput!) {
    deleteManyLicense(where: $where) {
      count
    }
  }
`;
export type DeleteManyLicenseMutationFn = Apollo.MutationFunction<
  DeleteManyLicenseMutation,
  DeleteManyLicenseMutationVariables
>;

/**
 * __useDeleteManyLicenseMutation__
 *
 * To run a mutation, you first call `useDeleteManyLicenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyLicenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyLicenseMutation, { data, loading, error }] = useDeleteManyLicenseMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyLicenseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteManyLicenseMutation,
    DeleteManyLicenseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteManyLicenseMutation,
    DeleteManyLicenseMutationVariables
  >(DeleteManyLicenseDocument, options);
}
export type DeleteManyLicenseMutationHookResult = ReturnType<
  typeof useDeleteManyLicenseMutation
>;
export type DeleteManyLicenseMutationResult =
  Apollo.MutationResult<DeleteManyLicenseMutation>;
export type DeleteManyLicenseMutationOptions = Apollo.BaseMutationOptions<
  DeleteManyLicenseMutation,
  DeleteManyLicenseMutationVariables
>;
export const LicensesDocument = gql`
  query Licenses($skip: Int!, $take: Int!) {
    licenses(skip: $skip, take: $take) {
      id
      licenseKey
      expirationDate
      role
      isActivated
    }
  }
`;

/**
 * __useLicensesQuery__
 *
 * To run a query within a React component, call `useLicensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLicensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLicensesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useLicensesQuery(
  baseOptions: Apollo.QueryHookOptions<LicensesQuery, LicensesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LicensesQuery, LicensesQueryVariables>(
    LicensesDocument,
    options,
  );
}
export function useLicensesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LicensesQuery,
    LicensesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LicensesQuery, LicensesQueryVariables>(
    LicensesDocument,
    options,
  );
}
export type LicensesQueryHookResult = ReturnType<typeof useLicensesQuery>;
export type LicensesLazyQueryHookResult = ReturnType<
  typeof useLicensesLazyQuery
>;
export type LicensesQueryResult = Apollo.QueryResult<
  LicensesQuery,
  LicensesQueryVariables
>;
export const LoginAdminDocument = gql`
  mutation loginAdmin($email: String!, $password: String!) {
    loginAdmin(loginAdminInput: { email: $email, password: $password }) {
      access_token
    }
  }
`;
export type LoginAdminMutationFn = Apollo.MutationFunction<
  LoginAdminMutation,
  LoginAdminMutationVariables
>;

/**
 * __useLoginAdminMutation__
 *
 * To run a mutation, you first call `useLoginAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAdminMutation, { data, loading, error }] = useLoginAdminMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginAdminMutation,
    LoginAdminMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginAdminMutation, LoginAdminMutationVariables>(
    LoginAdminDocument,
    options,
  );
}
export type LoginAdminMutationHookResult = ReturnType<
  typeof useLoginAdminMutation
>;
export type LoginAdminMutationResult =
  Apollo.MutationResult<LoginAdminMutation>;
export type LoginAdminMutationOptions = Apollo.BaseMutationOptions<
  LoginAdminMutation,
  LoginAdminMutationVariables
>;
export const TotalLicensesDocument = gql`
  query TotalLicenses {
    totalLicenses
  }
`;

/**
 * __useTotalLicensesQuery__
 *
 * To run a query within a React component, call `useTotalLicensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalLicensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalLicensesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalLicensesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TotalLicensesQuery,
    TotalLicensesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TotalLicensesQuery, TotalLicensesQueryVariables>(
    TotalLicensesDocument,
    options,
  );
}
export function useTotalLicensesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TotalLicensesQuery,
    TotalLicensesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TotalLicensesQuery, TotalLicensesQueryVariables>(
    TotalLicensesDocument,
    options,
  );
}
export type TotalLicensesQueryHookResult = ReturnType<
  typeof useTotalLicensesQuery
>;
export type TotalLicensesLazyQueryHookResult = ReturnType<
  typeof useTotalLicensesLazyQuery
>;
export type TotalLicensesQueryResult = Apollo.QueryResult<
  TotalLicensesQuery,
  TotalLicensesQueryVariables
>;
