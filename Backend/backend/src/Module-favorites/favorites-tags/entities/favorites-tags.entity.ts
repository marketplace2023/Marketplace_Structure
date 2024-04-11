import { Favorites } from 'src/Module-favorites/favorites/entities/favorites.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'favorites_tags' })
export class FavoritesTags {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'color', type: 'varchar' })
  public color: string;

  @Column({ name: 'favorite_id', type: 'int' })
  public favorite_id: number;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(() => Favorites, (favorites) => favorites.favoritesTagss)
  @JoinColumn({ name: 'favorites_id' })
  public favorites: Favorites;
  //--------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<FavoritesTags>) {
    Object.assign(this, data);
  }
}
