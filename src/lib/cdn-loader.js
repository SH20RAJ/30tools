// CDN Library Loader Utility
// Dynamically loads heavy libraries from CDN to reduce bundle size

const CDN_URLS = {
    'pdf-lib': 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js',
    'jspdf': 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
    'html2canvas': 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js',
    'jszip': 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
    'wavesurfer': 'https://cdn.jsdelivr.net/npm/wavesurfer.js@7.9.5/dist/wavesurfer.min.js',
    'lamejs': 'https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js',
    'file-saver': 'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js'
};

const loadedLibraries = new Set();

export const loadCDNLibrary = (libraryName) => {
    return new Promise((resolve, reject) => {
        // Check if already loaded
        if (loadedLibraries.has(libraryName)) {
            resolve(getLibraryFromWindow(libraryName));
            return;
        }

        const url = CDN_URLS[libraryName];
        if (!url) {
            reject(new Error(`Library ${libraryName} not found in CDN URLs`));
            return;
        }

        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        script.onload = () => {
            loadedLibraries.add(libraryName);
            resolve(getLibraryFromWindow(libraryName));
        };

        script.onerror = () => {
            reject(new Error(`Failed to load ${libraryName} from CDN`));
        };

        document.head.appendChild(script);
    });
};

const getLibraryFromWindow = (libraryName) => {
    switch (libraryName) {
        case 'pdf-lib':
            return window.PDFLib;
        case 'jspdf':
            return window.jsPDF;
        case 'html2canvas':
            return window.html2canvas;
        case 'jszip':
            return window.JSZip;
        case 'wavesurfer':
            return window.WaveSurfer;
        case 'lamejs':
            return window.lamejs;
        case 'file-saver':
            return window.saveAs;
        default:
            return null;
    }
};

// Specific loader functions for common libraries
export const loadPDFLib = () => loadCDNLibrary('pdf-lib');
export const loadJSPDF = () => loadCDNLibrary('jspdf');
export const loadHTML2Canvas = () => loadCDNLibrary('html2canvas');
export const loadJSZip = () => loadCDNLibrary('jszip');
export const loadWaveSurfer = () => loadCDNLibrary('wavesurfer');
export const loadLameJS = () => loadCDNLibrary('lamejs');
export const loadFileSaver = () => loadCDNLibrary('file-saver');