import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import "@testing-library/jest-dom"

/* 
Método de aplicar testes = AAA - Arrange Action Assert
1 - Arrange (Preparar): Nesta etapa, você configura o ambiente necessário para o teste. Isso inclui inicializar objetos, definir variáveis, e preparar qualquer estado necessário para executar o teste.

2 - Act (Agir): Aqui, você executa a ação que deseja testar. Isso geralmente envolve chamar um método ou função que está sendo testada.

3 - Assert (Verificar): Finalmente, você verifica se o resultado da ação está conforme o esperado. Isso envolve a comparação de resultados obtidos com os resultados esperados, usando asserções.

*/

const compRender = () =>{
  const component = render(<BrowserRouter><App/></BrowserRouter>);
  return component
}


test('renders main App', () => {
  compRender();
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
