import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
//
import './home.styles.scss';

const HomePage: React.FC = () => {
  const TITLE: string = 'Home';
  const WSOCKET_URL = "ws://localhost:9000/echo";
  const WSOCKET_TIMER = 8000;
  const WSOCKET = useRef(null);

  const btnMessage = useRef(null);



  useEffect(() => {
    console.log('useEffect')

    // setInterval(() => {
    //   console.log('Interval');


    //   if (WSOCKET.current)
    //     if (WSOCKET.current.readyState !== WebSocket.OPEN)
    //       ws.connect();

    //   ws.connect();
    // }, WSOCKET_TIMER);
  }, []);

  const ws = {
    connect: () => {
      console.log('ws connect');

      if (WSOCKET.current)
        if (WSOCKET.current.readyState === WebSocket.OPEN)
          return true;

      WSOCKET.current = new WebSocket(WSOCKET_URL)

      WSOCKET.current.onopen = ws._onOpen;
      WSOCKET.current.onclose = ws._onClose;
      WSOCKET.current.onerror = ws._onError;
      WSOCKET.current.onmessage = ws._onMessage;
      return true;
    },
    close: () => {
      if (!WSOCKET.current || WSOCKET.current.readyState !== WebSocket.OPEN)
        console.log('ws not connected"');

      WSOCKET.current.close(1000, "Closing from client");
    },
    send: (dt: any) => {8
      WSOCKET.current.send(dt);
    },
    _onOpen: (evt: any) => {
      console.log('WS opened...');
    },
    _onClose: (evt: any) => { console.log('WS closed...'); },
    _onError: (evt: any) => { console.log('WS Error:', evt.data); },
    _onMessage: (evt: any) => { console.log('WS Message:', evt.data); },
  };

  const wsConnect = () => {
    //     //console.log('handleConnectSocket');
    //     if (socket.current)
    //     if (socket.current.readyState === WebSocket.OPEN)
    //       return true;

    //   //console.log('handleConnectSocket2');
    //   socket.current = new WebSocket(WSOCKET_URL)

    //   socket.current.onopen = function () {
    //     console.log('Connection opened');
    //   };

    //   socket.current.onclose = function (event: any) {
    //     console.log('Connection closed. ');
    //     console.log(event);
    //   };

    //   socket.current.onerror = function (event: any) {
    //     console.log('Error: ');
    //     console.log(event);
    //   }

    // socket.current.onmessage = function (event: any) {
    //   let message_received = JSON.parse(event.data);
    //     // console.log('Message: ');
    //     // console.log(message_received);
    //     // console.log(message_received.message);

    //   isConnID(message_received);
    //   isNotify(message_received);
    // };

      //return true;
  };

  const handleSendMessage = () => {
    ws.send("Hello world!");
  }

  const handleWSConnect = () => {
    ws.connect();
  }
  const handleWSClose = () => {
    ws.close();
  }

  // let navigate = useNavigate();

  // setTimeout(() => {
  //   navigate(`/auth`);
  // }, 1);

  //let ws = new WebSocket("{{.}}");


  return (
    <>
      <div className='home-page'>
        <div></div>
        <div className='content'>

          <div className="card">
            <p>Click "Open" to create a connection to the server,
              "Send" to send a message to the server and "Close" to close the connection.
              You can change the message and send multiple times.</p>
            <br />

            <div><button id="open" onClick={handleWSConnect}>Open</button></div>
            <div><button id="close" onClick={handleWSClose}>Close</button></div>
            <div>
              <input id="input" type="text"  value="Hello world!"></input>
              <button id="send" onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>



    <script> {
      // <table>
      //     <tr><td valign="top" width="50%">
      //     <form>
      //         <button id="open">Open</button>
      //         <button id="close">Close</button>
      //         <p><input id="input" type="text" value="Hello world!">
      //         <button id="send">Send</button>
      //     </form>
      //     </td><td valign="top" width="50%">
      //     <div id="output" style="max-height: 70vh;overflow-y: scroll;"></div>
      //     </td></tr>
      // </table>


        // window.addEventListener("load", function(evt) {
        //     var output = document.getElementById("output");
        //     var input = document.getElementById("input");
        //     var ws;
        //     var print = function(message) {
        //         var d = document.createElement("div");
        //         d.textContent = message;
        //         output.appendChild(d);
        //         output.scroll(0, output.scrollHeight);
        //     };
        //     document.getElementById("open").onclick = function(evt) {
        //         if (ws) {
        //             return false;
        //         }
        //         ws = new WebSocket("{{.}}");
        //         ws.onopen = function(evt) {
        //             print("OPEN");
        //         }
        //         ws.onclose = function(evt) {
        //             print("CLOSE");
        //             ws = null;
        //         }
        //         ws.onmessage = function(evt) {
        //             print("RESPONSE: " + evt.data);
        //         }
        //         ws.onerror = function(evt) {
        //             print("ERROR: " + evt.data);
        //         }
        //         return false;
        //     };
        //     document.getElementById("send").onclick = function(evt) {
        //         if (!ws) {
        //             return false;
        //         }
        //         print("SEND: " + input.value);
        //         ws.send(input.value);
        //         return false;
        //     };
        //     document.getElementById("close").onclick = function(evt) {
        //         if (!ws) {
        //             return false;
        //         }
        //         ws.close();
        //         return false;
        //     };
        // });
        }
    </script>

    </>
  );
}
export default HomePage;
