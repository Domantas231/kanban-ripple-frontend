import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import MainLayout from '../components/layout/MainLayout';

export const Route = createFileRoute('/_authenticated')({
  // Vėliau čia bus auth check:
  // beforeLoad: async () => {
  //   if (!isAuthenticated()) throw redirect({ to: '/login' });
  // },
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});