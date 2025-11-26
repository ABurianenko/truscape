import React from 'react';
import CompanyTable from "@/src/app/components/company-table";
import CompanyRow from "@/src/app/components/company-row";
import {Status} from "@/src/app/components/status-label";

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <CompanyTable>
            <CompanyRow
                id={1}
                category="Products"
                company="Costco"
                status={Status.Pending}
                promotion={true}
                country="USA"
                joinedDate="02.19.2023"
            />
        </CompanyTable>
    );
}