import { Injectable, Logger } from '@nestjs/common'
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class SwitchGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('SwitchGateway')

  @WebSocketServer() server: Server

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Client connected: ${socket.id}`)
  }
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Client disconnected: ${socket.id}`)
  }

  afterInit() {
    console.log('GameGateway initialized')
  }

  switchOn() {
    this.server.emit('switch', 'on')
    this.logger.log('switch on')
  }

  switchOff() {
    this.server.emit('switch', 'off')
    this.logger.log('switch off')
  }

  @SubscribeMessage('return_state')
  handleReturnState(@MessageBody() state: 0 | 1) {
    this.server.emit('client_state_return', state)
    this.logger.log(`client state return: ${state}`)
  }

  @SubscribeMessage('client_request_state')
  handleClientStateRequest() {
    this.server.emit('request_state')
    this.logger.log('client state request')
  }
}
