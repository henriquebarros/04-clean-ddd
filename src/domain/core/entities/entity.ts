/* eslint-disable @typescript-eslint/no-explicit-any */
import { randomUUID } from 'node:crypto'

export class Entity<T> {
  private _id: string
  // protected Pode ser acessado pela classe Entity todas as que a estendem.
  protected props: T

  get id() {
    return this._id
  }

  constructor(props: T, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }
}
