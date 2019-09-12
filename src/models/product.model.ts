import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  DataType,
  Unique,
  // ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Category from './category.model';

@Table({
  tableName: 'products',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export default class Product extends Model<Product> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(32))
  sn: string;

  @BelongsTo(() => Category, 'cat_id')
  category: Category;

  @Column(DataType.STRING(32))
  name: string;

  @AllowNull(true)
  @Column(DataType.STRING(256))
  img: string;

  @AllowNull(false)
  @Column(DataType.STRING(1024))
  desc: string;

  @AllowNull(false)
  @Column(DataType.FLOAT())
  qty: number;

  @AllowNull(true)
  @Column(DataType.STRING(8))
  unit: Date;

  @AllowNull(true)
  @Column(DataType.FLOAT())
  price: number;
}
