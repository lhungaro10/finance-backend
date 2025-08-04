import type { Category } from "../../category/entities/category.ts";
import type { TransactionType } from "./transaction-type.ts";

export interface TransactionProps {
	amount: number;
	dueDate: Date;
	isOut: boolean;
	category: Category;
	transactionType: TransactionType;
	createdAt: Date;
	updatedAt: Date;
}

export class Transaction {
	private amount: number;
	private dueDate: Date;
	private isOut: boolean = false;
	private category: Category;
	private transactionType: TransactionType;
	private createdAt: Date;
	private updatedAt: Date;

	public constructor(props: TransactionProps) {
		this.amount = props.amount;
		this.dueDate = props.dueDate;
		this.isOut = props.isOut;
		this.category = props.category;
		this.transactionType = props.transactionType;
		this.createdAt = props.createdAt;
		this.updatedAt = props.createdAt;
	}

	public isFinished(): boolean {
		return true;
	}

	// getters and setters
	public getAmount() {
		return this.amount;
	}

	public getDueDate() {
		return this.dueDate;
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
	public getTransactionType(): TransactionType {
		return this.transactionType;
	}

	public setTransactionType(transactionType: string): void {
		this.transactionType.setType(transactionType);
	}

	public setCategory(category: Category): void {
		this.category = category;
	}

	public setUpdatedAt(updatedAt: Date) {
		this.updatedAt = updatedAt;
	}

	public setDueDate(dueDate: Date) {
		this.dueDate = dueDate;
	}
	public setIsOut(isOut: boolean) {
		this.isOut = isOut;
	}

	public setAmount(amount: number) {
		this.amount = amount;
	}
}
