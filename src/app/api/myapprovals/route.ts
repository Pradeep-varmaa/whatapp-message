import { NextResponse, NextRequest } from "next/server";


const approvals = [{
    "summary": {
        "total": 8,
        "pending": 3,
        "approved": 3,
        "rejected": 1,
        "cancelled": 1
    },
    "approvals": [
        {
            "id": "APR-1001",
            "title": "Leave request: 3 days",
            "type": "leave",
            "description": "Family function out of town, 20 to 22 November.",
            "status": "pending",
            "priority": "medium",
            "requestedBy": { "id": "U-101", "name": "Rahul Sharma", "email": "rahul.sharma@example.com" },
            "approver": { "id": "U-201", "name": "Anita Verma", "role": "manager" },
            "amount": null,
            "currency": null,
            "createdAt": "2026-11-16T09:15:00+05:30",
            "updatedAt": "2026-11-16T09:15:00+05:30",
            "dueDate": "2026-11-19",
            "comments": [],
            "attachments": []
        },
        {
            "id": "APR-1002",
            "title": "Laptop purchase",
            "type": "purchase",
            "description": "Replacement laptop for the development team.",
            "status": "pending",
            "priority": "high",
            "requestedBy": { "id": "U-102", "name": "Sneha Reddy", "email": "sneha.reddy@example.com" },
            "approver": { "id": "U-202", "name": "Karthik Rao", "role": "admin" },
            "amount": 85000,
            "currency": "INR",
            "createdAt": "2026-11-15T14:30:00+05:30",
            "updatedAt": "2026-11-17T10:05:00+05:30",
            "dueDate": "2026-11-20",
            "comments": [
                { "by": "Karthik Rao", "text": "Please attach the vendor quotation.", "at": "2026-11-17T10:05:00+05:30" }
            ],
            "attachments": [
                { "name": "quotation.pdf", "size": 184320 }
            ]
        },
        {
            "id": "APR-1003",
            "title": "Travel expense reimbursement",
            "type": "expense",
            "description": "Client visit to Bengaluru, train and hotel.",
            "status": "approved",
            "priority": "low",
            "requestedBy": { "id": "U-103", "name": "Imran Khan", "email": "imran.khan@example.com" },
            "approver": { "id": "U-201", "name": "Anita Verma", "role": "manager" },
            "amount": 12450,
            "currency": "INR",
            "createdAt": "2026-11-10T11:00:00+05:30",
            "updatedAt": "2026-11-12T16:40:00+05:30",
            "dueDate": "2026-11-15",
            "comments": [
                { "by": "Anita Verma", "text": "Approved. Receipts verified.", "at": "2026-11-12T16:40:00+05:30" }
            ],
            "attachments": [
                { "name": "receipts.zip", "size": 842000 }
            ]
        },
        {
            "id": "APR-1004",
            "title": "Access to production database",
            "type": "access",
            "description": "Read-only access for debugging an incident.",
            "status": "approved",
            "priority": "high",
            "requestedBy": { "id": "U-104", "name": "Priya Nair", "email": "priya.nair@example.com" },
            "approver": { "id": "U-203", "name": "Vikram Singh", "role": "superadmin" },
            "amount": null,
            "currency": null,
            "createdAt": "2026-11-13T08:20:00+05:30",
            "updatedAt": "2026-11-13T09:10:00+05:30",
            "dueDate": "2026-11-13",
            "comments": [
                { "by": "Vikram Singh", "text": "Approved for 24 hours only.", "at": "2026-11-13T09:10:00+05:30" }
            ],
            "attachments": []
        },
        {
            "id": "APR-1005",
            "title": "Budget increase for ad campaign",
            "type": "budget",
            "description": "Increase festive campaign budget by 20 percent.",
            "status": "rejected",
            "priority": "medium",
            "requestedBy": { "id": "U-105", "name": "Arjun Mehta", "email": "arjun.mehta@example.com" },
            "approver": { "id": "U-203", "name": "Vikram Singh", "role": "superadmin" },
            "amount": 150000,
            "currency": "INR",
            "createdAt": "2026-11-08T12:45:00+05:30",
            "updatedAt": "2026-11-11T17:20:00+05:30",
            "dueDate": "2026-11-14",
            "comments": [
                { "by": "Vikram Singh", "text": "Rejected. Quarterly budget already allocated.", "at": "2026-11-11T17:20:00+05:30" }
            ],
            "attachments": []
        },
        {
            "id": "APR-1006",
            "title": "New workflow publish request",
            "type": "workflow",
            "description": "Publish the order-confirmation flow to production.",
            "status": "pending",
            "priority": "high",
            "requestedBy": { "id": "U-106", "name": "Divya Iyer", "email": "divya.iyer@example.com" },
            "approver": { "id": "U-202", "name": "Karthik Rao", "role": "admin" },
            "amount": null,
            "currency": null,
            "createdAt": "2026-11-18T10:00:00+05:30",
            "updatedAt": "2026-11-18T10:00:00+05:30",
            "dueDate": "2026-11-19",
            "comments": [],
            "attachments": []
        },
        {
            "id": "APR-1007",
            "title": "Work from home: 1 week",
            "type": "leave",
            "description": "Internet and power repair work at home.",
            "status": "approved",
            "priority": "low",
            "requestedBy": { "id": "U-107", "name": "Manoj Kumar", "email": "manoj.kumar@example.com" },
            "approver": { "id": "U-201", "name": "Anita Verma", "role": "manager" },
            "amount": null,
            "currency": null,
            "createdAt": "2026-11-05T09:30:00+05:30",
            "updatedAt": "2026-11-06T10:15:00+05:30",
            "dueDate": "2026-11-08",
            "comments": [],
            "attachments": []
        },
        {
            "id": "APR-1008",
            "title": "Software subscription renewal",
            "type": "purchase",
            "description": "Annual design tool subscription.",
            "status": "cancelled",
            "priority": "low",
            "requestedBy": { "id": "U-108", "name": "Neha Gupta", "email": "neha.gupta@example.com" },
            "approver": { "id": "U-202", "name": "Karthik Rao", "role": "admin" },
            "amount": 24000,
            "currency": "INR",
            "createdAt": "2026-11-02T15:10:00+05:30",
            "updatedAt": "2026-11-04T09:00:00+05:30",
            "dueDate": "2026-11-10",
            "comments": [
                { "by": "Neha Gupta", "text": "Cancelled, switching to a free alternative.", "at": "2026-11-04T09:00:00+05:30" }
            ],
            "attachments": []
        }
    ]
}]

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;

    const statusFilter = searchParams.get("status");

    // const list = approvals[0].approvals.map((approval) => ({
    //     id: approval.id,
    //     title: approval.title,
    //     by: approval.requestedBy.name,
    //     description: approval.description,
    // }));

    const list = approvals[0].approvals.filter((approval) => {
        if (statusFilter) {
            return approval.status === statusFilter;
        }
        return approval.status === "pending";
    }).map((approval) => ({
        id: approval.id,
        title: approval.title,
        by: approval.requestedBy.name,
        description: approval.description,
    }));

    return NextResponse.json({ success: true, data: list });
}

export async function POST(request: NextRequest) {
    const requestData = await request.json();

 return NextResponse.json({ success: true, data: "We are Processing your request" });
}