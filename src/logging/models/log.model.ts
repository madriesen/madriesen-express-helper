/** Import file dependencies */
import mongoose, { Schema, Document } from 'mongoose';

/** Define the document */
export interface ILog extends Document {
  time: string;
  method: string;
  namespace: string;
  message: string;
  object: object;
}

/** Define the schema */
const logSchema: Schema = new Schema({
  time: { type: String, required: true },
  method: { type: String, required: true },
  namespace: { type: String, required: true },
  message: { type: String, required: true },
  object: { type: Object, required: false },
});

export default mongoose.model<ILog>('log', logSchema);
