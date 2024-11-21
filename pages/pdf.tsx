import { useEffect } from 'react';

export default function PDFRedirect() {
  useEffect(() => {
    // Redirect to the S3 URL
    window.location.href = 'https://new-cdft-bucket.s3.us-west-1.amazonaws.com/weede+offer+(5).pdf';
  }, []);

  return <p>Redirecting to the PDF...</p>;
}