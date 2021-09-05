import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Subscriber {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;
}

export default Subscriber;
