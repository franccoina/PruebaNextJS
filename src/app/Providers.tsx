'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ClientLayout from './ClientLayout';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout>
        <Provider store={store}>{children}</Provider>
    </ClientLayout>)
}