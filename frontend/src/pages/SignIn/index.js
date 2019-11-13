import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber Logo" />
      <form action="">
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha mais segura" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar sua conta</Link>
      </form>
    </>
  );
}
