/* eslint-disable @typescript-eslint/no-explicit-any */
import { UniqueEntityID } from './unique-entity'

export class Entity<T> {
  private _id: UniqueEntityID
  // protected Pode ser acessado pela classe Entity todas as que a estendem.
  protected props: T

  get id() {
    return this._id
  }

  protected constructor(props: T, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }
}
