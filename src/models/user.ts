import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  DataType,
  Unique,
  BeforeCreate,
} from 'sequelize-typescript';

import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Table({ createdAt: 'created_at', updatedAt: 'updated_at' })
export default class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(32))
  username: string;

  @AllowNull(true)
  @Column(DataType.STRING(32))
  nickname: string;

  @Column(DataType.STRING(32))
  password: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(32))
  email: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(11))
  mobile: string;

  @AllowNull(true)
  @Column(DataType.TINYINT())
  gender: number;

  @AllowNull(true)
  @Column(DataType.DATEONLY())
  birthdate: Date;

  @BeforeCreate
  static async encryptPwd(user: User) {
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, salt);
  }

}
