import  { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  const previousPage = () => {
    changePage(-1);
  }

  const nextPage = () => {
    changePage(1);
  }



  return (
    <div
    className='w-full  bg-white min-h-screen justify-center items-center flex flex-col gap-4 '
    >
      <Document
      loading='جاري التحميل'
      className=' border min-w-[20rem]  justify-center items-center border-gray-300 h-[32rem]  overflow-hidden'
      file="/test-2.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
        className='w-full overflow-hidden '
        pageNumber={pageNumber}
        />
      </Document>
      <p>
        عدد الصفحات {pageNumber || (numPages ? 1 : '--')} من {numPages || '--'}
      </p>
      <div className="flex w-72 justify-between items-center text-xs">
      <button
        className='bg-blue-500 text-white px-2 py-2 rounded-md'
        type="button"
        disabled={pageNumber <= 1}
        onClick={previousPage}
        >
        الرجوع السابقة
      </button>

      <button
      className='bg-blue-500 text-white px-2 py-2 rounded-md'
      type="button"
      disabled={pageNumber >= numPages}
      onClick={nextPage}
      >
        الذهاب التالية
      </button>
        </div>
    </div>
  );
}

export default App;
