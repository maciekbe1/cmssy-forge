import { GraphQLClient } from 'graphql-request';
import { loadConfig } from './config.js';

export function createClient(): GraphQLClient {
  const config = loadConfig();

  if (!config.apiToken) {
    throw new Error(
      'CMSSY_API_TOKEN not configured. Run: cmssy-forge configure'
    );
  }

  return new GraphQLClient(config.apiUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// GraphQL Mutations
export const PUBLISH_PACKAGE_MUTATION = `
  mutation PublishPackage($token: String!, $input: PublishPackageInput!) {
    publishPackage(token: $token, input: $input) {
      success
      message
      packageId
      status
    }
  }
`;

export const MY_API_TOKENS_QUERY = `
  query MyApiTokens {
    myApiTokens {
      id
      name
      prefix
      scopes
      createdAt
    }
  }
`;
