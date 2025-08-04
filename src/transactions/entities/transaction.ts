type TransactionProps = {
	value: number;
	effectedAt: Date;
	isOut: boolean;
};

export class Transaction {
	private value: number;
	private effectedAt: Date;
	private createdAt: Date;
	private updatedAt: Date;
	private isOut: boolean = false;

	public constructor({ value, effectedAt, isOut }: TransactionProps) {
		this.value = value;
		this.effectedAt = effectedAt;
		this.createdAt = new Date();
		this.updatedAt = this.createdAt;
		this.isOut = isOut;
	}

	public getValue() {
		return this.value;
	}

	public getEffectedAt() {
		return this.effectedAt;
	}

	public getCreatedAt() {
		return this.createdAt;
	}

	public getUpdatedAt() {
		return this.updatedAt;
	}
	public getIsOut() {
		return this.isOut;
	}

	public setUpdatedAt(updatedAt: Date) {
		this.updatedAt = updatedAt;
	}

	public setEffectedAt(effectedAt: Date) {
		this.effectedAt = effectedAt;
	}
	public setIsOut(isOut: boolean) {
		this.isOut = isOut;
	}
}
