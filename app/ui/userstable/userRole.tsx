import React from 'react'

interface UserRoleProps {
    role: string;
  }

export const UserRole: React.FC<UserRoleProps> = (role) => {
  return (
    <>
    <span className='p-1 col-span-2 m-auto rounded ml-0' style={{ backgroundColor:"#2D749E1A" , color:"#2D749E" , fontSize:"10px" }}>{role.role}</span>
    </>
  )
}
