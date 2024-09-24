import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleInvoicePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [identifiertype, setIdentifiertype] = useState([]);
const [buyeridentifiertype, setBuyeridentifiertype] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("invoice")
            .get(urlParams.singleInvoiceId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"identifiertype","buyeridentifiertype"] }})
            .then((res) => {
                set_entity(res || {});
                const identifiertype = Array.isArray(res.identifiertype)
            ? res.identifiertype.map((elem) => ({ _id: elem._id, identifytype: elem.identifytype }))
            : res.identifiertype
                ? [{ _id: res.identifiertype._id, identifytype: res.identifiertype.identifytype }]
                : [];
        setIdentifiertype(identifiertype);
const buyeridentifiertype = Array.isArray(res.buyeridentifiertype)
            ? res.buyeridentifiertype.map((elem) => ({ _id: elem._id, identifytype: elem.identifytype }))
            : res.buyeridentifiertype
                ? [{ _id: res.buyeridentifiertype._id, identifytype: res.buyeridentifiertype.identifytype }]
                : [];
        setBuyeridentifiertype(buyeridentifiertype);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Invoice", type: "error", message: error.message || "Failed get invoice" });
            });
    }, [props,urlParams.singleInvoiceId]);


    const goBack = () => {
        navigate("/invoice");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoice</h3>
                </div>
                <p>invoice/{urlParams.singleInvoiceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Noff</label><p className="m-0 ml-3" >{_entity?.noff}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Type</label><p className="m-0 ml-3" >{_entity?.invoicetype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Date and Time</label><p id="invoicedateandtime" className="m-0 ml-3" >{_entity?.invoicedateandtime}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original eInvoice Reference No</label><p className="m-0 ml-3" >{_entity?.originaleinvoicereferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Name</label><p className="m-0 ml-3" >{_entity?.suppliername}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier TIN</label><p className="m-0 ml-3" >{_entity?.suppliertin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier SST Registration No</label><p className="m-0 ml-3" >{_entity?.suppliersstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Identifier Number</label><p className="m-0 ml-3" >{_entity?.identifiernumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier MSIC Code</label><p className="m-0 ml-3" >{Number(_entity?.suppliermsiccode)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Tourism Tax Reg No</label><p className="m-0 ml-3" >{_entity?.suppliertourismtaxregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Business ActivityDesc</label><p className="m-0 ml-3" >{_entity?.supplierbusinessactivitydescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier email</label><p className="m-0 ml-3" >{_entity?.supplieremail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">First Supplier Contact Number</label><p className="m-0 ml-3" >{_entity?.thefirstsuppliercontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Contact Number</label><p className="m-0 ml-3" >{Number(_entity?.suppliercontactnumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Country Name</label><p className="m-0 ml-3" >{_entity?.suppliercountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier State Name</label><p className="m-0 ml-3" >{_entity?.supplierstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier City Name</label><p className="m-0 ml-3" >{_entity?.suppliercityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Postal Zone</label><p className="m-0 ml-3" >{Number(_entity?.supplierpostalzone)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Adress Line 0</label><p className="m-0 ml-3" >{_entity?.supplieradressline0}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Adress Line 1</label><p className="m-0 ml-3" >{_entity?.supplieradressline1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Address Line 2</label><p className="m-0 ml-3" >{_entity?.supplieraddressline2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Name</label><p className="m-0 ml-3" >{_entity?.buyername}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer TIN</label><p className="m-0 ml-3" >{_entity?.buyertin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer SST Registration Number</label><p className="m-0 ml-3" >{_entity?.buyersstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Business Registration No</label><p className="m-0 ml-3" >{_entity?.buyerbusinessregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer email</label><p className="m-0 ml-3" >{_entity?.buyeremail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Country Name</label><p className="m-0 ml-3" >{_entity?.buyercountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer State Name</label><p className="m-0 ml-3" >{_entity?.buyerstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer City Name</label><p className="m-0 ml-3" >{_entity?.buyercityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyerpostalzone</label><p className="m-0 ml-3" >{Number(_entity?.buyerpostalzone)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Address Line 0</label><p className="m-0 ml-3" >{_entity?.buyeraddressline0}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Address Line 1</label><p className="m-0 ml-3" >{_entity?.buyeraddressline1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Address Line 2</label><p className="m-0 ml-3" >{_entity?.buyeraddressline2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">The First Buyer Contact Number</label><p className="m-0 ml-3" >{_entity?.thefirstbuyercontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Contact Number</label><p className="m-0 ml-3" >{Number(_entity?.buyercontactnumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Currency</label><p className="m-0 ml-3" >{_entity?.invoicecurrency}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Currency Exchange Rate</label><p className="m-0 ml-3" >{Number(_entity?.currencyexchangerate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Frequency of Billing</label><p className="m-0 ml-3" >{_entity?.frequencyofbilling}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Billing Period Start Date</label><p id="billingperiodstartdate" className="m-0 ml-3" >{_entity?.billingperiodstartdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Billing Period End Date</label><p id="billingperiodenddate" className="m-0 ml-3" >{_entity?.billingperiodenddate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment Mode</label><p className="m-0 ml-3" >{_entity?.paymentmode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Bank Account Number</label><p className="m-0 ml-3" >{Number(_entity?.supplierbankaccountnumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment Terms</label><p className="m-0 ml-3" >{_entity?.paymentterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Pre Payment Amount</label><p className="m-0 ml-3" >{Number(_entity?.prepaymentamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Pre Payment Date</label><p id="prepaymentdate" className="m-0 ml-3" >{_entity?.prepaymentdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Pre Payment Reference Number</label><p className="m-0 ml-3" >{_entity?.prepaymentreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient Name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient CountryName</label><p className="m-0 ml-3" >{_entity?.shippingrecipientcountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient State Name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient City Name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientcityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient Postal Zone</label><p className="m-0 ml-3" >{Number(_entity?.shippingrecipientpostalzone)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Recipient Address Line 0</label><p className="m-0 ml-3" >{_entity?.shippingrecipientaddressline0}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Recipient Address Line 1</label><p className="m-0 ml-3" >{_entity?.shippingrecipientaddressline1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Recipient Address Line 2</label><p className="m-0 ml-3" >{_entity?.shippingrecipientaddressline2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient TIN</label><p className="m-0 ml-3" >{_entity?.shippingrecipienttin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientidentifiertype</label><p className="m-0 ml-3" >{_entity?.shippingrecipientidentifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient Biz Reg No</label><p className="m-0 ml-3" >{_entity?.shippingrecipientbusinessregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Bill Reference Number</label><p className="m-0 ml-3" >{_entity?.billreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Ref No of Custom Form No1</label><p className="m-0 ml-3" >{_entity?.referencenumberofcustomsformno1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Incoterms</label><p className="m-0 ml-3" >{_entity?.incoterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Free Trade Agreement Info</label><p className="m-0 ml-3" >{_entity?.freetradeagreementinformation}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Authorisation No of Exporter</label><p className="m-0 ml-3" >{_entity?.authorisationnumberforcertifiedexporter}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Ref No of Custom Form No2</label><p className="m-0 ml-3" >{_entity?.referencenumberofcustomsformno2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicelinenumber</label><p className="m-0 ml-3" >{_entity?.invoicelinenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Classification</label><p className="m-0 ml-3" >{_entity?.invoicelineclassification}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Product Name</label><p className="m-0 ml-3" >{_entity?.productname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Quantity</label><p className="m-0 ml-3" >{Number(_entity?.quantity)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Unit Price</label><p className="m-0 ml-3" >{Number(_entity?.unitprice)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Measurement</label><p className="m-0 ml-3" >{_entity?.measurement}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Subtotal</label><p className="m-0 ml-3" >{Number(_entity?.subtotal)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Country of Origin</label><p className="m-0 ml-3" >{_entity?.countryoforigin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Pretotalexcludingtax</label><p className="m-0 ml-3" >{Number(_entity?.pretotalexcludingtax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax Type</label><p className="m-0 ml-3" >{_entity?.taxtype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax Rate</label><p className="m-0 ml-3" >{Number(_entity?.taxrate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax Amount</label><p className="m-0 ml-3" >{Number(_entity?.taxamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax Description</label><p className="m-0 ml-3" >{_entity?.taxdescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax Exemption Details</label><p className="m-0 ml-3" >{_entity?.taxexemptiondetails}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discount Rate</label><p className="m-0 ml-3" >{Number(_entity?.discountrate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discount Amount</label><p className="m-0 ml-3" >{Number(_entity?.discountamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discount Description</label><p className="m-0 ml-3" >{_entity?.discountdescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fee or Charge Rate</label><p className="m-0 ml-3" >{Number(_entity?.feeorchargerate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fee or Charge Amount</label><p className="m-0 ml-3" >{Number(_entity?.feeorchargeamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fee or Charge Description</label><p className="m-0 ml-3" >{_entity?.feeorchargedescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Detail Tax Type</label><p className="m-0 ml-3" >{_entity?.detailtaxtype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Tax Amount per Tax Type </label><p className="m-0 ml-3" >{Number(_entity?.detailtotaltaxamountpertaxtype)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Detail Total Taxable Amount</label><p className="m-0 ml-3" >{Number(_entity?.detailtotaltaxableamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Details of Tax Exemption</label><p className="m-0 ml-3" >{_entity?.detailsoftaxexemption}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Amount Eexempted from Tax</label><p className="m-0 ml-3" >{Number(_entity?.amountexemptedfromtax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Additional Discount Amount</label><p className="m-0 ml-3" >{Number(_entity?.additionaldiscountamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Additional Discount Desc</label><p className="m-0 ml-3" >{_entity?.additionaldiscountdescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Additionalfeeamount</label><p className="m-0 ml-3" >{Number(_entity?.additionalfeeamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Additional Fee Description</label><p className="m-0 ml-3" >{_entity?.additionalfeedescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Otherfeeorchargeamounts</label><p className="m-0 ml-3" >{Number(_entity?.otherfeeorchargeamounts)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Othre Fee or Charge Desc</label><p className="m-0 ml-3" >{_entity?.othrefeeorchargedescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Discount Value</label><p className="m-0 ml-3" >{Number(_entity?.totaldiscountvalue)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Fee or Charge Amount</label><p className="m-0 ml-3" >{Number(_entity?.totalfeeorchargeamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Tax Amount</label><p className="m-0 ml-3" >{Number(_entity?.totaltaxamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Excluding Tax</label><p className="m-0 ml-3" >{Number(_entity?.totalexcludingtax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Net Amount</label><p className="m-0 ml-3" >{Number(_entity?.totalnetamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Including Tax</label><p className="m-0 ml-3" >{Number(_entity?.totalincludingtax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Rounding Amount</label><p className="m-0 ml-3" >{Number(_entity?.roundingamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Payable Amount</label><p className="m-0 ml-3" >{Number(_entity?.totalpayableamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Number</label><p className="m-0 ml-3" >{_entity?.invoicenumber}</p></div>
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Identifier Type</label>
                    {identifiertype.map((elem) => (
                        <Link key={elem._id} to={`/identifyType/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.identifytype}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Buyer Identifier Type</label>
                    {buyeridentifiertype.map((elem) => (
                        <Link key={elem._id} to={`/identifyType/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.identifytype}</p>
                            </div>
                        </Link>
                    ))}</div>

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleInvoicePage);
