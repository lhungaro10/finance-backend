import type { Category } from "../../category/entities/category.ts";

type TransactionProps = {
	amount: number;
	effectedAt: Date;
	isOut: boolean;
	category: Category;
	createdAt: Date;
	updatedAt: Date;
};

export class Transaction {
	private amount: number;
	private effectedAt: Date;
	private isOut: boolean = false;
	private category: Category;
	private createdAt: Date;
	private updatedAt: Date;

	public constructor(props: TransactionProps) {
		this.amount = props.amount;
		this.effectedAt = props.effectedAt;
		this.isOut = props.isOut;
		this.category = props.category;
		this.createdAt = props.createdAt;
		this.updatedAt = props.createdAt;
	}

	public getAmount() {
		return this.amount;
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

	public getCategory(): Category {
		return this.category;
	}

	public setCategory(category: Category): void {
		this.category = category;
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

	public setAmount(amount: number) {
		this.amount = amount;
	}
}
