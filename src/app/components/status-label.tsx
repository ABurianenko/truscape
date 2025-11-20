import React from 'react';

export  enum  Status {
    Active = 'active',
    NotActive = 'notActive',
    Pending = 'pending',
    Suspended = 'suspended'
}

export interface ActiveLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: ActiveLabelProps) {
    return <div
        className={`inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium ${
            status === Status.Active && 'bg-green-100 text-green-800' ||
            status === Status.NotActive && 'bg-red-100 text-red-800' ||
            status === Status.Pending && 'bg-orange-100 text-orange-800' ||
            status === Status.Suspended && 'bg-blue-100 text-blue-800' ||
            ''
        }`}
    >
        <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
        {children}
    </div>;
}