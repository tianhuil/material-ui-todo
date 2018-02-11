import React from 'react';

export default () => (
  <div>
    <div className="container">
      <div className="box red"></div>
      <div className="box green"></div>
      <div className="box blue"></div>
    </div>
    <style jsx global>{`
      .container {
        display: flex;
        flex-wrap: wrap;
      }

      @media screen and (min-width: 700px) {
        .container {
          width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .box {
        width: 100%;
        height: 120px;
      }
      .red {
        background-color: red
      }
      .green {
        background-color: green
      }
      .blue {
        background-color: blue
      }

      @media screen and (min-width: 450px) {
        .red {
          width: 25%;
        }
        .green {
          width: 75%
        }
      }

      @media screen and (min-width: 550px) {
        .green {
          width: 50%
        }
        .blue {
          width: 25%
        }
      }
    `}
    </style>
  </div>
)
