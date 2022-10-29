import {Server,Socket} from "socket.io";

const EVENTS = {
  connection: 'connection'
}

function socket((io:Server){
  logger.info('Socket Enabled');
  io.on(EVENTS.connection,(socket:Socket)=>{
    logger.info(`User connect ${socket.id}`)
  })
}

export default socket;
