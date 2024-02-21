var wsUri = "ws://echo.websocket.org/"

init()

function init(){
    testWebSocket();
}

function testWebSocket(){
    websocket = new WebSocket(wsUri)
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
    websocket.onerror = onError;
}

function onOpen(evt){
    console.log("onOpen: " + evt.data)
    websocket.send("enviar mensaje" + message)
}

function onClose(evt){
    console.log("onClose: " + evt.data)
}

function onMessage(evt){
    console.log("onMessage: " + evt.data)
}

function onError(evt){
    console.log("onError: " + evt.data)
}