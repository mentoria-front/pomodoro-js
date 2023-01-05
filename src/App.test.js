import { fireEvent, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

test('Deve exibir botões de tempo', () => {
  render(Component());
  const takeLong = screen.getByText(/Long Time/i);
  const takeShort = screen.getByText(/Short Time/i);
  
  expect(takeLong).toBeInTheDocument();
  expect(takeShort).toBeInTheDocument();
});

test('Deve exibir contador com 5 minutos ao clicar em short time', () => {
  render(Component());
  const botao = screen.getByText(/Short Time/i);

  fireEvent.click(botao);

  const textoContador = screen.getByText(/05 : 00/i);

  expect(textoContador).toBeInTheDocument();
});

function Component() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}