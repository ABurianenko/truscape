import React from 'react';
import Header from "@/src/app/components/header";
import Toolbar from "@/src/app/components/toolbar";
import SearchInput from "@/src/app/components/search-input";
import AddCompanyButton from "@/src/app/components/add-company-button";
import CompanyTable from "@/src/app/components/company-table";
import CompanyRow from "@/src/app/components/company-row";
import {Status} from "@/src/app/components/status-label";

export interface PageProps {
    params: {id: string[]};
}

function Page({params}: PageProps) {
    return (
        <>
            <Header>Companies ({String(params.id)})</Header>
            <p>{new  Date().toTimeString()}</p>
        </>
    );
}

export default Page;