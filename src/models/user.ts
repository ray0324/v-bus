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
export default class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  username: string;

  @AllowNull(true)
  @Column(DataType.STRING(32))
  nickname: string;

  @Column(DataType.STRING(32))
  password: string;

  @AllowNull(true)
  @Column(DataType.STRING(32))
  email: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(11))
  mobile: string;

  @AllowNull(false)
  @Column(DataType.TINYINT())
  gender: number;

  @AllowNull(true)
  @Column(DataType.DATEONLY())
  birthdate: Date;
}
