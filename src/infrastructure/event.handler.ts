import { EventEmitter } from 'events';
import { IEventHandler } from 'baasic-sdk-javascript';

export class EventHandler implements IEventHandler
{
    private readonly emitter = new EventEmitter();

    pushMessage(message: any, args: any): void {
        
    }
    
    triggerEvent(eventName: string, data: any): void {
        this.emitter.emit(eventName, data);
    }

    addEvent(eventName: string, func: any): void {
        this.emitter.on(eventName, func);
    }
}