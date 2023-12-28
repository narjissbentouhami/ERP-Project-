"use client"
export interface Role {
  _id: string;
  nom: string;
}
export interface Permission {
  _id: string;
  nom: string;
}

export interface OTPData {
  otp: number,
  expireOn: number,
  used: boolean,
}

export interface UserInterface {
  _id: string;
  email: string;
  password: string;
  nom: string;
  prenom: string;
  entreprise: string;
  telephone: string;
  role: Role;
  permissions: Permission[];
  otps?: OTPData[];
  url: String;
}

export default function page() {
  let authUser = localStorage.getItem("authUser");
  if (authUser) {
    let authUserInterface: UserInterface = JSON.parse(authUser);
    return (
      <div>Dashboard: {authUserInterface.role?.nom}</div>
    )
  }
  else
  {
    window.location.href="/";
  }
}
