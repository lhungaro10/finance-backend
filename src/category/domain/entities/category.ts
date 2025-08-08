export type CategoryProps = {
	name: string;
	createdAt: Date;
	updatedAt: Date;
};

export class Category {
	private name: string;
	private createdAt: Date;
	private updatedAt: Date;

	public constructor(props: CategoryProps) {
		this.name = props.name;
		this.createdAt = props.createdAt;
		this.updatedAt = props.updatedAt;
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public getCreatedAt(): Date {
		return this.createdAt;
	}

	public setCreatedAt(createdAt: Date): void {
		this.createdAt = createdAt;
	}

	public getUpdatedAt(): Date {
		return this.updatedAt;
	}

	public setUpdatedAt(updatedAt: Date): void {
		this.updatedAt = updatedAt;
	}
}
