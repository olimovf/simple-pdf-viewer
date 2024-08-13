import { useState } from "react";
import "./App.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url
).toString();

const [MAX_SCALE, MIN_SCALE] = [2.4, 0.8];

const App = () => {
	const [numPages, setNumPages] = useState(0);
	const [scale, setScale] = useState(1.0);
	const [file, setFile] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const zoomIn = () => {
		setScale(Math.min(scale + 0.2, MAX_SCALE));
	};

	const zoomOut = () => {
		setScale(Math.max(scale - 0.2, MIN_SCALE));
	};

	const reset = () => {
		setScale(1.0);
	};

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	return (
		<div className="App">
			<div className="controls">
				<button onClick={zoomOut} disabled={scale === MIN_SCALE}>
					Zoom Out
				</button>
				<button onClick={zoomIn} disabled={scale === MAX_SCALE}>
					Zoom In
				</button>
				<button onClick={reset} disabled={scale === 1.0}>
					Reset
				</button>
				<input
					type="file"
					onChange={handleFileChange}
					accept="application/pdf"
				/>
			</div>

			<div className="pdf-doc-wrapper">
				<Document
					file={file || "sample doc.pdf"}
					onLoadSuccess={onDocumentLoadSuccess}
					className={"pdf-doc"}
				>
					<div className="pdf-pages-wrapper">
						{numPages &&
							Array.from({ length: numPages }, (_, index) => index + 1).map(
								(pageNumber) => (
									<div className="pdf-page-wrapper">
										<Page
											key={`page_${pageNumber}`}
											pageNumber={pageNumber}
											className={"pdf-page"}
											scale={scale}
										/>
									</div>
								)
							)}
					</div>
				</Document>
			</div>
		</div>
	);
};

export default App;
