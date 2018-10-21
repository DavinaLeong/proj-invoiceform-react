export default {
    formState: "entry",
    invoices: [
        {
            id: 1,
            invoiceNo: "20180916",
            company: "Grocer Co.",
            address: "73 Bras Basah, 07-01\nSingapore 470765",
            date: "2018-09-16",
            soldTo: "John Doe F. C.",
            shipTo: "10 Biopolis Way #03-03/04 CHROMOS, BIOPOLIS\nSingapore 138670",
            subtotal: "18.10",
            processingFees: "1.81",
            taxes: "1.27",
            total: "21.18",
            lineItems: [
                {
                    id: 1,
                    invoiceId: 1,
                    item: "Red Apple",
                    quantity: "10",
                    unitPrice: "1.20",
                    amount: "6.00"
                },
                {
                    id: 2,
                    invoiceId: 1,
                    item: "Pear",
                    quantity: "2",
                    unitPrice: "0.80",
                    amount: "1.60"
                },
                {
                    id: 3,
                    invoiceId: 1,
                    item: "Orange",
                    quantity: "5",
                    unitPrice: "2.10",
                    amount: "10.50"
                }
            ]
        }, {
            id: 2,
            invoiceNo: "20181015",
            date: "2018-10-15",
            soldTo: "Fang ZhenKang",
            lineItems: []
        }
    ]
};