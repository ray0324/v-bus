import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  DataType,
  Unique,
} from 'sequelize-typescript';

@Table({ createdAt: 'created_at', updatedAt: 'updated_at' })
export default class Product extends Model<Product> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(32))
  sn: string;

  @AllowNull(true)
  @Column(DataType.INTEGER())
  cat_id: number;

  @Column(DataType.STRING(32))
  name: string;

  @AllowNull(true)
  @Column(DataType.STRING(256))
  img: string;

  @AllowNull(false)
  @Column(DataType.STRING(1024))
  desc: string;

  @AllowNull(false)
  @Column(DataType.INTEGER())
  qty: number;

  @AllowNull(true)
  @Column(DataType.STRING(8))
  unit: Date;

  @AllowNull(true)
  @Column(DataType.FLOAT())
  price: number;
}
