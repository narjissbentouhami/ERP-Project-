"use client"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from "next/link"
import React from 'react'

interface BasicBreadcrumbsProps {
    firstLink: { label: string; href: string };
    secondLink: { label: string; href: string };
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
}

const BasicBreadcrumbs: React.FC<BasicBreadcrumbsProps> = ({
    firstLink,
    secondLink,
}) => {
    return (
        <>
            <div className="flex justify-between flex-row m-auto mt-4 rounded-xl" style={{ backgroundColor: "#2D749E33", width: "95%" }}>
                <div className="flex flex-col ml-6 mt-4">
                    <h1 className='text-2xl mb-3'>{firstLink.label}</h1>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href={firstLink.href}>{firstLink.label}</Link>
                            <Link href={secondLink.href}>{secondLink.label}</Link>
                        </Breadcrumbs>
                    </div>
                </div>
                <div>
                    <img src="/breadcrumbsImage/Small.png"/>
                </div>
            </div>
        </>
    );
}

export default BasicBreadcrumbs;