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

@Table({ timestamps:false })
export default class Category extends Model<Category> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER())
  pid: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(32))
  name: string;
}
