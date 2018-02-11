import React from 'react';

export default () => (
  <div>
    <nav>
      <p>Nav</p>
    </nav>
    <main>
      <p>Main</p>
    </main>
    <style jsx global>{`
      html, body, main {
        height: 100%;
        width: 100%;
        margin: 0px;
      }

      main {
        background-color: blue;
        height: 500px;
      }

      nav {
        background-color: green;
        margin: 0px
      }

      nav {
        width: 300px;
        height: 100%;
        position: absolute;
        -webkit-transform: translate(-300px, 0);
        transform: translate(-300px, 0);
        transition: transform 0.3s ease;
      }

      nav.open {
        transform: translate(0, 0);
      }

      @media screen and (min-width: 600px) {
        nav {
          position: relative;
          transform: translate(0, 0);
        }
        body {
          display: flex;
          flex-flow: row nowrap;
        }
        main {
          width: auto;
          flex-grow: 1;
        }
      }
    `}
    </style>
  </div>
)
