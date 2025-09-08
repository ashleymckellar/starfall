import ReactModal from 'react-modal';
import { useEffect } from 'react';

const FormModal = (props) => {
    const { show, handleClose } = props;
    
    useEffect(() => {
        if (show) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [show]);
    
    return (
        <ReactModal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel="Form Modal"
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        >
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-black/50">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                    aria-label="Close modal"
                >
                    ×
                </button>
                
                {/* Success icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg 
                            className="w-8 h-8 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                            />
                        </svg>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Request Sent Successfully
                </h2>
                
                <p className="text-lg text-center mb-8 text-gray-300 leading-relaxed">
                    I'll get back to you as soon as possible. Thanks for reaching out!
                </p>
                
                <div className="flex justify-center">
                    <button
                        className="relative px-8 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        onClick={handleClose}
                    >
                        <span className="relative z-10">OK</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default FormModal;