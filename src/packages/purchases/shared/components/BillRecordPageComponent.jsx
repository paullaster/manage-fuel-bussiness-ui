import PurcahsesItemsTopBar from "./PurcahsesItemsTopBar";
import SingleBillActionsList from "./SingleBillActionsList";
import AcountingActions from "./AcountingActions";
import ReportComponent from "./Report/ReportComponent";
import { useEffect, useRef } from "react";
import { usePurchasesDispatcher } from "../../Context";
import { fetchFuelPurchases } from "../../actions";
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';

const BillRecordPageComponent = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const purchasesActions = usePurchasesDispatcher();
  const { uuid } = useParams();

  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content'); 
    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('downloaded-file.pdf'); 
      // Specify the name of the downloaded PDF file
    });
  };

  useEffect(() => {
    fetchFuelPurchases({ uuid: uuid })
      .then((res) => {
        purchasesActions({ type: 'SET_CURRENTSELECTED_BILL', payload: res });
      })
      .catch((error) => {
        console.log(error);
      });

  }, [uuid]);

  return (
    <section className="singleBillPage">
      <PurcahsesItemsTopBar caption={'Bill'} listOfActions={SingleBillActionsList} />
      <button onClick={handleDownloadPDF}>download pdf</button>
      <button onClick={handlePrint}>print</button>
      <div className="actionsAndReport">
        <AcountingActions />
        <ReportComponent id="pdf-content" ref={componentRef}/>
      </div>
    </section>
  )
}

export default BillRecordPageComponent

