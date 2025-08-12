export type TransactionTypeProps = {
  type: string;
};

export class TransactionType {
  private static TransactionTypeMapper: Record<string, string> = {
    debit: "debit",
    credit: "credit",
  };
  private type: string;

  constructor(props: TransactionTypeProps) {
    this.type = TransactionType.TransactionTypeMapper[props.type];
  }

  public getType(): string {
    return TransactionType.TransactionTypeMapper[this.type];
  }

  public setType(type: string): void {
    this.type = TransactionType.TransactionTypeMapper[type];
  }
}
