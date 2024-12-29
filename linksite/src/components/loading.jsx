import React from 'react';

function Loading() {
  return (
    <div className="loading">
      {/* Your loading animation or message */}
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .spinner {
          margin: 100px auto 0;
          width: 70px;
          text-align: center;
        }

        .spinner > div {
          width: 18px;
          height: 18px;
          background-color: #ef6603;
          border-radius: 100%;
          display: inline-block;
          margin: 0 3px;
          -webkit-animation: bounce 1.4s infinite ease-in-out both;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .spinner .bounce1 {
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
        }

        .spinner .bounce2 {
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
        }

        @-webkit-keyframes bounce {
          0%, 80%, 100% { -webkit-transform: scale(0) }
          40% { -webkit-transform: scale(1.0) }
        }

        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
            -webkit-transform: scale(0);
          }
          40% { 
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;
