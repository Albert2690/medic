import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';

const DownloadReportButton = ({ reportData }) => {
  return (
    <PDFDownloadLink className='text-md font-bold'
      document={<ReportPDF reportData={reportData} />}
      fileName={`${reportData.username}-test-report.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generating document...' : 'Download Report'
      }
    </PDFDownloadLink>
  );
};

export default DownloadReportButton;
