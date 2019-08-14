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
export default class Order extends Model<Order> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(32))
  order_no: string;

  @AllowNull(false)
  @Column(DataType.INTEGER())
  user_id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER())
  status: number;

  @AllowNull(true)
  @Column(DataType.FLOAT())
  total: number;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  address: string;

  @AllowNull(false)
  @Column(DataType.STRING(11))
  mobile: string;

  @AllowNull(false)
  @Column(DataType.INTEGER())
  order_from: number;

}
