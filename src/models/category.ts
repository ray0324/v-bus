import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  DataType,
  HasMany,
} from 'sequelize-typescript';

import Product from './product';

@Table({ timestamps: false })
export default class Category extends Model<Category> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER())
  pid: number;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  name: string;

  @HasMany(() => Product, 'cat_id')
  products: Product[];
}
