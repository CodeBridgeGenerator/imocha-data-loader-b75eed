import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const InvoiceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [identifiertype, setIdentifiertype] = useState([])
const [buyeridentifiertype, setBuyeridentifiertype] = useState([])

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [identifiertype,buyeridentifiertype], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.invoicedateandtime)) {
                error["invoicedateandtime"] = `Invoice Date and Time field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.suppliername)) {
                error["suppliername"] = `Supplier Name field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.suppliertin)) {
                error["suppliertin"] = `Supplier TIN field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.identifiernumber)) {
                error["identifiernumber"] = `Identifier Number field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplierbusinessactivitydescription)) {
                error["supplierbusinessactivitydescription"] = `Supplier Business ActivityDesc field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.suppliercityname)) {
                error["suppliercityname"] = `Supplier City Name field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplieradressline0)) {
                error["supplieradressline0"] = `Supplier Adress Line 0 field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.buyername)) {
                error["buyername"] = `Buyer Name field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.buyercityname)) {
                error["buyercityname"] = `Buyer City Name field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.buyeraddressline0)) {
                error["buyeraddressline0"] = `Buyer Address Line 0 field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.buyercontactnumber)) {
                error["buyercontactnumber"] = `Buyer Contact Number field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.shippingrecipientaddressline2)) {
                error["shippingrecipientaddressline2"] = `Recipient Address Line 2 field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.productname)) {
                error["productname"] = `Product Name field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.unitprice)) {
                error["unitprice"] = `Unit Price field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.pretotalexcludingtax)) {
                error["pretotalexcludingtax"] = `Pretotalexcludingtax field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.detailtotaltaxableamount)) {
                error["detailtotaltaxableamount"] = `Detail Total Taxable Amount field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.totaltaxamount)) {
                error["totaltaxamount"] = `Total Tax Amount field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.totalexcludingtax)) {
                error["totalexcludingtax"] = `Total Excluding Tax field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.totalpayableamount)) {
                error["totalpayableamount"] = `Total Payable Amount field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.invoicenumber)) {
                error["invoicenumber"] = `Invoice Number field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            noff: _entity?.noff,invoicetype: _entity?.invoicetype,invoicedateandtime: _entity?.invoicedateandtime,originaleinvoicereferencenumber: _entity?.originaleinvoicereferencenumber,suppliername: _entity?.suppliername,suppliertin: _entity?.suppliertin,suppliersstregistrationnumber: _entity?.suppliersstregistrationnumber,identifiertype: _entity?.identifiertype?._id,identifiernumber: _entity?.identifiernumber,suppliermsiccode: _entity?.suppliermsiccode,suppliertourismtaxregistrationnumber: _entity?.suppliertourismtaxregistrationnumber,supplierbusinessactivitydescription: _entity?.supplierbusinessactivitydescription,supplieremail: _entity?.supplieremail,thefirstsuppliercontactnumber: _entity?.thefirstsuppliercontactnumber,suppliercontactnumber: _entity?.suppliercontactnumber,suppliercountryname: _entity?.suppliercountryname,supplierstatename: _entity?.supplierstatename,suppliercityname: _entity?.suppliercityname,supplierpostalzone: _entity?.supplierpostalzone,supplieradressline0: _entity?.supplieradressline0,supplieradressline1: _entity?.supplieradressline1,supplieraddressline2: _entity?.supplieraddressline2,buyername: _entity?.buyername,buyertin: _entity?.buyertin,buyersstregistrationnumber: _entity?.buyersstregistrationnumber,buyeridentifiertype: _entity?.buyeridentifiertype?._id,buyerbusinessregistrationnumber: _entity?.buyerbusinessregistrationnumber,buyeremail: _entity?.buyeremail,buyercountryname: _entity?.buyercountryname,buyerstatename: _entity?.buyerstatename,buyercityname: _entity?.buyercityname,buyerpostalzone: _entity?.buyerpostalzone,buyeraddressline0: _entity?.buyeraddressline0,buyeraddressline1: _entity?.buyeraddressline1,buyeraddressline2: _entity?.buyeraddressline2,thefirstbuyercontactnumber: _entity?.thefirstbuyercontactnumber,buyercontactnumber: _entity?.buyercontactnumber,invoicecurrency: _entity?.invoicecurrency,currencyexchangerate: _entity?.currencyexchangerate,frequencyofbilling: _entity?.frequencyofbilling,billingperiodstartdate: _entity?.billingperiodstartdate,billingperiodenddate: _entity?.billingperiodenddate,paymentmode: _entity?.paymentmode,supplierbankaccountnumber: _entity?.supplierbankaccountnumber,paymentterms: _entity?.paymentterms,prepaymentamount: _entity?.prepaymentamount,prepaymentdate: _entity?.prepaymentdate,prepaymentreferencenumber: _entity?.prepaymentreferencenumber,shippingrecipientname: _entity?.shippingrecipientname,shippingrecipientcountryname: _entity?.shippingrecipientcountryname,shippingrecipientstatename: _entity?.shippingrecipientstatename,shippingrecipientcityname: _entity?.shippingrecipientcityname,shippingrecipientpostalzone: _entity?.shippingrecipientpostalzone,shippingrecipientaddressline0: _entity?.shippingrecipientaddressline0,shippingrecipientaddressline1: _entity?.shippingrecipientaddressline1,shippingrecipientaddressline2: _entity?.shippingrecipientaddressline2,shippingrecipienttin: _entity?.shippingrecipienttin,shippingrecipientidentifiertype: _entity?.shippingrecipientidentifiertype,shippingrecipientbusinessregistrationnumber: _entity?.shippingrecipientbusinessregistrationnumber,billreferencenumber: _entity?.billreferencenumber,referencenumberofcustomsformno1: _entity?.referencenumberofcustomsformno1,incoterms: _entity?.incoterms,freetradeagreementinformation: _entity?.freetradeagreementinformation,authorisationnumberforcertifiedexporter: _entity?.authorisationnumberforcertifiedexporter,referencenumberofcustomsformno2: _entity?.referencenumberofcustomsformno2,invoicelinenumber: _entity?.invoicelinenumber,invoicelineclassification: _entity?.invoicelineclassification,productname: _entity?.productname,quantity: _entity?.quantity,unitprice: _entity?.unitprice,measurement: _entity?.measurement,subtotal: _entity?.subtotal,countryoforigin: _entity?.countryoforigin,pretotalexcludingtax: _entity?.pretotalexcludingtax,taxtype: _entity?.taxtype,taxrate: _entity?.taxrate,taxamount: _entity?.taxamount,taxdescription: _entity?.taxdescription,taxexemptiondetails: _entity?.taxexemptiondetails,taxexemptionamount: _entity?.taxexemptionamount,discountrate: _entity?.discountrate,discountamount: _entity?.discountamount,discountdescription: _entity?.discountdescription,feeorchargerate: _entity?.feeorchargerate,feeorchargeamount: _entity?.feeorchargeamount,feeorchargedescription: _entity?.feeorchargedescription,detailtaxtype: _entity?.detailtaxtype,detailtotaltaxamountpertaxtype: _entity?.detailtotaltaxamountpertaxtype,detailtotaltaxableamount: _entity?.detailtotaltaxableamount,detailsoftaxexemption: _entity?.detailsoftaxexemption,amountexemptedfromtax: _entity?.amountexemptedfromtax,additionaldiscountamount: _entity?.additionaldiscountamount,additionaldiscountdescription: _entity?.additionaldiscountdescription,additionalfeeamount: _entity?.additionalfeeamount,additionalfeedescription: _entity?.additionalfeedescription,otherfeeorchargeamounts: _entity?.otherfeeorchargeamounts,othrefeeorchargedescription: _entity?.othrefeeorchargedescription,totaldiscountvalue: _entity?.totaldiscountvalue,totalfeeorchargeamount: _entity?.totalfeeorchargeamount,totaltaxamount: _entity?.totaltaxamount,totalexcludingtax: _entity?.totalexcludingtax,totalnetamount: _entity?.totalnetamount,totalincludingtax: _entity?.totalincludingtax,roundingamount: _entity?.roundingamount,totalpayableamount: _entity?.totalpayableamount,invoicenumber: _entity?.invoicenumber,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("invoice").create(_data);
        const eagerResult = await client
            .service("invoice")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                {
                    path : "identifiertype",
                    service : "identifyType",
                    select:["identifytype"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Invoice updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Invoice" });
        }
        setLoading(false);
    };

    useEffect(() => {
                    // on mount identifyType
                    client
                        .service("identifyType")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleIdentifyTypeId } })
                        .then((res) => {
                            setIdentifiertype(res.data.map((e) => { return { name: e['identifytype'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "IdentifyType", type: "error", message: error.message || "Failed get identifyType" });
                        });
                }, []);

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    const identifiertypeOptions = identifiertype.map((elem) => ({ name: elem.name, value: elem.value }));
const buyeridentifiertypeOptions = buyeridentifiertype.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoice-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="noff">Noff:</label>
                <InputText id="noff" className="w-full mb-3 p-inputtext-sm" value={_entity?.noff} onChange={(e) => setValByKey("noff", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["noff"]) ? (
              <p className="m-0" key="error-noff">
                {error["noff"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicetype">Invoice Type:</label>
                <InputText id="invoicetype" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicetype} onChange={(e) => setValByKey("invoicetype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicetype"]) ? (
              <p className="m-0" key="error-invoicetype">
                {error["invoicetype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicedateandtime">Invoice Date and Time:</label>
                <Calendar id="invoicedateandtime"  value={_entity?.invoicedateandtime ? new Date(_entity?.invoicedateandtime) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("invoicedateandtime", new Date(e.target.value))} showIcon showButtonBar  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicedateandtime"]) ? (
              <p className="m-0" key="error-invoicedateandtime">
                {error["invoicedateandtime"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="originaleinvoicereferencenumber">Original eInvoice Reference No:</label>
                <InputText id="originaleinvoicereferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.originaleinvoicereferencenumber} onChange={(e) => setValByKey("originaleinvoicereferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["originaleinvoicereferencenumber"]) ? (
              <p className="m-0" key="error-originaleinvoicereferencenumber">
                {error["originaleinvoicereferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliername">Supplier Name:</label>
                <InputText id="suppliername" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliername} onChange={(e) => setValByKey("suppliername", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliername"]) ? (
              <p className="m-0" key="error-suppliername">
                {error["suppliername"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliertin">Supplier TIN:</label>
                <InputText id="suppliertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertin} onChange={(e) => setValByKey("suppliertin", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliertin"]) ? (
              <p className="m-0" key="error-suppliertin">
                {error["suppliertin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliersstregistrationnumber">Supplier SST Registration No:</label>
                <InputText id="suppliersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersstregistrationnumber} onChange={(e) => setValByKey("suppliersstregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliersstregistrationnumber"]) ? (
              <p className="m-0" key="error-suppliersstregistrationnumber">
                {error["suppliersstregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="identifiertype">Identifier Type:</label>
                <Dropdown id="identifiertype" value={_entity?.identifiertype?._id} optionLabel="name" optionValue="value" options={identifiertypeOptions} onChange={(e) => setValByKey("identifiertype", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["identifiertype"]) ? (
              <p className="m-0" key="error-identifiertype">
                {error["identifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="identifiernumber">Identifier Number:</label>
                <InputText id="identifiernumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.identifiernumber} onChange={(e) => setValByKey("identifiernumber", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["identifiernumber"]) ? (
              <p className="m-0" key="error-identifiernumber">
                {error["identifiernumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliermsiccode">Supplier MSIC Code:</label>
                <InputNumber id="suppliermsiccode" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliermsiccode} onChange={(e) => setValByKey("suppliermsiccode", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliermsiccode"]) ? (
              <p className="m-0" key="error-suppliermsiccode">
                {error["suppliermsiccode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliertourismtaxregistrationnumber">Supplier Tourism Tax Reg No:</label>
                <InputText id="suppliertourismtaxregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertourismtaxregistrationnumber} onChange={(e) => setValByKey("suppliertourismtaxregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliertourismtaxregistrationnumber"]) ? (
              <p className="m-0" key="error-suppliertourismtaxregistrationnumber">
                {error["suppliertourismtaxregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierbusinessactivitydescription">Supplier Business ActivityDesc:</label>
                <InputText id="supplierbusinessactivitydescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbusinessactivitydescription} onChange={(e) => setValByKey("supplierbusinessactivitydescription", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierbusinessactivitydescription"]) ? (
              <p className="m-0" key="error-supplierbusinessactivitydescription">
                {error["supplierbusinessactivitydescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplieremail">Supplier email:</label>
                <InputText id="supplieremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieremail} onChange={(e) => setValByKey("supplieremail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieremail"]) ? (
              <p className="m-0" key="error-supplieremail">
                {error["supplieremail"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="thefirstsuppliercontactnumber">First Supplier Contact Number:</label>
                <InputText id="thefirstsuppliercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.thefirstsuppliercontactnumber} onChange={(e) => setValByKey("thefirstsuppliercontactnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["thefirstsuppliercontactnumber"]) ? (
              <p className="m-0" key="error-thefirstsuppliercontactnumber">
                {error["thefirstsuppliercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliercontactnumber">Supplier Contact Number:</label>
                <InputNumber id="suppliercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliercontactnumber} onChange={(e) => setValByKey("suppliercontactnumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliercontactnumber"]) ? (
              <p className="m-0" key="error-suppliercontactnumber">
                {error["suppliercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliercountryname">Supplier Country Name:</label>
                <InputText id="suppliercountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliercountryname} onChange={(e) => setValByKey("suppliercountryname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliercountryname"]) ? (
              <p className="m-0" key="error-suppliercountryname">
                {error["suppliercountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierstatename">Supplier State Name:</label>
                <InputText id="supplierstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierstatename} onChange={(e) => setValByKey("supplierstatename", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierstatename"]) ? (
              <p className="m-0" key="error-supplierstatename">
                {error["supplierstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliercityname">Supplier City Name:</label>
                <InputText id="suppliercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliercityname} onChange={(e) => setValByKey("suppliercityname", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliercityname"]) ? (
              <p className="m-0" key="error-suppliercityname">
                {error["suppliercityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierpostalzone">Supplier Postal Zone:</label>
                <InputNumber id="supplierpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierpostalzone} onChange={(e) => setValByKey("supplierpostalzone", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierpostalzone"]) ? (
              <p className="m-0" key="error-supplierpostalzone">
                {error["supplierpostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplieradressline0">Supplier Adress Line 0:</label>
                <InputText id="supplieradressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieradressline0} onChange={(e) => setValByKey("supplieradressline0", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieradressline0"]) ? (
              <p className="m-0" key="error-supplieradressline0">
                {error["supplieradressline0"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplieradressline1">Supplier Adress Line 1:</label>
                <InputText id="supplieradressline1" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieradressline1} onChange={(e) => setValByKey("supplieradressline1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieradressline1"]) ? (
              <p className="m-0" key="error-supplieradressline1">
                {error["supplieradressline1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplieraddressline2">Supplier Address Line 2:</label>
                <InputText id="supplieraddressline2" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieraddressline2} onChange={(e) => setValByKey("supplieraddressline2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieraddressline2"]) ? (
              <p className="m-0" key="error-supplieraddressline2">
                {error["supplieraddressline2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyername">Buyer Name:</label>
                <InputText id="buyername" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyername} onChange={(e) => setValByKey("buyername", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyername"]) ? (
              <p className="m-0" key="error-buyername">
                {error["buyername"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyertin">Buyer TIN:</label>
                <InputText id="buyertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyertin} onChange={(e) => setValByKey("buyertin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyertin"]) ? (
              <p className="m-0" key="error-buyertin">
                {error["buyertin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyersstregistrationnumber">Buyer SST Registration Number:</label>
                <InputText id="buyersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersstregistrationnumber} onChange={(e) => setValByKey("buyersstregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyersstregistrationnumber"]) ? (
              <p className="m-0" key="error-buyersstregistrationnumber">
                {error["buyersstregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeridentifiertype">Buyer Identifier Type:</label>
                <Dropdown id="buyeridentifiertype" value={_entity?.buyeridentifiertype?._id} optionLabel="name" optionValue="value" options={buyeridentifiertypeOptions} onChange={(e) => setValByKey("buyeridentifiertype", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeridentifiertype"]) ? (
              <p className="m-0" key="error-buyeridentifiertype">
                {error["buyeridentifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerbusinessregistrationnumber">Buyer Business Registration No:</label>
                <InputText id="buyerbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerbusinessregistrationnumber} onChange={(e) => setValByKey("buyerbusinessregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerbusinessregistrationnumber"]) ? (
              <p className="m-0" key="error-buyerbusinessregistrationnumber">
                {error["buyerbusinessregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeremail">Buyer email:</label>
                <InputText id="buyeremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeremail} onChange={(e) => setValByKey("buyeremail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeremail"]) ? (
              <p className="m-0" key="error-buyeremail">
                {error["buyeremail"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyercountryname">Buyer Country Name:</label>
                <InputText id="buyercountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercountryname} onChange={(e) => setValByKey("buyercountryname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyercountryname"]) ? (
              <p className="m-0" key="error-buyercountryname">
                {error["buyercountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerstatename">Buyer State Name:</label>
                <InputText id="buyerstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerstatename} onChange={(e) => setValByKey("buyerstatename", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerstatename"]) ? (
              <p className="m-0" key="error-buyerstatename">
                {error["buyerstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyercityname">Buyer City Name:</label>
                <InputText id="buyercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercityname} onChange={(e) => setValByKey("buyercityname", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyercityname"]) ? (
              <p className="m-0" key="error-buyercityname">
                {error["buyercityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerpostalzone">Buyerpostalzone:</label>
                <InputNumber id="buyerpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerpostalzone} onChange={(e) => setValByKey("buyerpostalzone", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerpostalzone"]) ? (
              <p className="m-0" key="error-buyerpostalzone">
                {error["buyerpostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeraddressline0">Buyer Address Line 0:</label>
                <InputText id="buyeraddressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline0} onChange={(e) => setValByKey("buyeraddressline0", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeraddressline0"]) ? (
              <p className="m-0" key="error-buyeraddressline0">
                {error["buyeraddressline0"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeraddressline1">Buyer Address Line 1:</label>
                <InputText id="buyeraddressline1" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline1} onChange={(e) => setValByKey("buyeraddressline1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeraddressline1"]) ? (
              <p className="m-0" key="error-buyeraddressline1">
                {error["buyeraddressline1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeraddressline2">Buyer Address Line 2:</label>
                <InputText id="buyeraddressline2" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline2} onChange={(e) => setValByKey("buyeraddressline2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeraddressline2"]) ? (
              <p className="m-0" key="error-buyeraddressline2">
                {error["buyeraddressline2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="thefirstbuyercontactnumber">The First Buyer Contact Number:</label>
                <InputText id="thefirstbuyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.thefirstbuyercontactnumber} onChange={(e) => setValByKey("thefirstbuyercontactnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["thefirstbuyercontactnumber"]) ? (
              <p className="m-0" key="error-thefirstbuyercontactnumber">
                {error["thefirstbuyercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyercontactnumber">Buyer Contact Number:</label>
                <InputNumber id="buyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercontactnumber} onChange={(e) => setValByKey("buyercontactnumber", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyercontactnumber"]) ? (
              <p className="m-0" key="error-buyercontactnumber">
                {error["buyercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicecurrency">Invoice Currency:</label>
                <InputText id="invoicecurrency" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicecurrency} onChange={(e) => setValByKey("invoicecurrency", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicecurrency"]) ? (
              <p className="m-0" key="error-invoicecurrency">
                {error["invoicecurrency"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="currencyexchangerate">Currency Exchange Rate:</label>
                <InputNumber id="currencyexchangerate" className="w-full mb-3 p-inputtext-sm" value={_entity?.currencyexchangerate} onChange={(e) => setValByKey("currencyexchangerate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["currencyexchangerate"]) ? (
              <p className="m-0" key="error-currencyexchangerate">
                {error["currencyexchangerate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="frequencyofbilling">Frequency of Billing:</label>
                <InputText id="frequencyofbilling" className="w-full mb-3 p-inputtext-sm" value={_entity?.frequencyofbilling} onChange={(e) => setValByKey("frequencyofbilling", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["frequencyofbilling"]) ? (
              <p className="m-0" key="error-frequencyofbilling">
                {error["frequencyofbilling"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="billingperiodstartdate">Billing Period Start Date:</label>
                <Calendar id="billingperiodstartdate"  value={_entity?.billingperiodstartdate ? new Date(_entity?.billingperiodstartdate) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("billingperiodstartdate", new Date(e.target.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingperiodstartdate"]) ? (
              <p className="m-0" key="error-billingperiodstartdate">
                {error["billingperiodstartdate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="billingperiodenddate">Billing Period End Date:</label>
                <Calendar id="billingperiodenddate"  value={_entity?.billingperiodenddate ? new Date(_entity?.billingperiodenddate) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("billingperiodenddate", new Date(e.target.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingperiodenddate"]) ? (
              <p className="m-0" key="error-billingperiodenddate">
                {error["billingperiodenddate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentmode">Payment Mode:</label>
                <InputText id="paymentmode" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentmode} onChange={(e) => setValByKey("paymentmode", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentmode"]) ? (
              <p className="m-0" key="error-paymentmode">
                {error["paymentmode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierbankaccountnumber">Supplier Bank Account Number:</label>
                <InputNumber id="supplierbankaccountnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbankaccountnumber} onChange={(e) => setValByKey("supplierbankaccountnumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierbankaccountnumber"]) ? (
              <p className="m-0" key="error-supplierbankaccountnumber">
                {error["supplierbankaccountnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentterms">Payment Terms:</label>
                <InputText id="paymentterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentterms} onChange={(e) => setValByKey("paymentterms", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentterms"]) ? (
              <p className="m-0" key="error-paymentterms">
                {error["paymentterms"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="prepaymentamount">Pre Payment Amount:</label>
                <InputNumber id="prepaymentamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentamount} onChange={(e) => setValByKey("prepaymentamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["prepaymentamount"]) ? (
              <p className="m-0" key="error-prepaymentamount">
                {error["prepaymentamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="prepaymentdate">Pre Payment Date:</label>
                <Calendar id="prepaymentdate"  value={_entity?.prepaymentdate ? new Date(_entity?.prepaymentdate) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("prepaymentdate", new Date(e.target.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["prepaymentdate"]) ? (
              <p className="m-0" key="error-prepaymentdate">
                {error["prepaymentdate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="prepaymentreferencenumber">Pre Payment Reference Number:</label>
                <InputText id="prepaymentreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentreferencenumber} onChange={(e) => setValByKey("prepaymentreferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["prepaymentreferencenumber"]) ? (
              <p className="m-0" key="error-prepaymentreferencenumber">
                {error["prepaymentreferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientname">Shipping Recipient Name:</label>
                <InputText id="shippingrecipientname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientname} onChange={(e) => setValByKey("shippingrecipientname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientname"]) ? (
              <p className="m-0" key="error-shippingrecipientname">
                {error["shippingrecipientname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientcountryname">Shipping Recipient CountryName:</label>
                <InputText id="shippingrecipientcountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcountryname} onChange={(e) => setValByKey("shippingrecipientcountryname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientcountryname"]) ? (
              <p className="m-0" key="error-shippingrecipientcountryname">
                {error["shippingrecipientcountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientstatename">Shipping Recipient State Name:</label>
                <InputText id="shippingrecipientstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientstatename} onChange={(e) => setValByKey("shippingrecipientstatename", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientstatename"]) ? (
              <p className="m-0" key="error-shippingrecipientstatename">
                {error["shippingrecipientstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientcityname">Shipping Recipient City Name:</label>
                <InputText id="shippingrecipientcityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcityname} onChange={(e) => setValByKey("shippingrecipientcityname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientcityname"]) ? (
              <p className="m-0" key="error-shippingrecipientcityname">
                {error["shippingrecipientcityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientpostalzone">Shipping Recipient Postal Zone:</label>
                <InputNumber id="shippingrecipientpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientpostalzone} onChange={(e) => setValByKey("shippingrecipientpostalzone", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientpostalzone"]) ? (
              <p className="m-0" key="error-shippingrecipientpostalzone">
                {error["shippingrecipientpostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientaddressline0">Recipient Address Line 0:</label>
                <InputText id="shippingrecipientaddressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientaddressline0} onChange={(e) => setValByKey("shippingrecipientaddressline0", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientaddressline0"]) ? (
              <p className="m-0" key="error-shippingrecipientaddressline0">
                {error["shippingrecipientaddressline0"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientaddressline1">Recipient Address Line 1:</label>
                <InputText id="shippingrecipientaddressline1" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientaddressline1} onChange={(e) => setValByKey("shippingrecipientaddressline1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientaddressline1"]) ? (
              <p className="m-0" key="error-shippingrecipientaddressline1">
                {error["shippingrecipientaddressline1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientaddressline2">Recipient Address Line 2:</label>
                <InputText id="shippingrecipientaddressline2" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientaddressline2} onChange={(e) => setValByKey("shippingrecipientaddressline2", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientaddressline2"]) ? (
              <p className="m-0" key="error-shippingrecipientaddressline2">
                {error["shippingrecipientaddressline2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipienttin">Shipping Recipient TIN:</label>
                <InputText id="shippingrecipienttin" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipienttin} onChange={(e) => setValByKey("shippingrecipienttin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipienttin"]) ? (
              <p className="m-0" key="error-shippingrecipienttin">
                {error["shippingrecipienttin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientidentifiertype">Shippingrecipientidentifiertype:</label>
                <InputText id="shippingrecipientidentifiertype" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientidentifiertype} onChange={(e) => setValByKey("shippingrecipientidentifiertype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientidentifiertype"]) ? (
              <p className="m-0" key="error-shippingrecipientidentifiertype">
                {error["shippingrecipientidentifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientbusinessregistrationnumber">Shipping Recipient Biz Reg No:</label>
                <InputText id="shippingrecipientbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientbusinessregistrationnumber} onChange={(e) => setValByKey("shippingrecipientbusinessregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientbusinessregistrationnumber"]) ? (
              <p className="m-0" key="error-shippingrecipientbusinessregistrationnumber">
                {error["shippingrecipientbusinessregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="billreferencenumber">Bill Reference Number:</label>
                <InputText id="billreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.billreferencenumber} onChange={(e) => setValByKey("billreferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billreferencenumber"]) ? (
              <p className="m-0" key="error-billreferencenumber">
                {error["billreferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="referencenumberofcustomsformno1">Ref No of Custom Form No1:</label>
                <InputText id="referencenumberofcustomsformno1" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno1} onChange={(e) => setValByKey("referencenumberofcustomsformno1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["referencenumberofcustomsformno1"]) ? (
              <p className="m-0" key="error-referencenumberofcustomsformno1">
                {error["referencenumberofcustomsformno1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="incoterms">Incoterms:</label>
                <InputText id="incoterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.incoterms} onChange={(e) => setValByKey("incoterms", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["incoterms"]) ? (
              <p className="m-0" key="error-incoterms">
                {error["incoterms"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="freetradeagreementinformation">Free Trade Agreement Info:</label>
                <InputText id="freetradeagreementinformation" className="w-full mb-3 p-inputtext-sm" value={_entity?.freetradeagreementinformation} onChange={(e) => setValByKey("freetradeagreementinformation", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["freetradeagreementinformation"]) ? (
              <p className="m-0" key="error-freetradeagreementinformation">
                {error["freetradeagreementinformation"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="authorisationnumberforcertifiedexporter">Authorisation No of Exporter:</label>
                <InputText id="authorisationnumberforcertifiedexporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.authorisationnumberforcertifiedexporter} onChange={(e) => setValByKey("authorisationnumberforcertifiedexporter", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["authorisationnumberforcertifiedexporter"]) ? (
              <p className="m-0" key="error-authorisationnumberforcertifiedexporter">
                {error["authorisationnumberforcertifiedexporter"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="referencenumberofcustomsformno2">Ref No of Custom Form No2:</label>
                <InputText id="referencenumberofcustomsformno2" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno2} onChange={(e) => setValByKey("referencenumberofcustomsformno2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["referencenumberofcustomsformno2"]) ? (
              <p className="m-0" key="error-referencenumberofcustomsformno2">
                {error["referencenumberofcustomsformno2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicelinenumber">Invoicelinenumber:</label>
                <InputText id="invoicelinenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicelinenumber} onChange={(e) => setValByKey("invoicelinenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicelinenumber"]) ? (
              <p className="m-0" key="error-invoicelinenumber">
                {error["invoicelinenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicelineclassification">Invoice Line Classification:</label>
                <InputText id="invoicelineclassification" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicelineclassification} onChange={(e) => setValByKey("invoicelineclassification", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicelineclassification"]) ? (
              <p className="m-0" key="error-invoicelineclassification">
                {error["invoicelineclassification"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="productname">Product Name:</label>
                <InputText id="productname" className="w-full mb-3 p-inputtext-sm" value={_entity?.productname} onChange={(e) => setValByKey("productname", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["productname"]) ? (
              <p className="m-0" key="error-productname">
                {error["productname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="quantity">Quantity:</label>
                <InputNumber id="quantity" className="w-full mb-3 p-inputtext-sm" value={_entity?.quantity} onChange={(e) => setValByKey("quantity", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["quantity"]) ? (
              <p className="m-0" key="error-quantity">
                {error["quantity"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="unitprice">Unit Price:</label>
                <InputNumber id="unitprice" className="w-full mb-3 p-inputtext-sm" value={_entity?.unitprice} onChange={(e) => setValByKey("unitprice", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["unitprice"]) ? (
              <p className="m-0" key="error-unitprice">
                {error["unitprice"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="measurement">Measurement:</label>
                <InputText id="measurement" className="w-full mb-3 p-inputtext-sm" value={_entity?.measurement} onChange={(e) => setValByKey("measurement", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["measurement"]) ? (
              <p className="m-0" key="error-measurement">
                {error["measurement"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="subtotal">Subtotal:</label>
                <InputNumber id="subtotal" className="w-full mb-3 p-inputtext-sm" value={_entity?.subtotal} onChange={(e) => setValByKey("subtotal", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["subtotal"]) ? (
              <p className="m-0" key="error-subtotal">
                {error["subtotal"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="countryoforigin">Country of Origin:</label>
                <InputText id="countryoforigin" className="w-full mb-3 p-inputtext-sm" value={_entity?.countryoforigin} onChange={(e) => setValByKey("countryoforigin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["countryoforigin"]) ? (
              <p className="m-0" key="error-countryoforigin">
                {error["countryoforigin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="pretotalexcludingtax">Pretotalexcludingtax:</label>
                <InputNumber id="pretotalexcludingtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.pretotalexcludingtax} onChange={(e) => setValByKey("pretotalexcludingtax", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["pretotalexcludingtax"]) ? (
              <p className="m-0" key="error-pretotalexcludingtax">
                {error["pretotalexcludingtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxtype">Tax Type:</label>
                <InputText id="taxtype" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxtype} onChange={(e) => setValByKey("taxtype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxtype"]) ? (
              <p className="m-0" key="error-taxtype">
                {error["taxtype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxrate">Tax Rate:</label>
                <InputNumber id="taxrate" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxrate} onChange={(e) => setValByKey("taxrate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxrate"]) ? (
              <p className="m-0" key="error-taxrate">
                {error["taxrate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxamount">Tax Amount:</label>
                <InputNumber id="taxamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxamount} onChange={(e) => setValByKey("taxamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxamount"]) ? (
              <p className="m-0" key="error-taxamount">
                {error["taxamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxdescription">Tax Description:</label>
                <InputText id="taxdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxdescription} onChange={(e) => setValByKey("taxdescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxdescription"]) ? (
              <p className="m-0" key="error-taxdescription">
                {error["taxdescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxexemptiondetails">Tax Exemption Details:</label>
                <InputText id="taxexemptiondetails" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxexemptiondetails} onChange={(e) => setValByKey("taxexemptiondetails", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxexemptiondetails"]) ? (
              <p className="m-0" key="error-taxexemptiondetails">
                {error["taxexemptiondetails"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxexemptionamount">Tax Exemption Amount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxexemptionamount"]) ? (
              <p className="m-0" key="error-taxexemptionamount">
                {error["taxexemptionamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountrate">Discount Rate:</label>
                <InputNumber id="discountrate" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountrate} onChange={(e) => setValByKey("discountrate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountrate"]) ? (
              <p className="m-0" key="error-discountrate">
                {error["discountrate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountamount">Discount Amount:</label>
                <InputNumber id="discountamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountamount} onChange={(e) => setValByKey("discountamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountamount"]) ? (
              <p className="m-0" key="error-discountamount">
                {error["discountamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountdescription">Discount Description:</label>
                <InputText id="discountdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountdescription} onChange={(e) => setValByKey("discountdescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountdescription"]) ? (
              <p className="m-0" key="error-discountdescription">
                {error["discountdescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="feeorchargerate">Fee or Charge Rate:</label>
                <InputNumber id="feeorchargerate" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeorchargerate} onChange={(e) => setValByKey("feeorchargerate", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["feeorchargerate"]) ? (
              <p className="m-0" key="error-feeorchargerate">
                {error["feeorchargerate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="feeorchargeamount">Fee or Charge Amount:</label>
                <InputNumber id="feeorchargeamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeorchargeamount} onChange={(e) => setValByKey("feeorchargeamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["feeorchargeamount"]) ? (
              <p className="m-0" key="error-feeorchargeamount">
                {error["feeorchargeamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="feeorchargedescription">Fee or Charge Description:</label>
                <InputText id="feeorchargedescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeorchargedescription} onChange={(e) => setValByKey("feeorchargedescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["feeorchargedescription"]) ? (
              <p className="m-0" key="error-feeorchargedescription">
                {error["feeorchargedescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="detailtaxtype">Detail Tax Type:</label>
                <InputText id="detailtaxtype" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailtaxtype} onChange={(e) => setValByKey("detailtaxtype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["detailtaxtype"]) ? (
              <p className="m-0" key="error-detailtaxtype">
                {error["detailtaxtype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="detailtotaltaxamountpertaxtype">Total Tax Amount per Tax Type :</label>
                <InputNumber id="detailtotaltaxamountpertaxtype" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailtotaltaxamountpertaxtype} onChange={(e) => setValByKey("detailtotaltaxamountpertaxtype", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["detailtotaltaxamountpertaxtype"]) ? (
              <p className="m-0" key="error-detailtotaltaxamountpertaxtype">
                {error["detailtotaltaxamountpertaxtype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="detailtotaltaxableamount">Detail Total Taxable Amount:</label>
                <InputNumber id="detailtotaltaxableamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailtotaltaxableamount} onChange={(e) => setValByKey("detailtotaltaxableamount", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["detailtotaltaxableamount"]) ? (
              <p className="m-0" key="error-detailtotaltaxableamount">
                {error["detailtotaltaxableamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="detailsoftaxexemption">Details of Tax Exemption:</label>
                <InputText id="detailsoftaxexemption" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsoftaxexemption} onChange={(e) => setValByKey("detailsoftaxexemption", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["detailsoftaxexemption"]) ? (
              <p className="m-0" key="error-detailsoftaxexemption">
                {error["detailsoftaxexemption"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="amountexemptedfromtax">Amount Eexempted from Tax:</label>
                <InputNumber id="amountexemptedfromtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.amountexemptedfromtax} onChange={(e) => setValByKey("amountexemptedfromtax", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["amountexemptedfromtax"]) ? (
              <p className="m-0" key="error-amountexemptedfromtax">
                {error["amountexemptedfromtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionaldiscountamount">Additional Discount Amount:</label>
                <InputNumber id="additionaldiscountamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionaldiscountamount} onChange={(e) => setValByKey("additionaldiscountamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionaldiscountamount"]) ? (
              <p className="m-0" key="error-additionaldiscountamount">
                {error["additionaldiscountamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionaldiscountdescription">Additional Discount Desc:</label>
                <InputText id="additionaldiscountdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionaldiscountdescription} onChange={(e) => setValByKey("additionaldiscountdescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionaldiscountdescription"]) ? (
              <p className="m-0" key="error-additionaldiscountdescription">
                {error["additionaldiscountdescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionalfeeamount">Additionalfeeamount:</label>
                <InputNumber id="additionalfeeamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionalfeeamount} onChange={(e) => setValByKey("additionalfeeamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionalfeeamount"]) ? (
              <p className="m-0" key="error-additionalfeeamount">
                {error["additionalfeeamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionalfeedescription">Additional Fee Description:</label>
                <InputText id="additionalfeedescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionalfeedescription} onChange={(e) => setValByKey("additionalfeedescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionalfeedescription"]) ? (
              <p className="m-0" key="error-additionalfeedescription">
                {error["additionalfeedescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="otherfeeorchargeamounts">Otherfeeorchargeamounts:</label>
                <InputNumber id="otherfeeorchargeamounts" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherfeeorchargeamounts} onChange={(e) => setValByKey("otherfeeorchargeamounts", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["otherfeeorchargeamounts"]) ? (
              <p className="m-0" key="error-otherfeeorchargeamounts">
                {error["otherfeeorchargeamounts"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="othrefeeorchargedescription">Othre Fee or Charge Desc:</label>
                <InputText id="othrefeeorchargedescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.othrefeeorchargedescription} onChange={(e) => setValByKey("othrefeeorchargedescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["othrefeeorchargedescription"]) ? (
              <p className="m-0" key="error-othrefeeorchargedescription">
                {error["othrefeeorchargedescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totaldiscountvalue">Total Discount Value:</label>
                <InputNumber id="totaldiscountvalue" className="w-full mb-3 p-inputtext-sm" value={_entity?.totaldiscountvalue} onChange={(e) => setValByKey("totaldiscountvalue", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totaldiscountvalue"]) ? (
              <p className="m-0" key="error-totaldiscountvalue">
                {error["totaldiscountvalue"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalfeeorchargeamount">Total Fee or Charge Amount:</label>
                <InputNumber id="totalfeeorchargeamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalfeeorchargeamount} onChange={(e) => setValByKey("totalfeeorchargeamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalfeeorchargeamount"]) ? (
              <p className="m-0" key="error-totalfeeorchargeamount">
                {error["totalfeeorchargeamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totaltaxamount">Total Tax Amount:</label>
                <InputNumber id="totaltaxamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totaltaxamount} onChange={(e) => setValByKey("totaltaxamount", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totaltaxamount"]) ? (
              <p className="m-0" key="error-totaltaxamount">
                {error["totaltaxamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalexcludingtax">Total Excluding Tax:</label>
                <InputNumber id="totalexcludingtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalexcludingtax} onChange={(e) => setValByKey("totalexcludingtax", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalexcludingtax"]) ? (
              <p className="m-0" key="error-totalexcludingtax">
                {error["totalexcludingtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalnetamount">Total Net Amount:</label>
                <InputNumber id="totalnetamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalnetamount} onChange={(e) => setValByKey("totalnetamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalnetamount"]) ? (
              <p className="m-0" key="error-totalnetamount">
                {error["totalnetamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalincludingtax">Total Including Tax:</label>
                <InputNumber id="totalincludingtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalincludingtax} onChange={(e) => setValByKey("totalincludingtax", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalincludingtax"]) ? (
              <p className="m-0" key="error-totalincludingtax">
                {error["totalincludingtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="roundingamount">Rounding Amount:</label>
                <InputNumber id="roundingamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.roundingamount} onChange={(e) => setValByKey("roundingamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["roundingamount"]) ? (
              <p className="m-0" key="error-roundingamount">
                {error["roundingamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalpayableamount">Total Payable Amount:</label>
                <InputNumber id="totalpayableamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalpayableamount} onChange={(e) => setValByKey("totalpayableamount", e.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalpayableamount"]) ? (
              <p className="m-0" key="error-totalpayableamount">
                {error["totalpayableamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicenumber">Invoice Number:</label>
                <InputText id="invoicenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicenumber} onChange={(e) => setValByKey("invoicenumber", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicenumber"]) ? (
              <p className="m-0" key="error-invoicenumber">
                {error["invoicenumber"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvoiceCreateDialogComponent);
