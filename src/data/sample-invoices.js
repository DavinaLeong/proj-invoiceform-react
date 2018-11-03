export default [
    {
        id: 1,
        invoiceNo: "20181101",
        company: "Jaskson's Jewerry",
        address: "73 Orchard Boulevard, 07-01\nSingapore 470765",
        date: "16/09/2018",
        soldTo: "John Doe F. C.",
        shipTo: "Block 1090 Lower Delta Road 03-01\nSingapore 169201",
        salesPerson: "Lee Jackson",
        poNo: "P.O. Box 123",
        shippedDate: "30/09/2018",
        shipment: "Maersk",
        terms: "No stealing",
        remarks: "Very precious cargo.\nNo peeking!!",
        reference: "Ref 20181101",
        subtotal: "3862.50",
        processingFees: "386.25",
        taxes: "270.35",
        total: "4519.10",
        lineItems: [
            {
                id: 1,
                invoiceId: 1,
                item: "0..5 caret Diamond",
                quantity: "3",
                unitPrice: "1050.00",
                amount: "3150.00"
            },
            {
                id: 2,
                invoiceId: 1,
                item: "Gold Nugget (per gram)",
                quantity: "10",
                unitPrice: "58",
                amount: "580"
            },
            {
                id: 3,
                invoiceId: 1,
                item: "Platinum Nugget (per gram)",
                quantity: "3",
                unitPrice: "44.18",
                amount: "132.54"
            }
        ]
    }, {
        id: 2,
        invoiceNo: "20180916",
        company: "Grocer Co.",
        address: "73 Bras Basah, 07-01\nSingapore 470765",
        date: "16/09/2018",
        soldTo: "John Doe F. C.",
        shipTo: "10 Biopolis Way #03-03/04 CHROMOS, BIOPOLIS\nSingapore 138670",
        subtotal: "18.10",
        processingFees: "1.81",
        taxes: "1.27",
        total: "21.18",
        lineItems: [
            {
                id: 1,
                invoiceId: 2,
                item: "Red Apple",
                quantity: "10",
                unitPrice: "1.20",
                amount: "6.00"
            },
            {
                id: 2,
                invoiceId: 2,
                item: "Pear",
                quantity: "2",
                unitPrice: "0.80",
                amount: "1.60"
            },
            {
                id: 3,
                invoiceId: 2,
                item: "Orange",
                quantity: "5",
                unitPrice: "2.10",
                amount: "10.50"
            }
        ]
    }, {
        id: 3,
        invoiceNo: "20181015",
        date: "10/15/2018",
        soldTo: "Fang ZhenKang",
        lineItems: []
    }
];