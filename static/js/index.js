//https://www.eclipse.org/paho/clients/js/


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
   userName: "licha_05reyes@outlook.com",
   password: "Galapagos1001",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("licha_05reyes@outlook/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "licha_05reyes@outlook/test1";
    client.send(message);
	
  }
  
  function abrir()   {
	  message = new Paho.MQTT.Message("abrir");
	  message.descriptionName = "licha_05reyes@outlook/test";
	  client.send(message);
	  
	}
  function cerrar()   {
	  message = new Paho.MQTT.Message("cerrar");
	  message.descriptionName = "licha_05reyes@outlook/test";
	  client.send(message);
	  
	}
  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
