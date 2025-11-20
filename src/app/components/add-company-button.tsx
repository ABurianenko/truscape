'use client'

import React, {useState} from 'react';
import Button from "@/src/app/components/button";
import dynamic from "next/dynamic";
// import CompanyFormModal from "@/src/app/components/company-form-modal";

const  CompanyFormModal = dynamic(() => import("./company-form-modal"), {
    ssr: false,
});

function AddCompanyButton() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onClick={() => setShow(true)}>Add company</Button>
            <CompanyFormModal onSubmit={console.log} show={show} onClose={()=>setShow(false)} />
        </>
    );
}

export default AddCompanyButton;