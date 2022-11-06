import { makeVar } from '@apollo/client';
import { GraphQLError } from 'graphql';

export const apiErrorsVar = makeVar<GraphQLError[]>([]);
