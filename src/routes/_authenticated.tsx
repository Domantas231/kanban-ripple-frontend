import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  component: () => (
    <div>
      <h1>Layout works</h1>
      <Outlet />
    </div>
  ),
});