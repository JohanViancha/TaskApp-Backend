import { UserRepository } from "../../domain/repositories/user.repository";
import { User } from "../../domain/entities/user.entity";
import { db } from "../firestore/firestore.client";

export class FirestoreUserRepository implements UserRepository {
  private collection = db.collection("users");

  async findByEmail(email: string): Promise<User | null> {
    const snapshot = await this.collection
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    const data = doc.data();


    return new User(data.id, data.email, data.name, data.createdAt.toDate());
  }

  async create(user: User): Promise<User> {
    await this.collection.doc(user.id).set({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    });

    return user;
  }
}
