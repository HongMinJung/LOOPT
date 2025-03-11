import React from 'react';

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-medium">이용약관</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-4 overflow-y-auto flex-1">
                    <h4 className="font-bold mb-3">제 1 장 총칙</h4>

                    <h5 className="font-medium mt-4 mb-2">제 1 조 (목적)</h5>
                    <p className="text-sm mb-3">
                        이 약관은 LOOPT(이하 "회사"라 함)가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>

                    {/* 약관 내용 중략 */}
                    <p className="text-sm mt-6 text-gray-500">
                        이용약관의 나머지 내용은 생략되었습니다. 전체 이용약관은 회사 웹사이트에서 확인하실 수 있습니다.
                    </p>
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={onClose}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;