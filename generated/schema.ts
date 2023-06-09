// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ConfirmedAttendee extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ConfirmedAttendee entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ConfirmedAttendee must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ConfirmedAttendee", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ConfirmedAttendee | null {
    return changetype<ConfirmedAttendee | null>(
      store.get("ConfirmedAttendee", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get eventID(): Bytes {
    let value = this.get("eventID");
    return value!.toBytes();
  }

  set eventID(value: Bytes) {
    this.set("eventID", Value.fromBytes(value));
  }

  get attendeeAddress(): Bytes {
    let value = this.get("attendeeAddress");
    return value!.toBytes();
  }

  set attendeeAddress(value: Bytes) {
    this.set("attendeeAddress", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class DepositsPaidOut extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositsPaidOut entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type DepositsPaidOut must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DepositsPaidOut", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): DepositsPaidOut | null {
    return changetype<DepositsPaidOut | null>(
      store.get("DepositsPaidOut", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get eventID(): Bytes {
    let value = this.get("eventID");
    return value!.toBytes();
  }

  set eventID(value: Bytes) {
    this.set("eventID", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class NewEventCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewEventCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type NewEventCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewEventCreated", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): NewEventCreated | null {
    return changetype<NewEventCreated | null>(
      store.get("NewEventCreated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get eventID(): Bytes {
    let value = this.get("eventID");
    return value!.toBytes();
  }

  set eventID(value: Bytes) {
    this.set("eventID", Value.fromBytes(value));
  }

  get creatorAddress(): Bytes {
    let value = this.get("creatorAddress");
    return value!.toBytes();
  }

  set creatorAddress(value: Bytes) {
    this.set("creatorAddress", Value.fromBytes(value));
  }

  get eventTimestamp(): BigInt {
    let value = this.get("eventTimestamp");
    return value!.toBigInt();
  }

  set eventTimestamp(value: BigInt) {
    this.set("eventTimestamp", Value.fromBigInt(value));
  }

  get maxCapacity(): BigInt {
    let value = this.get("maxCapacity");
    return value!.toBigInt();
  }

  set maxCapacity(value: BigInt) {
    this.set("maxCapacity", Value.fromBigInt(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get eventDataCID(): string {
    let value = this.get("eventDataCID");
    return value!.toString();
  }

  set eventDataCID(value: string) {
    this.set("eventDataCID", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class NewRSVP extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewRSVP entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type NewRSVP must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewRSVP", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): NewRSVP | null {
    return changetype<NewRSVP | null>(store.get("NewRSVP", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get eventID(): Bytes {
    let value = this.get("eventID");
    return value!.toBytes();
  }

  set eventID(value: Bytes) {
    this.set("eventID", Value.fromBytes(value));
  }

  get attendeeAddress(): Bytes {
    let value = this.get("attendeeAddress");
    return value!.toBytes();
  }

  set attendeeAddress(value: Bytes) {
    this.set("attendeeAddress", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
