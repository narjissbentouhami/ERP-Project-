import React from 'react'

interface UserInfoProps {
    data: {
        name: string;
        role: string;
        image: string;
    };
}

export const UserInfos: React.FC<UserInfoProps> = ({ data }) => {
    const { name, role, image } = data;
    return (
        <div className='flex flex-row justify-start col-span-3'>
            <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="20" viewBox="0 0 6 20" fill="none" className='m-auto'>
                    <g clip-path="url(#clip0_414_757)">
                        <path d="M2.31315 3.71333C3.1654 3.71333 3.85629 3.02245 3.85629 2.1702C3.85629 1.31796 3.1654 0.627075 2.31315 0.627075C1.4609 0.627075 0.77002 1.31796 0.77002 2.1702C0.77002 3.02245 1.4609 3.71333 2.31315 3.71333Z" fill="#001123" />
                        <path d="M2.31315 11.4289C3.1654 11.4289 3.85629 10.738 3.85629 9.88579C3.85629 9.03354 3.1654 8.34265 2.31315 8.34265C1.4609 8.34265 0.77002 9.03354 0.77002 9.88579C0.77002 10.738 1.4609 11.4289 2.31315 11.4289Z" fill="#001123" />
                        <path d="M2.31315 19.1445C3.1654 19.1445 3.85629 18.4536 3.85629 17.6014C3.85629 16.7491 3.1654 16.0582 2.31315 16.0582C1.4609 16.0582 0.77002 16.7491 0.77002 17.6014C0.77002 18.4536 1.4609 19.1445 2.31315 19.1445Z" fill="#001123" />
                    </g>
                    <defs>
                        <clipPath id="clip0_414_757">
                            <rect width="5.40091" height="18.5174" fill="white" transform="translate(-0.00146484 0.627075)" />
                        </clipPath>
                    </defs>
                </svg>
                <img src={image} className='rounded-full ml-3' style={{ width:"40px" , height:"40px" }}/>
            </div>
            <div className="flex flex-col ml-6" style={{ fontSize: "10px"  }}>
                <span className='text-base'>{name}</span>
                <span className='rounded-lg p-1 m-auto' style={{ backgroundColor: "#38B68433", color: "#38B684" }}>{role}</span>
            </div>
        </div>
    )
}
