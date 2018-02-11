import React from 'react';

export default () => (
  <div>
    <div className="container">
      <div className="box red"></div>
      <div className="container" id="container2">
        <div className="box green"></div>
        <div className="box blue"></div>
      </div>
      <div className="box yellow"></div>
    </div>
    <style jsx global>{`
      .container {
        width: 100%
        display: flex;
        flex-wrap: wrap;
      }

      .box {
        width: 100%;
        min-height: 100px;
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
      .yellow {
        background-color: yellow
      }

      @media screen and (min-width: 500px) {
        .red {
          width: 50%;
        }
        #container2 {
          width: 50%
        }
      }

      @media screen and (min-width: 700px) {
        .red {
          width: 25%;
          order: 1;
        }
        #container {
          width: 50%;
        }
        .yellow {
          width: 25%;
          order: -1;
        }
      }
    `}
    </style>
  </div>
)
