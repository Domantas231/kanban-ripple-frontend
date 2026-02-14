import { createFileRoute, Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Box, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import AuthLayout from '../components/layout/AuthLayout';
import { forgotPasswordSchema, type ForgotPasswordInput } from '../types/auth';
import { useState } from 'react';

export const Route = createFileRoute('/forgot-password')({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    // TODO: API call
    console.log('Forgot password:', data);
    setSubmitted(true);
  };

  return (
    <AuthLayout
      title={submitted ? 'Check your email' : 'Reset password'}
      subtitle={
        submitted
          ? 'We sent a password reset link to your email'
          : 'Enter your email and we\'ll send you a reset link'
      }
    >
      {submitted ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Didn't receive the email? Check your spam folder or try again.
          </Typography>
          <Button variant="outlined" onClick={() => setSubmitted(false)}>
            Try again
          </Button>
          <Typography
            component={Link}
            to="/login"
            variant="body2"
            color="primary"
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <ArrowBackIcon fontSize="small" />
            Back to sign in
          </Typography>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send reset link'}
          </Button>

          <Typography
            component={Link}
            to="/login"
            variant="body2"
            color="primary"
            sx={{
              textDecoration: 'none',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <ArrowBackIcon fontSize="small" />
            Back to sign in
          </Typography>
        </Box>
      )}
    </AuthLayout>
  );
}