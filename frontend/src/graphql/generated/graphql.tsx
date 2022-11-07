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
  deleteManyLicense: AffectedRows;
  loginAdmin: LoginAdminResponse;
  loginUser: User;
};

export type MutationCreateLicenseArgs = {
  data: LicenseCreateInput;
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

export type LoginAdminMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginAdminMutation = {
  __typename?: 'Mutation';
  loginAdmin: { __typename?: 'LoginAdminResponse'; access_token: string };
};

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