import React from 'react';
import Toolbar from "@/src/app/components/toolbar";
import AddCompanyButton from "@/src/app/components/add-company-button";
import SearchInput from "@/src/app/components/search-input";
export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <Toolbar action={<AddCompanyButton />}>
            <SearchInput />
        </Toolbar>
    );
}