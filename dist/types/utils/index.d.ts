import BN from "bn.js";
import nacl from "tweetnacl";
export { BN, nacl };
import Address from './Address';
export { Address };
export declare function sha256(bytes: Uint8Array): Promise<ArrayBuffer>;
export declare function toNano(amount: (number | BN | string)): BN;
export declare function fromNano(amount: (number | BN | string)): string;
export declare function bytesToHex(buffer: Uint8Array): string;
export declare function hexToBytes(hex: string): Uint8Array;
export declare function stringToBytes(str: string, size?: number): Uint8Array;
export declare function crc32c(bytes: Uint8Array): Uint8Array;
export declare function crc16(data: ArrayLike<number>): Uint8Array;
export declare function concatBytes(a: Uint8Array, b: Uint8Array): Uint8Array;
export declare function compareBytes(a: Uint8Array, b: Uint8Array): boolean;
export declare function bytesToBase64(bytes: Uint8Array): string;
export declare function base64toString(base64: string): string;
export declare function stringToBase64(string: string): string;
export declare function base64ToBytes(base64: string): Uint8Array;
export declare function readNBytesUIntFromArray(n: number, ui8array: Uint8Array): number;