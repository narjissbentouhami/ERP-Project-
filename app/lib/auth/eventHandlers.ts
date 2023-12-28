import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

interface SignUpData {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default async function signupHandle({
  nom,
  prenom,
  email,
  password,
  confirmPassword,
}: SignUpData) {
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    return;
  }
  const telephone = '06666666';
  const entreprise = 'Syana';
  const url = 'http://syana.com';
  const role = '6584bd5086ceb3e0b0fecb11';
  let signupData = {
    nom,
    prenom,
    email,
    password,
    telephone,
    entreprise,
    url,
    role,
  };

  let response = await fetch('/api/auth?action=signup', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(signupData),
  });
  if (response.ok) {
    console.log(response);
    window.location.href = '/';
  } else {
    console.error('Error during signup:', response.text());
  }
}
