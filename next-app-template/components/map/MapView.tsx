'use client';

import { Paper } from '@mantine/core';

export function MapView() {
  return (
    <Paper
      style={{
        width: '100%',
        height: '100%',
        minHeight: '500px',
        background: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 격자 배경 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(#dee2e6 1px, transparent 1px),
            linear-gradient(90deg, #dee2e6 1px, transparent 1px),
            linear-gradient(#e9ecef 0.5px, transparent 0.5px),
            linear-gradient(90deg, #e9ecef 0.5px, transparent 0.5px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
          opacity: 0.8
        }}
      />

      {/* 도로 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '30px',
          background: '#ced4da',
          transform: 'translateY(-50%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          bottom: 0,
          width: '30px',
          background: '#ced4da',
          transform: 'translateX(-50%)'
        }}
      />

      {/* 중앙 마커 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '20px',
          height: '20px',
          background: '#228be6',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 4px rgba(34, 139, 230, 0.3)',
          zIndex: 1
        }}
      />

      {/* 줌 컨트롤 */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'white',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}
      >
        <button
          style={{
            width: '30px',
            height: '30px',
            border: 'none',
            borderBottom: '1px solid #dee2e6',
            background: 'white',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          +
        </button>
        <button
          style={{
            width: '30px',
            height: '30px',
            border: 'none',
            background: 'white',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          -
        </button>
      </div>
    </Paper>
  );
}