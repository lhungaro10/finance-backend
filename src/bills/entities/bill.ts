import {
	Transaction,
	type TransactionProps,
} from "../../transactions/entities/transaction.ts";

export interface BillProps extends TransactionProps {
	description: string;
	lastPayment: Date;
}

export class Bill extends Transaction {
	private description: string;
	private lastPayment: Date;

	constructor(props: BillProps) {
		super({
			amount: props.amount,
			dueDate: props.dueDate,
			isOut: true,
			category: props.category,
			transactionType: props.transactionType,
			createdAt: props.createdAt,
			updatedAt: props.updatedAt,
		});
		this.description = props.description;
		this.lastPayment = props.lastPayment;
	}

	public getDescription(): string {
		return this.description;
	}
	public getLastPayment(): Date {
		return this.lastPayment;
	}

	public setLastPayment(lastPayment: Date): void {
		this.lastPayment = lastPayment;
	}

	public setDescription(description: string): void {
		this.description = description;
	}
}
