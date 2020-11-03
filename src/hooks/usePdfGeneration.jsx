import { generatePdf } from '../utils/pdf'
// import pdfTemplate from '../asset/certificate.pdf'

const pdfLink = 'https://media.interieur.gouv.fr/deplacement-covid-19/certificate.d1673940.pdf'

const usePdfGeneration = () => {
  const getPdfUrl = async (formValues) => {
    const pdfBlob = await generatePdf(formValues, formValues.reason, pdfLink)

    return pdfBlob
  }

  const downloadPdf = (blob, fileName) => {
    const link = document.createElement('a');
    // create a blobURI pointing to our Blob
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    link.remove();
    // in case the Blob uses a lot of memory
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  }

  return { getPdfUrl, downloadPdf }
}

export default usePdfGeneration
