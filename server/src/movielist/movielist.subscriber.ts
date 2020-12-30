import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { MovieList } from './movielist.entity';

@EventSubscriber()
export class MovielistSubscriber
  implements EntitySubscriberInterface<MovieList> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return MovieList;
  }

  async afterInsert(event: InsertEvent<any>) {
    return await event.connection.query('SELECT * FROM movie_list');
    // console.log(event.connection.createQueryBuilder('movie_list').getMany());
  }
}
