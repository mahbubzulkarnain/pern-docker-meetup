export default `
directive @auth(roles: [Roles]) on FIELD_DEFINITION

input UserInput {
  displayName: String
  email: String!
  password: String!
  photoURL: String
  phoneNumber: String
}

type LoginResponse {
  idToken: String!
  email: String
  refreshToken: String
  expiresIn: String
  localId: String
  registered: String
}

type Register {
  disabled: Boolean
  displayName: String
  email: String!
  emailVerified: String
  metadata: UserMetadata
  passwordHash: String
  passwordSalt: String
  phoneNumber: String
  photoURL: String
  providerId: String
  providerData: [User]
  tenantId: String
  tokensValidAfterTime: String
  uid: String
}

extend type Mutation {
  login(input: UserInput!): LoginResponse
  register(input: UserInput!): Register
}
`;
