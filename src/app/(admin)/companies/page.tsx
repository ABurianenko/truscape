import React from 'react';
import Header from "@/src/app/components/header";
import Toolbar from "@/src/app/components/toolbar";
import SearchInput from "@/src/app/components/search-input";
import AddCompanyButton from "@/src/app/components/add-company-button";
import CompanyTable from "@/src/app/components/company-table";
import CompanyRow from "@/src/app/components/company-row";
import {Status} from "@/src/app/components/status-label";

export interface PageProps {

}

function Page({}: PageProps) {
    return (
        <>
            <Header>Companies</Header>
            <Toolbar action={<AddCompanyButton />}>
                <SearchInput />
            </Toolbar>
            <CompanyTable>
                <CompanyRow
                    id={1}
                    category={"Products"}
                    company={"Costco"}
                    status={Status.Pending}
                    promotion={true}
                    country={"USA"}
                    joinedDate={"02/19/2023"} />
            </CompanyTable>
        </>
    );
}

export default Page;