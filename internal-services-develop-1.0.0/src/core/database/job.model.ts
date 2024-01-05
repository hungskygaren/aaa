import {
  Model,
  Table,
  Column,
  PrimaryKey,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
  DataType,
  AllowNull,
  Default
} from 'sequelize-typescript'

@Table({
  tableName: 'jobs',
  underscored: true,
  timestamps: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  paranoid: true
})
export class Job extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string

  @Column(DataType.STRING)
  name: string

  @Default('READY')
  @Column(DataType.ENUM('READY', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELED'))
  status: string

  @Column(DataType.INTEGER)
  attempt: number

  @AllowNull
  @Column(DataType.JSON)
  payload: string

  @AllowNull
  @Column(DataType.TEXT)
  error: string

  @AllowNull
  @Column(DataType.DATE)
  startedAt: string

  @AllowNull
  @Column(DataType.DATE)
  finishedAt: string

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @AllowNull
  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date

  @AllowNull
  @DeletedAt
  @Column(DataType.DATE)
  deletedAt: Date
}
