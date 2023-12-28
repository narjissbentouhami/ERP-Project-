import React from 'react';
import { TableHeader } from "./tableHeader";
import { HasPermissionIcon } from "./hasPermissionIcon";
import { UserRole } from "./userRole";
import { UserInfos } from './userInfos';
import { HasNotPermissionIcon } from './hasNotPermissionIcon';
import data from "./data.json";

const Userstable = () => {


  return (
    <>
      <div className="rounded-lg  border bg-white overflow-y-auto p-4 ">
        <div className="flex justify-between flex-row">
          <TableHeader />
        </div>
        <div className="flex flex-col">
          <div className="p-4">
            <div className="my-3 p-1 grid md:grid-cols-12 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer m-auto">
              <span className="text-xs col-span-3">Utilisateurs</span>
              <span className="text-xs sm:text-left text-right col-span-2">Role</span>
              <span className="text-xs hidden md:grid">Maintenance module</span>
              <span className="text-xs">KPIS Energy module</span>
              <span className="text-xs">GED module</span>
              <span className="text-xs">GTC permissions</span>
              <span className="text-xs">Interface maintenance</span>
              <span className="text-xs">Space Management module</span>
              <span className="text-xs">Mobile APP</span>
            </div>
            <ul>
            {data.map((data) => (
              <li key={data.id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-12 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <UserInfos data={data} />
                <UserRole role={data._role} />
                {data.Permissions.maintenance ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
                {data.Permissions.kpis ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
                {data.Permissions.ged ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
                {data.Permissions.gtc ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
                {data.Permissions.interfaceMaintenance ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
                {data.Permissions.spaceManagment ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
                {data.Permissions.mobileApp ? <HasPermissionIcon /> : <HasNotPermissionIcon/>}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userstable;
