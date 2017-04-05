import { IStorageHandler } from 'baasic-sdk-javascript';

export class InMemoryStorageHandler implements IStorageHandler
{
    private storage : any = {};

    clear(): void {
        this.storage = {};
    }

    remove(key: string): void {
        delete this.storage[key];
    }

    set(key: string, data: any): void {
        this.storage[key] = data;
    }

    get(key: string): any {
        return this.storage[key];
    }
}