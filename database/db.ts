import mongoose, { ConnectionStates } from "mongoose";
import { env } from "../settings";

const { disconnected, connected } = ConnectionStates;

const mongoConnection = {
  isConnected: disconnected,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Ya se estaba conectado");
    return;
  }

  if (mongoose.connections.length > disconnected) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === connected) {
      console.log("Usando conexión anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(env.MONGODB_URI);
  mongoConnection.isConnected = connected;
  console.log("Conectado a MongoDB:", env.MONGODB_URI);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === disconnected) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = disconnected;

  console.log("Desconectado de MongoDB");
};
