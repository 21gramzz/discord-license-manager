import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    LIFETIME = "LIFETIME",
    RENEWAL = "RENEWAL",
    FAMILYANDFRIENDS = "FAMILYANDFRIENDS"
}


registerEnumType(Role, { name: 'Role', description: undefined })
