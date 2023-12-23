"use client";



import Login from '@/components/ui/sharred/login';
import { useGlobalContext } from '@/context';
import React from 'react';

const Page = () => {
    const {account} = useGlobalContext();


    if(account === null ) return <Login/>;



   return (
    <div>
        Browse Page
    </div>
   )
}

export default Page;