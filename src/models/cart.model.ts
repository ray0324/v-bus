import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';

import Product from './product.model';
import User from './user.model';

@Table({
  tableName: 'carts',
  timestamps: false,
  paranoid: true,
})

export default class Cart extends Model<Cart> {
  @BelongsTo(() => User, 'user_id')
  user: User;

  @BelongsTo(()=>Product,'prod_id')
  product:Product;

  @Column(DataType.FLOAT())
  prod_qty:number;
}
