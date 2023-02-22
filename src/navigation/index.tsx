import React from 'react';
import { useAuthentification } from '../utils/useAuthentication'
import AuthStack from './authStack';
import UserStack from './userStack';


export default function RootNavigation() {
    const { user } = useAuthentification();

   return user ? <UserStack /> : <AuthStack />;
}