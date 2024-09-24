import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const InvoiceDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.noff}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.invoicetype}</p>
const p_calendarTemplate2 = (rowData, { rowIndex }) => <p >{rowData.invoicedateandtime}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.originaleinvoicereferencenumber}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.suppliername}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.suppliertin}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.suppliersstregistrationnumber}</p>
const dropdownTemplate7 = (rowData, { rowIndex }) => <p >{rowData.identifiertype?.identifytype}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.identifiernumber}</p>
const p_numberTemplate9 = (rowData, { rowIndex }) => <p >{rowData.suppliermsiccode}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.suppliertourismtaxregistrationnumber}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.supplierbusinessactivitydescription}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.supplieremail}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.thefirstsuppliercontactnumber}</p>
const p_numberTemplate14 = (rowData, { rowIndex }) => <p >{rowData.suppliercontactnumber}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.suppliercountryname}</p>
const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.supplierstatename}</p>
const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.suppliercityname}</p>
const p_numberTemplate18 = (rowData, { rowIndex }) => <p >{rowData.supplierpostalzone}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.supplieradressline0}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.supplieradressline1}</p>
const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.supplieraddressline2}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.buyername}</p>
const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.buyertin}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.buyersstregistrationnumber}</p>
const dropdownTemplate25 = (rowData, { rowIndex }) => <p >{rowData.buyeridentifiertype?.identifytype}</p>
const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.buyerbusinessregistrationnumber}</p>
const pTemplate27 = (rowData, { rowIndex }) => <p >{rowData.buyeremail}</p>
const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.buyercountryname}</p>
const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.buyerstatename}</p>
const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.buyercityname}</p>
const p_numberTemplate31 = (rowData, { rowIndex }) => <p >{rowData.buyerpostalzone}</p>
const pTemplate32 = (rowData, { rowIndex }) => <p >{rowData.buyeraddressline0}</p>
const pTemplate33 = (rowData, { rowIndex }) => <p >{rowData.buyeraddressline1}</p>
const pTemplate34 = (rowData, { rowIndex }) => <p >{rowData.buyeraddressline2}</p>
const pTemplate35 = (rowData, { rowIndex }) => <p >{rowData.thefirstbuyercontactnumber}</p>
const p_numberTemplate36 = (rowData, { rowIndex }) => <p >{rowData.buyercontactnumber}</p>
const pTemplate37 = (rowData, { rowIndex }) => <p >{rowData.invoicecurrency}</p>
const p_numberTemplate38 = (rowData, { rowIndex }) => <p >{rowData.currencyexchangerate}</p>
const pTemplate39 = (rowData, { rowIndex }) => <p >{rowData.frequencyofbilling}</p>
const p_calendarTemplate40 = (rowData, { rowIndex }) => <p >{rowData.billingperiodstartdate}</p>
const p_calendarTemplate41 = (rowData, { rowIndex }) => <p >{rowData.billingperiodenddate}</p>
const pTemplate42 = (rowData, { rowIndex }) => <p >{rowData.paymentmode}</p>
const p_numberTemplate43 = (rowData, { rowIndex }) => <p >{rowData.supplierbankaccountnumber}</p>
const pTemplate44 = (rowData, { rowIndex }) => <p >{rowData.paymentterms}</p>
const p_numberTemplate45 = (rowData, { rowIndex }) => <p >{rowData.prepaymentamount}</p>
const p_calendarTemplate46 = (rowData, { rowIndex }) => <p >{rowData.prepaymentdate}</p>
const pTemplate47 = (rowData, { rowIndex }) => <p >{rowData.prepaymentreferencenumber}</p>
const pTemplate48 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientname}</p>
const pTemplate49 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientcountryname}</p>
const pTemplate50 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientstatename}</p>
const pTemplate51 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientcityname}</p>
const p_numberTemplate52 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientpostalzone}</p>
const pTemplate53 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientaddressline0}</p>
const pTemplate54 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientaddressline1}</p>
const pTemplate55 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientaddressline2}</p>
const pTemplate56 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipienttin}</p>
const pTemplate57 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientidentifiertype}</p>
const pTemplate58 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientbusinessregistrationnumber}</p>
const pTemplate59 = (rowData, { rowIndex }) => <p >{rowData.billreferencenumber}</p>
const pTemplate60 = (rowData, { rowIndex }) => <p >{rowData.referencenumberofcustomsformno1}</p>
const pTemplate61 = (rowData, { rowIndex }) => <p >{rowData.incoterms}</p>
const pTemplate62 = (rowData, { rowIndex }) => <p >{rowData.freetradeagreementinformation}</p>
const pTemplate63 = (rowData, { rowIndex }) => <p >{rowData.authorisationnumberforcertifiedexporter}</p>
const pTemplate64 = (rowData, { rowIndex }) => <p >{rowData.referencenumberofcustomsformno2}</p>
const pTemplate65 = (rowData, { rowIndex }) => <p >{rowData.invoicelinenumber}</p>
const pTemplate66 = (rowData, { rowIndex }) => <p >{rowData.invoicelineclassification}</p>
const pTemplate67 = (rowData, { rowIndex }) => <p >{rowData.productname}</p>
const p_numberTemplate68 = (rowData, { rowIndex }) => <p >{rowData.quantity}</p>
const p_numberTemplate69 = (rowData, { rowIndex }) => <p >{rowData.unitprice}</p>
const pTemplate70 = (rowData, { rowIndex }) => <p >{rowData.measurement}</p>
const p_numberTemplate71 = (rowData, { rowIndex }) => <p >{rowData.subtotal}</p>
const pTemplate72 = (rowData, { rowIndex }) => <p >{rowData.countryoforigin}</p>
const p_numberTemplate73 = (rowData, { rowIndex }) => <p >{rowData.pretotalexcludingtax}</p>
const pTemplate74 = (rowData, { rowIndex }) => <p >{rowData.taxtype}</p>
const p_numberTemplate75 = (rowData, { rowIndex }) => <p >{rowData.taxrate}</p>
const p_numberTemplate76 = (rowData, { rowIndex }) => <p >{rowData.taxamount}</p>
const pTemplate77 = (rowData, { rowIndex }) => <p >{rowData.taxdescription}</p>
const pTemplate78 = (rowData, { rowIndex }) => <p >{rowData.taxexemptiondetails}</p>
const p_dateTemplate79 = (rowData, { rowIndex }) => <p >{(new Date(rowData.taxexemptionamount)).toLocaleDateString()}</p>
const p_numberTemplate80 = (rowData, { rowIndex }) => <p >{rowData.discountrate}</p>
const p_numberTemplate81 = (rowData, { rowIndex }) => <p >{rowData.discountamount}</p>
const pTemplate82 = (rowData, { rowIndex }) => <p >{rowData.discountdescription}</p>
const p_numberTemplate83 = (rowData, { rowIndex }) => <p >{rowData.feeorchargerate}</p>
const p_numberTemplate84 = (rowData, { rowIndex }) => <p >{rowData.feeorchargeamount}</p>
const pTemplate85 = (rowData, { rowIndex }) => <p >{rowData.feeorchargedescription}</p>
const pTemplate86 = (rowData, { rowIndex }) => <p >{rowData.detailtaxtype}</p>
const p_numberTemplate87 = (rowData, { rowIndex }) => <p >{rowData.detailtotaltaxamountpertaxtype}</p>
const p_numberTemplate88 = (rowData, { rowIndex }) => <p >{rowData.detailtotaltaxableamount}</p>
const pTemplate89 = (rowData, { rowIndex }) => <p >{rowData.detailsoftaxexemption}</p>
const p_numberTemplate90 = (rowData, { rowIndex }) => <p >{rowData.amountexemptedfromtax}</p>
const p_numberTemplate91 = (rowData, { rowIndex }) => <p >{rowData.additionaldiscountamount}</p>
const pTemplate92 = (rowData, { rowIndex }) => <p >{rowData.additionaldiscountdescription}</p>
const p_numberTemplate93 = (rowData, { rowIndex }) => <p >{rowData.additionalfeeamount}</p>
const pTemplate94 = (rowData, { rowIndex }) => <p >{rowData.additionalfeedescription}</p>
const p_numberTemplate95 = (rowData, { rowIndex }) => <p >{rowData.otherfeeorchargeamounts}</p>
const pTemplate96 = (rowData, { rowIndex }) => <p >{rowData.othrefeeorchargedescription}</p>
const p_numberTemplate97 = (rowData, { rowIndex }) => <p >{rowData.totaldiscountvalue}</p>
const p_numberTemplate98 = (rowData, { rowIndex }) => <p >{rowData.totalfeeorchargeamount}</p>
const p_numberTemplate99 = (rowData, { rowIndex }) => <p >{rowData.totaltaxamount}</p>
const p_numberTemplate100 = (rowData, { rowIndex }) => <p >{rowData.totalexcludingtax}</p>
const p_numberTemplate101 = (rowData, { rowIndex }) => <p >{rowData.totalnetamount}</p>
const p_numberTemplate102 = (rowData, { rowIndex }) => <p >{rowData.totalincludingtax}</p>
const p_numberTemplate103 = (rowData, { rowIndex }) => <p >{rowData.roundingamount}</p>
const p_numberTemplate104 = (rowData, { rowIndex }) => <p >{rowData.totalpayableamount}</p>
const pTemplate105 = (rowData, { rowIndex }) => <p >{rowData.invoicenumber}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "invoice"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="noff" header="Noff" body={pTemplate0} filter={selectedFilterFields.includes("noff")} hidden={selectedHideFields?.includes("noff")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicetype" header="Invoice Type" body={pTemplate1} filter={selectedFilterFields.includes("invoicetype")} hidden={selectedHideFields?.includes("invoicetype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicedateandtime" header="Invoice Date and Time" body={p_calendarTemplate2} filter={selectedFilterFields.includes("invoicedateandtime")} hidden={selectedHideFields?.includes("invoicedateandtime")}  sortable style={{ minWidth: "8rem" }} />
<Column field="originaleinvoicereferencenumber" header="Original eInvoice Reference No" body={pTemplate3} filter={selectedFilterFields.includes("originaleinvoicereferencenumber")} hidden={selectedHideFields?.includes("originaleinvoicereferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliername" header="Supplier Name" body={pTemplate4} filter={selectedFilterFields.includes("suppliername")} hidden={selectedHideFields?.includes("suppliername")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliertin" header="Supplier TIN" body={pTemplate5} filter={selectedFilterFields.includes("suppliertin")} hidden={selectedHideFields?.includes("suppliertin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersstregistrationnumber" header="Supplier SST Registration No" body={pTemplate6} filter={selectedFilterFields.includes("suppliersstregistrationnumber")} hidden={selectedHideFields?.includes("suppliersstregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="identifiertype" header="Identifier Type" body={dropdownTemplate7} filter={selectedFilterFields.includes("identifiertype")} hidden={selectedHideFields?.includes("identifiertype")}  style={{ minWidth: "8rem" }} />
<Column field="identifiernumber" header="Identifier Number" body={pTemplate8} filter={selectedFilterFields.includes("identifiernumber")} hidden={selectedHideFields?.includes("identifiernumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliermsiccode" header="Supplier MSIC Code" body={p_numberTemplate9} filter={selectedFilterFields.includes("suppliermsiccode")} hidden={selectedHideFields?.includes("suppliermsiccode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliertourismtaxregistrationnumber" header="Supplier Tourism Tax Reg No" body={pTemplate10} filter={selectedFilterFields.includes("suppliertourismtaxregistrationnumber")} hidden={selectedHideFields?.includes("suppliertourismtaxregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierbusinessactivitydescription" header="Supplier Business ActivityDesc" body={pTemplate11} filter={selectedFilterFields.includes("supplierbusinessactivitydescription")} hidden={selectedHideFields?.includes("supplierbusinessactivitydescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplieremail" header="Supplier email" body={pTemplate12} filter={selectedFilterFields.includes("supplieremail")} hidden={selectedHideFields?.includes("supplieremail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstsuppliercontactnumber" header="First Supplier Contact Number" body={pTemplate13} filter={selectedFilterFields.includes("thefirstsuppliercontactnumber")} hidden={selectedHideFields?.includes("thefirstsuppliercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliercontactnumber" header="Supplier Contact Number" body={p_numberTemplate14} filter={selectedFilterFields.includes("suppliercontactnumber")} hidden={selectedHideFields?.includes("suppliercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliercountryname" header="Supplier Country Name" body={pTemplate15} filter={selectedFilterFields.includes("suppliercountryname")} hidden={selectedHideFields?.includes("suppliercountryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierstatename" header="Supplier State Name" body={pTemplate16} filter={selectedFilterFields.includes("supplierstatename")} hidden={selectedHideFields?.includes("supplierstatename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliercityname" header="Supplier City Name" body={pTemplate17} filter={selectedFilterFields.includes("suppliercityname")} hidden={selectedHideFields?.includes("suppliercityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierpostalzone" header="Supplier Postal Zone" body={p_numberTemplate18} filter={selectedFilterFields.includes("supplierpostalzone")} hidden={selectedHideFields?.includes("supplierpostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplieradressline0" header="Supplier Adress Line 0" body={pTemplate19} filter={selectedFilterFields.includes("supplieradressline0")} hidden={selectedHideFields?.includes("supplieradressline0")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplieradressline1" header="Supplier Adress Line 1" body={pTemplate20} filter={selectedFilterFields.includes("supplieradressline1")} hidden={selectedHideFields?.includes("supplieradressline1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplieraddressline2" header="Supplier Address Line 2" body={pTemplate21} filter={selectedFilterFields.includes("supplieraddressline2")} hidden={selectedHideFields?.includes("supplieraddressline2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyername" header="Buyer Name" body={pTemplate22} filter={selectedFilterFields.includes("buyername")} hidden={selectedHideFields?.includes("buyername")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyertin" header="Buyer TIN" body={pTemplate23} filter={selectedFilterFields.includes("buyertin")} hidden={selectedHideFields?.includes("buyertin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersstregistrationnumber" header="Buyer SST Registration Number" body={pTemplate24} filter={selectedFilterFields.includes("buyersstregistrationnumber")} hidden={selectedHideFields?.includes("buyersstregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeridentifiertype" header="Buyer Identifier Type" body={dropdownTemplate25} filter={selectedFilterFields.includes("buyeridentifiertype")} hidden={selectedHideFields?.includes("buyeridentifiertype")}  style={{ minWidth: "8rem" }} />
<Column field="buyerbusinessregistrationnumber" header="Buyer Business Registration No" body={pTemplate26} filter={selectedFilterFields.includes("buyerbusinessregistrationnumber")} hidden={selectedHideFields?.includes("buyerbusinessregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeremail" header="Buyer email" body={pTemplate27} filter={selectedFilterFields.includes("buyeremail")} hidden={selectedHideFields?.includes("buyeremail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercountryname" header="Buyer Country Name" body={pTemplate28} filter={selectedFilterFields.includes("buyercountryname")} hidden={selectedHideFields?.includes("buyercountryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerstatename" header="Buyer State Name" body={pTemplate29} filter={selectedFilterFields.includes("buyerstatename")} hidden={selectedHideFields?.includes("buyerstatename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercityname" header="Buyer City Name" body={pTemplate30} filter={selectedFilterFields.includes("buyercityname")} hidden={selectedHideFields?.includes("buyercityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerpostalzone" header="Buyerpostalzone" body={p_numberTemplate31} filter={selectedFilterFields.includes("buyerpostalzone")} hidden={selectedHideFields?.includes("buyerpostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeraddressline0" header="Buyer Address Line 0" body={pTemplate32} filter={selectedFilterFields.includes("buyeraddressline0")} hidden={selectedHideFields?.includes("buyeraddressline0")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeraddressline1" header="Buyer Address Line 1" body={pTemplate33} filter={selectedFilterFields.includes("buyeraddressline1")} hidden={selectedHideFields?.includes("buyeraddressline1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeraddressline2" header="Buyer Address Line 2" body={pTemplate34} filter={selectedFilterFields.includes("buyeraddressline2")} hidden={selectedHideFields?.includes("buyeraddressline2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstbuyercontactnumber" header="The First Buyer Contact Number" body={pTemplate35} filter={selectedFilterFields.includes("thefirstbuyercontactnumber")} hidden={selectedHideFields?.includes("thefirstbuyercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercontactnumber" header="Buyer Contact Number" body={p_numberTemplate36} filter={selectedFilterFields.includes("buyercontactnumber")} hidden={selectedHideFields?.includes("buyercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicecurrency" header="Invoice Currency" body={pTemplate37} filter={selectedFilterFields.includes("invoicecurrency")} hidden={selectedHideFields?.includes("invoicecurrency")}  sortable style={{ minWidth: "8rem" }} />
<Column field="currencyexchangerate" header="Currency Exchange Rate" body={p_numberTemplate38} filter={selectedFilterFields.includes("currencyexchangerate")} hidden={selectedHideFields?.includes("currencyexchangerate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="frequencyofbilling" header="Frequency of Billing" body={pTemplate39} filter={selectedFilterFields.includes("frequencyofbilling")} hidden={selectedHideFields?.includes("frequencyofbilling")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingperiodstartdate" header="Billing Period Start Date" body={p_calendarTemplate40} filter={selectedFilterFields.includes("billingperiodstartdate")} hidden={selectedHideFields?.includes("billingperiodstartdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingperiodenddate" header="Billing Period End Date" body={p_calendarTemplate41} filter={selectedFilterFields.includes("billingperiodenddate")} hidden={selectedHideFields?.includes("billingperiodenddate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentmode" header="Payment Mode" body={pTemplate42} filter={selectedFilterFields.includes("paymentmode")} hidden={selectedHideFields?.includes("paymentmode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierbankaccountnumber" header="Supplier Bank Account Number" body={p_numberTemplate43} filter={selectedFilterFields.includes("supplierbankaccountnumber")} hidden={selectedHideFields?.includes("supplierbankaccountnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentterms" header="Payment Terms" body={pTemplate44} filter={selectedFilterFields.includes("paymentterms")} hidden={selectedHideFields?.includes("paymentterms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="prepaymentamount" header="Pre Payment Amount" body={p_numberTemplate45} filter={selectedFilterFields.includes("prepaymentamount")} hidden={selectedHideFields?.includes("prepaymentamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="prepaymentdate" header="Pre Payment Date" body={p_calendarTemplate46} filter={selectedFilterFields.includes("prepaymentdate")} hidden={selectedHideFields?.includes("prepaymentdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="prepaymentreferencenumber" header="Pre Payment Reference Number" body={pTemplate47} filter={selectedFilterFields.includes("prepaymentreferencenumber")} hidden={selectedHideFields?.includes("prepaymentreferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientname" header="Shipping Recipient Name" body={pTemplate48} filter={selectedFilterFields.includes("shippingrecipientname")} hidden={selectedHideFields?.includes("shippingrecipientname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientcountryname" header="Shipping Recipient CountryName" body={pTemplate49} filter={selectedFilterFields.includes("shippingrecipientcountryname")} hidden={selectedHideFields?.includes("shippingrecipientcountryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientstatename" header="Shipping Recipient State Name" body={pTemplate50} filter={selectedFilterFields.includes("shippingrecipientstatename")} hidden={selectedHideFields?.includes("shippingrecipientstatename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientcityname" header="Shipping Recipient City Name" body={pTemplate51} filter={selectedFilterFields.includes("shippingrecipientcityname")} hidden={selectedHideFields?.includes("shippingrecipientcityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientpostalzone" header="Shipping Recipient Postal Zone" body={p_numberTemplate52} filter={selectedFilterFields.includes("shippingrecipientpostalzone")} hidden={selectedHideFields?.includes("shippingrecipientpostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientaddressline0" header="Recipient Address Line 0" body={pTemplate53} filter={selectedFilterFields.includes("shippingrecipientaddressline0")} hidden={selectedHideFields?.includes("shippingrecipientaddressline0")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientaddressline1" header="Recipient Address Line 1" body={pTemplate54} filter={selectedFilterFields.includes("shippingrecipientaddressline1")} hidden={selectedHideFields?.includes("shippingrecipientaddressline1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientaddressline2" header="Recipient Address Line 2" body={pTemplate55} filter={selectedFilterFields.includes("shippingrecipientaddressline2")} hidden={selectedHideFields?.includes("shippingrecipientaddressline2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipienttin" header="Shipping Recipient TIN" body={pTemplate56} filter={selectedFilterFields.includes("shippingrecipienttin")} hidden={selectedHideFields?.includes("shippingrecipienttin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientidentifiertype" header="Shippingrecipientidentifiertype" body={pTemplate57} filter={selectedFilterFields.includes("shippingrecipientidentifiertype")} hidden={selectedHideFields?.includes("shippingrecipientidentifiertype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientbusinessregistrationnumber" header="Shipping Recipient Biz Reg No" body={pTemplate58} filter={selectedFilterFields.includes("shippingrecipientbusinessregistrationnumber")} hidden={selectedHideFields?.includes("shippingrecipientbusinessregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billreferencenumber" header="Bill Reference Number" body={pTemplate59} filter={selectedFilterFields.includes("billreferencenumber")} hidden={selectedHideFields?.includes("billreferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="referencenumberofcustomsformno1" header="Ref No of Custom Form No1" body={pTemplate60} filter={selectedFilterFields.includes("referencenumberofcustomsformno1")} hidden={selectedHideFields?.includes("referencenumberofcustomsformno1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="incoterms" header="Incoterms" body={pTemplate61} filter={selectedFilterFields.includes("incoterms")} hidden={selectedHideFields?.includes("incoterms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="freetradeagreementinformation" header="Free Trade Agreement Info" body={pTemplate62} filter={selectedFilterFields.includes("freetradeagreementinformation")} hidden={selectedHideFields?.includes("freetradeagreementinformation")}  sortable style={{ minWidth: "8rem" }} />
<Column field="authorisationnumberforcertifiedexporter" header="Authorisation No of Exporter" body={pTemplate63} filter={selectedFilterFields.includes("authorisationnumberforcertifiedexporter")} hidden={selectedHideFields?.includes("authorisationnumberforcertifiedexporter")}  sortable style={{ minWidth: "8rem" }} />
<Column field="referencenumberofcustomsformno2" header="Ref No of Custom Form No2" body={pTemplate64} filter={selectedFilterFields.includes("referencenumberofcustomsformno2")} hidden={selectedHideFields?.includes("referencenumberofcustomsformno2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicelinenumber" header="Invoicelinenumber" body={pTemplate65} filter={selectedFilterFields.includes("invoicelinenumber")} hidden={selectedHideFields?.includes("invoicelinenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicelineclassification" header="Invoice Line Classification" body={pTemplate66} filter={selectedFilterFields.includes("invoicelineclassification")} hidden={selectedHideFields?.includes("invoicelineclassification")}  sortable style={{ minWidth: "8rem" }} />
<Column field="productname" header="Product Name" body={pTemplate67} filter={selectedFilterFields.includes("productname")} hidden={selectedHideFields?.includes("productname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="quantity" header="Quantity" body={p_numberTemplate68} filter={selectedFilterFields.includes("quantity")} hidden={selectedHideFields?.includes("quantity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="unitprice" header="Unit Price" body={p_numberTemplate69} filter={selectedFilterFields.includes("unitprice")} hidden={selectedHideFields?.includes("unitprice")}  sortable style={{ minWidth: "8rem" }} />
<Column field="measurement" header="Measurement" body={pTemplate70} filter={selectedFilterFields.includes("measurement")} hidden={selectedHideFields?.includes("measurement")}  sortable style={{ minWidth: "8rem" }} />
<Column field="subtotal" header="Subtotal" body={p_numberTemplate71} filter={selectedFilterFields.includes("subtotal")} hidden={selectedHideFields?.includes("subtotal")}  sortable style={{ minWidth: "8rem" }} />
<Column field="countryoforigin" header="Country of Origin" body={pTemplate72} filter={selectedFilterFields.includes("countryoforigin")} hidden={selectedHideFields?.includes("countryoforigin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="pretotalexcludingtax" header="Pretotalexcludingtax" body={p_numberTemplate73} filter={selectedFilterFields.includes("pretotalexcludingtax")} hidden={selectedHideFields?.includes("pretotalexcludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxtype" header="Tax Type" body={pTemplate74} filter={selectedFilterFields.includes("taxtype")} hidden={selectedHideFields?.includes("taxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxrate" header="Tax Rate" body={p_numberTemplate75} filter={selectedFilterFields.includes("taxrate")} hidden={selectedHideFields?.includes("taxrate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxamount" header="Tax Amount" body={p_numberTemplate76} filter={selectedFilterFields.includes("taxamount")} hidden={selectedHideFields?.includes("taxamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxdescription" header="Tax Description" body={pTemplate77} filter={selectedFilterFields.includes("taxdescription")} hidden={selectedHideFields?.includes("taxdescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxexemptiondetails" header="Tax Exemption Details" body={pTemplate78} filter={selectedFilterFields.includes("taxexemptiondetails")} hidden={selectedHideFields?.includes("taxexemptiondetails")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxexemptionamount" header="Tax Exemption Amount" body={p_dateTemplate79} filter={selectedFilterFields.includes("taxexemptionamount")} hidden={selectedHideFields?.includes("taxexemptionamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountrate" header="Discount Rate" body={p_numberTemplate80} filter={selectedFilterFields.includes("discountrate")} hidden={selectedHideFields?.includes("discountrate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountamount" header="Discount Amount" body={p_numberTemplate81} filter={selectedFilterFields.includes("discountamount")} hidden={selectedHideFields?.includes("discountamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountdescription" header="Discount Description" body={pTemplate82} filter={selectedFilterFields.includes("discountdescription")} hidden={selectedHideFields?.includes("discountdescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeorchargerate" header="Fee or Charge Rate" body={p_numberTemplate83} filter={selectedFilterFields.includes("feeorchargerate")} hidden={selectedHideFields?.includes("feeorchargerate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeorchargeamount" header="Fee or Charge Amount" body={p_numberTemplate84} filter={selectedFilterFields.includes("feeorchargeamount")} hidden={selectedHideFields?.includes("feeorchargeamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeorchargedescription" header="Fee or Charge Description" body={pTemplate85} filter={selectedFilterFields.includes("feeorchargedescription")} hidden={selectedHideFields?.includes("feeorchargedescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailtaxtype" header="Detail Tax Type" body={pTemplate86} filter={selectedFilterFields.includes("detailtaxtype")} hidden={selectedHideFields?.includes("detailtaxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailtotaltaxamountpertaxtype" header="Total Tax Amount per Tax Type " body={p_numberTemplate87} filter={selectedFilterFields.includes("detailtotaltaxamountpertaxtype")} hidden={selectedHideFields?.includes("detailtotaltaxamountpertaxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailtotaltaxableamount" header="Detail Total Taxable Amount" body={p_numberTemplate88} filter={selectedFilterFields.includes("detailtotaltaxableamount")} hidden={selectedHideFields?.includes("detailtotaltaxableamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailsoftaxexemption" header="Details of Tax Exemption" body={pTemplate89} filter={selectedFilterFields.includes("detailsoftaxexemption")} hidden={selectedHideFields?.includes("detailsoftaxexemption")}  sortable style={{ minWidth: "8rem" }} />
<Column field="amountexemptedfromtax" header="Amount Eexempted from Tax" body={p_numberTemplate90} filter={selectedFilterFields.includes("amountexemptedfromtax")} hidden={selectedHideFields?.includes("amountexemptedfromtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionaldiscountamount" header="Additional Discount Amount" body={p_numberTemplate91} filter={selectedFilterFields.includes("additionaldiscountamount")} hidden={selectedHideFields?.includes("additionaldiscountamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionaldiscountdescription" header="Additional Discount Desc" body={pTemplate92} filter={selectedFilterFields.includes("additionaldiscountdescription")} hidden={selectedHideFields?.includes("additionaldiscountdescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionalfeeamount" header="Additionalfeeamount" body={p_numberTemplate93} filter={selectedFilterFields.includes("additionalfeeamount")} hidden={selectedHideFields?.includes("additionalfeeamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionalfeedescription" header="Additional Fee Description" body={pTemplate94} filter={selectedFilterFields.includes("additionalfeedescription")} hidden={selectedHideFields?.includes("additionalfeedescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherfeeorchargeamounts" header="Otherfeeorchargeamounts" body={p_numberTemplate95} filter={selectedFilterFields.includes("otherfeeorchargeamounts")} hidden={selectedHideFields?.includes("otherfeeorchargeamounts")}  sortable style={{ minWidth: "8rem" }} />
<Column field="othrefeeorchargedescription" header="Othre Fee or Charge Desc" body={pTemplate96} filter={selectedFilterFields.includes("othrefeeorchargedescription")} hidden={selectedHideFields?.includes("othrefeeorchargedescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaldiscountvalue" header="Total Discount Value" body={p_numberTemplate97} filter={selectedFilterFields.includes("totaldiscountvalue")} hidden={selectedHideFields?.includes("totaldiscountvalue")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalfeeorchargeamount" header="Total Fee or Charge Amount" body={p_numberTemplate98} filter={selectedFilterFields.includes("totalfeeorchargeamount")} hidden={selectedHideFields?.includes("totalfeeorchargeamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaltaxamount" header="Total Tax Amount" body={p_numberTemplate99} filter={selectedFilterFields.includes("totaltaxamount")} hidden={selectedHideFields?.includes("totaltaxamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalexcludingtax" header="Total Excluding Tax" body={p_numberTemplate100} filter={selectedFilterFields.includes("totalexcludingtax")} hidden={selectedHideFields?.includes("totalexcludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalnetamount" header="Total Net Amount" body={p_numberTemplate101} filter={selectedFilterFields.includes("totalnetamount")} hidden={selectedHideFields?.includes("totalnetamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalincludingtax" header="Total Including Tax" body={p_numberTemplate102} filter={selectedFilterFields.includes("totalincludingtax")} hidden={selectedHideFields?.includes("totalincludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="roundingamount" header="Rounding Amount" body={p_numberTemplate103} filter={selectedFilterFields.includes("roundingamount")} hidden={selectedHideFields?.includes("roundingamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalpayableamount" header="Total Payable Amount" body={p_numberTemplate104} filter={selectedFilterFields.includes("totalpayableamount")} hidden={selectedHideFields?.includes("totalpayableamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicenumber" header="Invoice Number" body={pTemplate105} filter={selectedFilterFields.includes("invoicenumber")} hidden={selectedHideFields?.includes("invoicenumber")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Invoice Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="invoice"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Invoice" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default InvoiceDataTable;